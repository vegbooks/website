import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { serializeRouteMeta } from '@askrjs/askr/router';
import type { DocumentRenderArgs } from '@askrjs/askr/ssg';
import { routeMeta } from './src/content/metadata';
import { archiveLastModified } from './src/content/site-metadata';
import { routeRegistry } from './src/pages/_routes';

export const registry = routeRegistry;
export const outputDir = 'dist';

let clientTemplate: string | undefined;

function renderDocument({ appHtml, context }: DocumentRenderArgs) {
  clientTemplate ??= readFileSync(
    resolve(process.cwd(), '.askr/client/index.html'),
    'utf8'
  );

  const metadata = routeMeta(context.pathname);

  return clientTemplate
    .replace(/<title(?:\s[^>]*)?>.*?<\/title>/, serializeRouteMeta(metadata))
    .replace('<div id="app"></div>', `<div id="app">${appHtml}</div>`);
}

export const staticConfig = {
  registry,
  outputDir,
  document: renderDocument,
  assets: [
    { from: resolve(process.cwd(), 'public'), to: '.' },
    { from: resolve(process.cwd(), '.askr/client/assets'), to: 'assets' },
  ],
  siteUrl: 'https://vegbooks.org',
  concurrency: 8,
  sitemap: {
    defaults: { lastModified: archiveLastModified },
    routes: { '/404': false, '/search': false },
    resolve: ({ path }: { path: string }) =>
      path === '/404' || path === '/search' ? false : undefined,
  },
};
