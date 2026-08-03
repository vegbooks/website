import { Show, state } from '@askrjs/askr';
import { SearchIcon } from '@askrjs/lucide/icons/search';
import { resource } from '@askrjs/askr/resources';
import { currentRoute, updateRouteQuery } from '@askrjs/askr/router';
import { ContentLayout } from '../components/content-layout';
import { SearchEngine } from '../search';
import type { SearchIndex } from '../search/types';
import { SiteLink } from '../components/site-link';
import { sitePath } from '../site-base';
import { SEARCH_PAGE_SIZE } from '../content/archive-contract';

export function SearchPage() {
  const route = currentRoute();
  const [query, setQuery] = state(route.query.get('q') ?? '');
  const [page, setPage] = state(
    Math.max(1, Number(route.query.get('page')) || 1)
  );

  const browserReady = typeof window !== 'undefined';
  const search = resource(
    ({ signal }) => {
      if (typeof window === 'undefined') return null;
      return fetch(sitePath('/search-index.json'), { signal }).then(
        async (response) => {
          if (!response.ok)
            throw new Error(`Search index returned ${response.status}`);
          return new SearchEngine((await response.json()) as SearchIndex);
        }
      );
    },
    [browserReady]
  );

  const syncUrl = (nextPage = 1, nextQuery = query()) => {
    setPage(nextPage);
    updateRouteQuery({
      q: nextQuery.trim() || null,
      category: null,
      topic: null,
      year: null,
      page: nextPage > 1 ? String(nextPage) : null,
    });
  };

  return (
    <ContentLayout width="wide">
      <section class="search-page" aria-labelledby="search-title">
        <header class="collection-header">
          <p class="kicker">1,008 Preserved Reviews</p>
          <h1 id="search-title">Search Reviews</h1>
          <p>Search titles, review text, categories, topics, and reviewers.</p>
        </header>
        <form
          class="search-form"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            syncUrl();
          }}
        >
          <label class="search-form__query">
            <span>Search Reviews</span>
            <span class="search-field">
              <SearchIcon
                class="search-field__icon"
                size={18}
                aria-hidden="true"
              />
              <input
                type="search"
                value={query()}
                placeholder="Title, reviewer, subject, or keyword"
                onInput={(event) => {
                  setQuery((event.currentTarget as HTMLInputElement).value);
                  setPage(1);
                }}
                autocomplete="off"
              />
            </span>
          </label>
        </form>
        <Show
          when={() => search.error}
          fallback={
            <Show
              when={() => search.value}
              fallback={<p role="status">Loading the search index…</p>}
            >
              {(engine) => (
                <SearchResults
                  engine={engine}
                  query={query}
                  page={page}
                  onPageChange={(nextPage) => syncUrl(nextPage)}
                />
              )}
            </Show>
          }
        >
          {(error) => (
            <p role="alert">Search is unavailable: {error.message}</p>
          )}
        </Show>
      </section>
    </ContentLayout>
  );
}

function SearchResults({
  engine,
  query,
  page,
  onPageChange,
}: {
  engine: SearchEngine;
  query: () => string;
  page: () => number;
  onPageChange: (page: number) => void;
}) {
  const result = engine.search({
    query: query(),
    offset: (page() - 1) * SEARCH_PAGE_SIZE,
    limit: SEARCH_PAGE_SIZE,
  });
  const totalPages = Math.max(1, Math.ceil(result.total / SEARCH_PAGE_SIZE));

  if (result.total === 0)
    return <p class="search-empty">No reviews matched those search choices.</p>;

  return (
    <>
      <p class="search-count" role="status">
        {result.total} result{result.total === 1 ? '' : 's'}
      </p>
      <ol class="search-results" start={(page() - 1) * SEARCH_PAGE_SIZE + 1}>
        {result.hits.map((hit) => (
          <li key={hit.document.id}>
            <h2>
              <SiteLink href={hit.document.url}>{hit.document.title}</SiteLink>
            </h2>
            {hit.document.summary && <p>{hit.document.summary}</p>}
            <p class="post-meta">
              {hit.document.date?.slice(0, 4)}
              {hit.document.categories?.length
                ? ` · ${hit.document.categories.join(', ')}`
                : ''}
            </p>
          </li>
        ))}
      </ol>
      {totalPages > 1 && (
        <nav class="pagination" aria-label="Search result pages">
          <span>
            {page() > 1 && (
              <button type="button" onClick={() => onPageChange(page() - 1)}>
                ← Previous
              </button>
            )}
          </span>
          <span>
            Page {page()} of {totalPages}
          </span>
          <span>
            {page() < totalPages && (
              <button type="button" onClick={() => onPageChange(page() + 1)}>
                Next →
              </button>
            )}
          </span>
        </nav>
      )}
    </>
  );
}
