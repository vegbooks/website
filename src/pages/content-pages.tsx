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
  ContentBlock,
  PostMetadata,
  SidebarModel,
} from '../content/types';
import {
  ArticleTemplate,
  CollectionTemplate,
  EditorialPageTemplate,
} from '../templates';
import { SiteLink } from '../components/site-link';

export function CollectionRoutePage() {
  const data = routeData<CollectionRouteData>();
  return (
    <CollectionTemplate collection={data.collection} sidebar={data.sidebar} />
  );
}

export function createArticleRoutePage(blocks: readonly ContentBlock[]) {
  return function ArticleRoutePage() {
    const data = routeData<{
      article: PostMetadata;
      sidebar: SidebarModel;
    }>();
    return (
      <ArticleTemplate
        article={data.article}
        children={<ArticleContent blocks={blocks} />}
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
                <SiteLink href={topic.url}>{topic.name}</SiteLink>{' '}
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
                  <SiteLink href={reviewer.url}>{reviewer.name}</SiteLink>{' '}
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
                <SiteLink href={year.url}>{year.year}</SiteLink>
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
    <aside class="archive-notice" aria-label="Publication status">
      <strong>Vegbooks no longer publishes new content.</strong> It is not
      accepting review copies, submissions, or contributor applications. The
      information below is retained for context.
    </aside>
  );
}
