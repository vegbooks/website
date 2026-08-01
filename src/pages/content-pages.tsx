import { routeData } from '@askrjs/askr/router';
import { ArchiveSidebar } from '../components/archive-sidebar';
import { ArticleContent } from '../components/article-content';
import { ContentLayout } from '../components/content-layout';
import type {
  CollectionRouteData,
  DirectoryRouteData,
  EditorialRouteData,
} from '../content/content';
import type {
  PostComponent,
  PostMetadata,
  SidebarModel,
} from '../content/types';
import {
  ArticleTemplate,
  CollectionTemplate,
  EditorialPageTemplate,
} from '../templates';

export function CollectionRoutePage() {
  const data = routeData<CollectionRouteData>();
  return (
    <CollectionTemplate collection={data.collection} sidebar={data.sidebar} />
  );
}

export function createArticleRoutePage(Post: PostComponent) {
  return function ArticleRoutePage() {
    const data = routeData<{
      article: PostMetadata;
      sidebar: SidebarModel;
    }>();
    return (
      <ArticleTemplate
        article={data.article}
        Post={Post}
        sidebar={data.sidebar}
      />
    );
  };
}

export function EditorialRoutePage() {
  const data = routeData<EditorialRouteData>();
  return (
    <EditorialPageTemplate page={data.page} sidebar={data.sidebar}>
      <ArchiveNotice />
      <ArticleContent blocks={data.page.content} />
    </EditorialPageTemplate>
  );
}

export function DirectoryRoutePage() {
  const data = routeData<DirectoryRouteData>();
  const contributorEditorial = data.manifest.editorials.find(
    (page) => page.slug === 'contributors'
  );
  return (
    <ContentLayout
      width="wide"
      sidebar={<ArchiveSidebar sidebar={data.sidebar} />}
    >
      <section class="directory-page" data-directory={data.kind}>
        <header class="collection-header">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </header>
        {data.kind === 'topics' && (
          <ul class="term-directory term-directory--topics">
            {data.manifest.topics.map((topic) => (
              <li key={topic.slug}>
                <a href={topic.url}>{topic.name}</a>{' '}
                <span>({topic.count})</span>
              </li>
            ))}
          </ul>
        )}
        {data.kind === 'contributors' && (
          <>
            <ul class="term-directory">
              {data.manifest.reviewers.map((reviewer) => (
                <li key={reviewer.slug}>
                  <a href={reviewer.url}>{reviewer.name}</a>{' '}
                  <span>({reviewer.count})</span>
                </li>
              ))}
            </ul>
            {contributorEditorial && (
              <section
                class="historical-editorial"
                aria-labelledby="historical-contributors"
              >
                <h2 id="historical-contributors">
                  Historical contributor profiles
                </h2>
                <ArchiveNotice />
                <ArticleContent blocks={contributorEditorial.content} />
              </section>
            )}
          </>
        )}
        {data.kind === 'archive' && (
          <ul class="year-directory">
            {data.manifest.years.map((year) => (
              <li key={year.year}>
                <a href={year.url}>{year.year}</a>
                <span>{year.count} reviews</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </ContentLayout>
  );
}

function ArchiveNotice() {
  return (
    <aside class="archive-notice" aria-label="Archive status">
      <strong>Vegbooks is a read-only archive.</strong> It is no longer
      accepting review copies, submissions, or contributor applications. The
      historical information below is preserved for context.
    </aside>
  );
}
