import {
  createRouteRegistry,
  fallback,
  group,
  lazy,
  route,
  type RouteMeta,
} from '@askrjs/askr/router';
import {
  categoryEntries,
  categoryPageEntries,
  contributorEntries,
  contributorPageEntries,
  mediaPageEntries,
  reviewEntries,
  reviewPageEntries,
  topicEntries,
  topicPageEntries,
  yearEntries,
  yearPageEntries,
} from '../generated/route-entries';
import {
  loadArticle,
  loadCollection,
  loadDirectory,
  loadEditorial,
} from '../content/content';
import { clientRouteMeta } from '../content/client-metadata';
import { SiteLayout } from './_layout';
import {
  CollectionRoutePage,
  DirectoryRoutePage,
  EditorialRoutePage,
} from './content-pages';
import { NotFoundPage } from './not-found';
import { normalizeSiteBasePath } from '../site-base';

export function createVegbooksRouteRegistry(basePath = '') {
  const base = normalizeSiteBasePath(basePath);
  const metadata = ({ pathname }: { pathname: string }): Promise<RouteMeta> =>
    clientRouteMeta(pathname);

  return createRouteRegistry(
    () => {
      group({ layout: SiteLayout }, () => {
        route('/', CollectionRoutePage, {
          loader: () => loadCollection('home'),
          meta: metadata,
        });
        route('/reviews', CollectionRoutePage, {
          loader: () => loadCollection('reviews'),
          meta: metadata,
        });
        route('/reviews/page/{page}', CollectionRoutePage, {
          entries: () => [...reviewPageEntries],
          loader: ({ params }) =>
            loadCollection('reviews', '', Number(params.page)),
          meta: metadata,
        });
        for (const { slug } of reviewEntries) {
          route(
            `/reviews/${slug}`,
            lazy(async () => {
              const { loadArticleRoutePage } =
                await import('../content/article-loader');
              return loadArticleRoutePage(slug);
            }),
            {
              loader: () => loadArticle(slug),
              meta: metadata,
            }
          );
        }
        route('/media', CollectionRoutePage, {
          loader: () => loadCollection('media'),
          meta: metadata,
        });
        route('/media/page/{page}', CollectionRoutePage, {
          entries: () => [...mediaPageEntries],
          loader: ({ params }) =>
            loadCollection('media', '', Number(params.page)),
          meta: metadata,
        });
        route('/topics', DirectoryRoutePage, {
          loader: () => loadDirectory('topics'),
          meta: metadata,
        });
        route('/topics/{slug}', CollectionRoutePage, {
          entries: () => [...topicEntries],
          loader: ({ params }) => loadCollection('topic', params.slug),
          meta: metadata,
        });
        route('/topics/{slug}/page/{page}', CollectionRoutePage, {
          entries: () => [...topicPageEntries],
          loader: ({ params }) =>
            loadCollection('topic', params.slug, Number(params.page)),
          meta: metadata,
        });
        route('/contributors', DirectoryRoutePage, {
          loader: () => loadDirectory('contributors'),
          meta: metadata,
        });
        route('/contributors/{slug}', CollectionRoutePage, {
          entries: () => [...contributorEntries],
          loader: ({ params }) => loadCollection('contributor', params.slug),
          meta: metadata,
        });
        route('/contributors/{slug}/page/{page}', CollectionRoutePage, {
          entries: () => [...contributorPageEntries],
          loader: ({ params }) =>
            loadCollection('contributor', params.slug, Number(params.page)),
          meta: metadata,
        });
        route('/archive', DirectoryRoutePage, {
          loader: () => loadDirectory('archive'),
          meta: metadata,
        });
        route('/archive/{year}', CollectionRoutePage, {
          entries: () => [...yearEntries],
          loader: ({ params }) => loadCollection('year', params.year),
          meta: metadata,
        });
        route('/archive/{year}/page/{page}', CollectionRoutePage, {
          entries: () => [...yearPageEntries],
          loader: ({ params }) =>
            loadCollection('year', params.year, Number(params.page)),
          meta: metadata,
        });
        route('/about', EditorialRoutePage, {
          loader: () => loadEditorial('about'),
          meta: metadata,
        });
        route('/favorites', EditorialRoutePage, {
          loader: () => loadEditorial('favorites'),
          meta: metadata,
        });
        route('/publishers', EditorialRoutePage, {
          loader: () => loadEditorial('publishers'),
          meta: metadata,
        });
        route(
          '/search',
          lazy(async () => (await import('./search')).SearchPage),
          { meta: metadata }
        );
        route('/404', NotFoundPage, { meta: metadata });
        route('/{category}', CollectionRoutePage, {
          entries: () => [...categoryEntries],
          loader: ({ params }) => loadCollection('category', params.category),
          meta: metadata,
        });
        route('/{category}/page/{page}', CollectionRoutePage, {
          entries: () => [...categoryPageEntries],
          loader: ({ params }) =>
            loadCollection('category', params.category, Number(params.page)),
          meta: metadata,
        });
        fallback(NotFoundPage);
      });
    },
    { basePath: base }
  );
}
