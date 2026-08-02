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
  loadMediaCollection,
} from '../content/content';
import { clientRouteMeta } from '../content/client-metadata';
import { SiteLayout } from './_layout';
import {
  CollectionRoutePage,
  DirectoryRoutePage,
  EditorialRoutePage,
} from './content-pages';
import { HomePage } from './index';
import { NotFoundPage } from './not-found';
import {
  addSiteBase,
  normalizeSiteBasePath,
  stripSiteBase,
} from '../site-base';

export function createVegbooksRouteRegistry(basePath = '') {
  const base = normalizeSiteBasePath(basePath);
  const at = <Path extends string>(path: Path): Path =>
    addSiteBase(path, base) as Path;
  const metadata = ({ pathname }: { pathname: string }): Promise<RouteMeta> =>
    clientRouteMeta(stripSiteBase(pathname, base));

  return createRouteRegistry(() => {
    group({ layout: SiteLayout }, () => {
      route(at('/'), HomePage, {
        loader: () => loadCollection('home'),
        meta: metadata,
      });
      route(at('/reviews'), CollectionRoutePage, {
        loader: () => loadCollection('reviews'),
        meta: metadata,
      });
      route(at('/reviews/page/{page}'), CollectionRoutePage, {
        entries: () => [...reviewPageEntries],
        loader: ({ params }) =>
          loadCollection('reviews', '', Number(params.page)),
        meta: metadata,
      });
      for (const { slug } of reviewEntries) {
        route(
          at(`/reviews/${slug}`),
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
      route(at('/media'), CollectionRoutePage, {
        loader: () => loadMediaCollection(),
        meta: metadata,
      });
      route(at('/media/page/{page}'), CollectionRoutePage, {
        entries: () => [...mediaPageEntries],
        loader: ({ params }) => loadMediaCollection(Number(params.page)),
        meta: metadata,
      });
      route(at('/topics'), DirectoryRoutePage, {
        loader: () => loadDirectory('topics'),
        meta: metadata,
      });
      route(at('/topics/{slug}'), CollectionRoutePage, {
        entries: () => [...topicEntries],
        loader: ({ params }) => loadCollection('topic', params.slug),
        meta: metadata,
      });
      route(at('/topics/{slug}/page/{page}'), CollectionRoutePage, {
        entries: () => [...topicPageEntries],
        loader: ({ params }) =>
          loadCollection('topic', params.slug, Number(params.page)),
        meta: metadata,
      });
      route(at('/contributors'), DirectoryRoutePage, {
        loader: () => loadDirectory('contributors'),
        meta: metadata,
      });
      route(at('/contributors/{slug}'), CollectionRoutePage, {
        entries: () => [...contributorEntries],
        loader: ({ params }) => loadCollection('contributor', params.slug),
        meta: metadata,
      });
      route(at('/contributors/{slug}/page/{page}'), CollectionRoutePage, {
        entries: () => [...contributorPageEntries],
        loader: ({ params }) =>
          loadCollection('contributor', params.slug, Number(params.page)),
        meta: metadata,
      });
      route(at('/archive'), DirectoryRoutePage, {
        loader: () => loadDirectory('archive'),
        meta: metadata,
      });
      route(at('/archive/{year}'), CollectionRoutePage, {
        entries: () => [...yearEntries],
        loader: ({ params }) => loadCollection('year', params.year),
        meta: metadata,
      });
      route(at('/archive/{year}/page/{page}'), CollectionRoutePage, {
        entries: () => [...yearPageEntries],
        loader: ({ params }) =>
          loadCollection('year', params.year, Number(params.page)),
        meta: metadata,
      });
      route(at('/about'), EditorialRoutePage, {
        loader: () => loadEditorial('about'),
        meta: metadata,
      });
      route(at('/favorites'), EditorialRoutePage, {
        loader: () => loadEditorial('favorites'),
        meta: metadata,
      });
      route(at('/publishers'), EditorialRoutePage, {
        loader: () => loadEditorial('publishers'),
        meta: metadata,
      });
      route(
        at('/search'),
        lazy(async () => (await import('./search')).SearchPage),
        { meta: metadata }
      );
      route(at('/404'), NotFoundPage, { meta: metadata });
      route(at('/{category}'), CollectionRoutePage, {
        entries: () => [...categoryEntries],
        loader: ({ params }) => loadCollection('category', params.category),
        meta: metadata,
      });
      route(at('/{category}/page/{page}'), CollectionRoutePage, {
        entries: () => [...categoryPageEntries],
        loader: ({ params }) =>
          loadCollection('category', params.category, Number(params.page)),
        meta: metadata,
      });
      fallback(NotFoundPage);
    });
  });
}
