import type { RouteMeta } from '@askrjs/askr/router';

const siteUrl = 'https://vegbooks.org';

export async function clientRouteMeta(pathname: string): Promise<RouteMeta> {
  const path = normalizePath(pathname);
  if (path === '/') {
    return collectionMeta(
      'Vegbooks Reviews',
      'Reviews of children’s books and media with animal and environmental themes.',
      path
    );
  }
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
  return (await import('./metadata.ts')).routeMeta(path);
}

function collectionMeta(
  title: string,
  description: string,
  path: string
): RouteMeta {
  return {
    ...baseMeta(`${title} | Vegbooks`, description, path),
    jsonLd: breadcrumbs([
      ['Home', '/'],
      [title, path],
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

function normalizePath(value: string): string {
  const path = value.split(/[?#]/, 1)[0] || '/';
  return path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
}

function absolute(path: string): string {
  return new URL(path, siteUrl).href;
}
