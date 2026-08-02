import type { RouteMeta } from '@askrjs/askr/router';
import { manifest } from '../generated/manifest';
import { pageUrl } from './content';
import { archiveLastModified } from './site-metadata';
import { deliveryImagePath } from '../image-paths.ts';

const siteUrl = manifest.siteUrl;

export function routeMeta(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  if (path === '/search/') {
    return baseMeta('Search | Vegbooks', 'Search Vegbooks reviews.', path, {
      robots: 'noindex, follow',
    });
  }
  if (path === '/404/') {
    return baseMeta(
      'Page Not Found | Vegbooks',
      'This page could not be found on Vegbooks.',
      path,
      { robots: 'noindex, follow' }
    );
  }
  if (path === '/') {
    return collectionMeta(
      'Vegbooks Reviews',
      'Reviews of children’s books and media with animal and environmental themes.',
      path,
      1,
      1
    );
  }
  const reviewMatch = path.match(/^\/reviews\/([^/]+)\/$/);
  if (reviewMatch) {
    const article = manifest.articles.find(
      (candidate) => candidate.slug === reviewMatch[1]
    );
    if (!article) return unknownMeta(path);
    const canonical = absolute(article.url);
    return {
      title: `${article.title} | Vegbooks`,
      description: article.seo.description,
      canonical,
      openGraph: {
        title: article.title,
        description: article.seo.description,
        type: 'article',
        url: canonical,
        site_name: 'Vegbooks',
        ...(article.seo.image
          ? {
              image:
                deliveryImagePath(article.seo.image, 'webp') ??
                article.seo.image,
            }
          : {}),
      },
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.seo.description,
          datePublished: article.publishedAt,
          dateModified: archiveLastModified,
          author: {
            '@type': 'Person',
            name: article.reviewer.name,
            url: absolute(article.reviewer.url),
          },
          publisher: {
            '@type': 'Organization',
            name: 'Vegbooks',
            url: siteUrl,
          },
          mainEntityOfPage: canonical,
          ...(article.seo.image
            ? {
                image:
                  deliveryImagePath(article.seo.image, 'webp') ??
                  article.seo.image,
              }
            : {}),
        },
        breadcrumbs([
          ['Home', '/'],
          ['Reviews', '/reviews/'],
          [article.title, article.url],
        ]),
      ],
    };
  }

  const collection = collectionDetails(path);
  if (collection) {
    return collectionMeta(
      collection.title,
      collection.description,
      path,
      collection.page,
      collection.pages,
      collection.baseUrl
    );
  }

  const editorial = manifest.editorials.find(
    (candidate) => candidate.canonicalUrl === path
  );
  if (editorial) {
    return {
      ...baseMeta(
        `${editorial.title} | Vegbooks`,
        editorial.description ?? '',
        path
      ),
      jsonLd: breadcrumbs([
        ['Home', '/'],
        [editorial.title, editorial.canonicalUrl],
      ]),
    };
  }

  const directories: Record<string, [string, string]> = {
    '/topics/': ['Topics', 'Browse all topics on Vegbooks.'],
    '/contributors/': [
      'Contributors',
      'The reviewers and historical contributors to Vegbooks.',
    ],
    '/archive/': [
      'Browse by Year',
      'Browse Vegbooks reviews by publication year.',
    ],
  };
  const directory = directories[path];
  if (directory) {
    return {
      ...baseMeta(`${directory[0]} | Vegbooks`, directory[1], path),
      jsonLd: breadcrumbs([
        ['Home', '/'],
        [directory[0], path],
      ]),
    };
  }
  return unknownMeta(path);
}

function collectionDetails(path: string):
  | {
      title: string;
      description: string;
      page: number;
      pages: number;
      baseUrl: string;
    }
  | undefined {
  const match = path.match(/^(.*?)(?:page\/(\d+)\/)?$/);
  if (!match) return undefined;
  const baseUrl = normalizePath(match[1]);
  const page = Number(match[2] ?? 1);
  if (baseUrl === '/reviews/') {
    return {
      title: 'All Reviews',
      description: 'Every review published by Vegbooks from 2009 through 2021.',
      page,
      pages: Math.ceil(manifest.articles.length / manifest.pageSize),
      baseUrl,
    };
  }
  if (baseUrl === '/media/') {
    const count = manifest.articles.filter((article) =>
      article.categories.some((category) => category.slug !== 'books')
    ).length;
    return {
      title: 'Movies, Etc.',
      description:
        'Vegbooks reviews of movies, music, television, and board games.',
      page,
      pages: Math.ceil(count / manifest.pageSize),
      baseUrl,
    };
  }
  const category = manifest.categories.find(
    (candidate) => candidate.url === baseUrl
  );
  if (category) {
    return {
      title: category.name,
      description: `${category.count} Vegbooks reviews in ${category.name}.`,
      page,
      pages: Math.ceil(category.count / manifest.pageSize),
      baseUrl,
    };
  }
  const topicMatch = baseUrl.match(/^\/topics\/([^/]+)\/$/);
  const topic = topicMatch
    ? manifest.topics.find((candidate) => candidate.slug === topicMatch[1])
    : undefined;
  if (topic) {
    return {
      title: `Topic: ${topic.name}`,
      description: `${topic.count} Vegbooks review${topic.count === 1 ? '' : 's'} tagged ${topic.name}.`,
      page,
      pages: Math.ceil(topic.count / manifest.pageSize),
      baseUrl,
    };
  }
  const reviewerMatch = baseUrl.match(/^\/contributors\/([^/]+)\/$/);
  const reviewer = reviewerMatch
    ? manifest.reviewers.find(
        (candidate) => candidate.slug === reviewerMatch[1]
      )
    : undefined;
  if (reviewer) {
    return {
      title: reviewer.name,
      description: `${reviewer.count} Vegbooks review${reviewer.count === 1 ? '' : 's'} by ${reviewer.name}.`,
      page,
      pages: Math.ceil(reviewer.count / manifest.pageSize),
      baseUrl,
    };
  }
  const yearMatch = baseUrl.match(/^\/archive\/(\d{4})\/$/);
  const year = yearMatch
    ? manifest.years.find(
        (candidate) => String(candidate.year) === yearMatch[1]
      )
    : undefined;
  if (year) {
    return {
      title: `Reviews from ${year.year}`,
      description: `${year.count} Vegbooks reviews published in ${year.year}.`,
      page,
      pages: Math.ceil(year.count / manifest.pageSize),
      baseUrl,
    };
  }
  return undefined;
}

function collectionMeta(
  title: string,
  description: string,
  path: string,
  page: number,
  pages: number,
  baseUrl = path
): RouteMeta {
  const pageTitle = page === 1 ? title : `${title} — Page ${page}`;
  const links: { rel: string; href: string }[] = [];
  if (page > 1)
    links.push({ rel: 'prev', href: absolute(pageUrl(baseUrl, page - 1)) });
  if (page < pages)
    links.push({ rel: 'next', href: absolute(pageUrl(baseUrl, page + 1)) });
  return {
    ...baseMeta(`${pageTitle} | Vegbooks`, description, path),
    ...(links.length ? { links } : {}),
    jsonLd: breadcrumbs([
      ['Home', '/'],
      [pageTitle, path],
    ]),
  };
}

function baseMeta(
  title: string,
  description: string,
  path: string,
  extra: Pick<RouteMeta, 'robots'> = {}
): RouteMeta {
  const canonical = absolute(path);
  return {
    title,
    description,
    canonical,
    ...extra,
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      site_name: 'Vegbooks',
      image: absolute('/assets/vegbooks-id.webp'),
    },
  };
}

function breadcrumbs(items: readonly [string, string][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absolute(url),
    })),
  };
}

function unknownMeta(path: string): RouteMeta {
  return baseMeta(
    'Page Not Found | Vegbooks',
    'This page could not be found on Vegbooks.',
    path,
    { robots: 'noindex, follow' }
  );
}

function normalizePath(value: string): string {
  const path = value.split(/[?#]/, 1)[0] || '/';
  return path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
}

function absolute(path: string): string {
  return new URL(path, siteUrl).href;
}
