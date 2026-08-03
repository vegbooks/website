import type {
  ArticleSummary,
  CollectionPage,
  ContentManifest,
  EditorialPage,
  Pagination,
  PostMetadata,
  SidebarModel,
} from './types';
import { COLLECTION_PAGE_SIZE } from './archive-contract';

export interface CollectionRouteData {
  collection: CollectionPage;
  sidebar: SidebarModel;
}

export interface DirectoryRouteData {
  kind: 'topics' | 'contributors' | 'archive' | 'media';
  title: string;
  description: string;
  manifest: ContentManifest;
  sidebar: SidebarModel;
}

export interface EditorialRouteData {
  page: EditorialPage;
  sidebar: SidebarModel;
}

let manifestPromise: Promise<ContentManifest> | undefined;

export function loadManifest(): Promise<ContentManifest> {
  manifestPromise ??= import('../generated/manifest').then(
    ({ manifest }) => manifest
  );
  return manifestPromise;
}

export async function loadArticle(slug: string): Promise<{
  article: PostMetadata;
  sidebar: SidebarModel;
}> {
  const manifest = await loadManifest();
  const index = manifest.articles.findIndex(
    (candidate) => candidate.slug === slug
  );
  const summary = manifest.articles[index];
  if (!summary) throw new Error(`Unknown review: ${slug}`);
  const previous = manifest.articles[index + 1];
  const next = manifest.articles[index - 1];
  const article: PostMetadata = {
    ...summary,
    ...(previous && {
      previous: { title: previous.title, url: previous.url },
    }),
    ...(next && { next: { title: next.title, url: next.url } }),
  };
  return { article, sidebar: buildSidebar(manifest) };
}

export async function loadCollection(
  kind:
    | 'home'
    | 'reviews'
    | 'category'
    | 'topic'
    | 'contributor'
    | 'year'
    | 'media',
  key = '',
  page = 1
): Promise<CollectionRouteData> {
  const manifest = await loadManifest();
  let title = 'Vegbooks Reviews';
  let description =
    'Reviews of children’s books and media with animal and environmental themes.';
  let baseUrl = '/';
  let articles = [...manifest.articles];

  if (kind === 'reviews') {
    title = 'All Reviews';
    description = 'Every review published by Vegbooks from 2009 through 2021.';
    baseUrl = '/reviews/';
  } else if (kind === 'category') {
    const category = manifest.categories.find((term) => term.slug === key);
    if (!category) throw new Error(`Unknown category: ${key}`);
    title = category.name;
    description = `${category.count} Vegbooks reviews in ${category.name}.`;
    baseUrl = category.url;
    articles = summariesForSlugs(manifest, category.articleSlugs);
  } else if (kind === 'topic') {
    const topic = manifest.topics.find((term) => term.slug === key);
    if (!topic) throw new Error(`Unknown topic: ${key}`);
    title = `Topic: ${topic.name}`;
    description = `${topic.count} Vegbooks review${topic.count === 1 ? '' : 's'} tagged ${topic.name}.`;
    baseUrl = topic.url;
    articles = summariesForSlugs(manifest, topic.articleSlugs);
  } else if (kind === 'contributor') {
    const reviewer = manifest.reviewers.find((term) => term.slug === key);
    if (!reviewer) throw new Error(`Unknown contributor: ${key}`);
    title = reviewer.name;
    description = `${reviewer.count} Vegbooks review${reviewer.count === 1 ? '' : 's'} by ${reviewer.name}.`;
    baseUrl = reviewer.url;
    articles = summariesForSlugs(manifest, reviewer.articleSlugs);
  } else if (kind === 'year') {
    const year = manifest.years.find((term) => String(term.year) === key);
    if (!year) throw new Error(`Unknown archive year: ${key}`);
    title = `Reviews from ${year.year}`;
    description = `${year.count} Vegbooks reviews published in ${year.year}.`;
    baseUrl = year.url;
    articles = summariesForSlugs(manifest, year.articleSlugs);
  } else if (kind === 'media') {
    title = 'Movies, Etc.';
    description =
      'Vegbooks reviews of movies, music, television, and board games.';
    baseUrl = '/media/';
    articles = manifest.articles.filter((article) =>
      article.categories.some((category) => category.slug !== 'books')
    );
  }

  const totalPages =
    kind === 'home'
      ? 1
      : Math.max(1, Math.ceil(articles.length / COLLECTION_PAGE_SIZE));
  if (!Number.isInteger(page) || page < 1 || page > totalPages) {
    throw new Error(`Invalid collection page ${page} for ${baseUrl}`);
  }
  const canonicalUrl = pageUrl(baseUrl, page);
  const pagination: Pagination = {
    current: page,
    total: totalPages,
    ...(page > 1 ? { previousUrl: pageUrl(baseUrl, page - 1) } : {}),
    ...(page < totalPages ? { nextUrl: pageUrl(baseUrl, page + 1) } : {}),
  };
  return {
    collection: {
      kind,
      title: page === 1 ? title : `${title} — Page ${page}`,
      description,
      canonicalUrl,
      articles: articles.slice(
        (page - 1) * COLLECTION_PAGE_SIZE,
        page * COLLECTION_PAGE_SIZE
      ),
      pagination,
    },
    sidebar: buildSidebar(manifest),
  };
}

export async function loadDirectory(
  kind: DirectoryRouteData['kind']
): Promise<DirectoryRouteData> {
  const manifest = await loadManifest();
  const content = {
    topics: {
      title: 'Topics',
      description: 'Browse all 2,541 topics preserved from the original site.',
    },
    contributors: {
      title: 'Reviewers',
      description: 'Browse reviews by the people who wrote them.',
    },
    archive: {
      title: 'Browse by Year',
      description: 'Browse the Vegbooks chronology from 2009 through 2021.',
    },
    media: {
      title: 'Movies, Etc.',
      description: 'Browse every non-book media category on Vegbooks.',
    },
  }[kind];
  return { kind, ...content, manifest, sidebar: buildSidebar(manifest) };
}

export async function loadEditorial(slug: string): Promise<EditorialRouteData> {
  const manifest = await loadManifest();
  const page = manifest.editorials.find((editorial) => editorial.slug === slug);
  if (!page) throw new Error(`Unknown editorial page: ${slug}`);
  return { page, sidebar: buildSidebar(manifest) };
}

export function pageUrl(baseUrl: string, page: number): string {
  return page <= 1 ? baseUrl : `${baseUrl}page/${page}/`;
}

function summariesForSlugs(
  manifest: ContentManifest,
  slugs: readonly string[]
): ArticleSummary[] {
  const bySlug = new Map(
    manifest.articles.map((article) => [article.slug, article])
  );
  return slugs.map((slug) => {
    const article = bySlug.get(slug);
    if (!article)
      throw new Error(`Manifest references missing review: ${slug}`);
    return article;
  });
}

function buildSidebar(manifest: ContentManifest): SidebarModel {
  return {
    sections: [
      {
        title: 'Search Reviews',
        description: 'Find reviews by title, subject, reviewer, or keyword.',
        links: [{ label: 'Open Search', url: '/search/' }],
      },
      {
        title: 'About Vegbooks',
        description:
          'A read-only resource for parents and teachers supporting vegan and vegetarian kids.',
      },
      {
        title: 'Browse Categories',
        links: [
          ...manifest.categories.map((category) => ({
            label: `${category.name} (${category.count})`,
            url: category.url,
          })),
          { label: 'All Topics', url: '/topics/' },
        ],
      },
      {
        title: 'Browse by Year',
        links: manifest.years.map((year) => ({
          label: `${year.year} (${year.count})`,
          url: year.url,
        })),
      },
      {
        title: 'Recent Reviews',
        links: manifest.articles.slice(0, 5).map((article) => ({
          label: article.title,
          url: article.url,
        })),
      },
    ],
  };
}
