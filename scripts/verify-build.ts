import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse, type DefaultTreeAdapterMap } from 'parse5';
import { archiveLastModified } from '../src/content/site-metadata.ts';
import { generatedRouteCount } from '../src/generated/route-entries.ts';

type Node = DefaultTreeAdapterMap['node'];
type Element = DefaultTreeAdapterMap['element'];

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
assert(existsSync(dist), 'dist does not exist');
const htmlFiles = walk(dist).filter((file) => basenameIsIndex(file));
assert(
  htmlFiles.length === generatedRouteCount,
  `expected ${generatedRouteCount} generated pages, found ${htmlFiles.length}`
);

for (const file of htmlFiles) {
  const route = routeForFile(file);
  const html = readFileSync(file, 'utf8');
  const document = parse(html);
  const titles = findAll(document, (element) => element.tagName === 'title');
  const canonicals = findAll(
    document,
    (element) =>
      element.tagName === 'link' &&
      (attr(element, 'rel') ?? '').split(/\s+/).includes('canonical')
  );
  const h1s = findAll(document, (element) => element.tagName === 'h1');
  assert(titles.length === 1, `${route} has ${titles.length} title elements`);
  assert(
    canonicals.length === 1,
    `${route} has ${canonicals.length} canonicals`
  );
  assert(h1s.length === 1, `${route} has ${h1s.length} H1 elements`);
  const canonical = attr(canonicals[0], 'href') ?? '';
  assert(
    canonical.startsWith('https://vegbooks.org/'),
    `${route} canonical is not absolute`
  );
  assert(
    !canonical.includes('index.php'),
    `${route} canonical contains index.php`
  );
  const robots = findAll(
    document,
    (element) =>
      element.tagName === 'meta' && attr(element, 'name') === 'robots'
  );
  if (route === '/search/' || route === '/404/') {
    assert(
      robots.some((element) =>
        (attr(element, 'content') ?? '').includes('noindex')
      ),
      `${route} must be noindex`
    );
  }
  if (
    route.startsWith('/reviews/') &&
    route.split('/').filter(Boolean).length === 2
  ) {
    const jsonLd = findAll(
      document,
      (element) =>
        element.tagName === 'script' &&
        attr(element, 'type') === 'application/ld+json'
    ).map(textContent);
    assert(
      jsonLd.some((value) => value.includes('BlogPosting')),
      `${route} lacks BlogPosting JSON-LD`
    );
  }
  if (route === '/') {
    assert(
      html.includes('UA-12465398-1') &&
        html.includes('https://www.google-analytics.com/analytics.js'),
      'home document does not preserve Google Analytics'
    );
    const socialLinks = new Set(
      findAll(document, (element) => element.tagName === 'a')
        .map((element) => attr(element, 'href') ?? '')
        .filter((href) =>
          /^(?:https:\/\/(?:twitter|facebook)\.com\/vegbooks|https:\/\/www\.pinterest\.com\/jessicavegbooks\/)$/.test(
            href
          )
        )
    );
    assert(socialLinks.size === 3, 'home navigation lacks social profiles');
    const primaryNavigation = findAll(
      document,
      (element) =>
        element.tagName === 'nav' &&
        attr(element, 'id') === 'primary-navigation'
    );
    assert(
      primaryNavigation.length === 1,
      'home page must have one primary navigation'
    );
    const primaryNavigationText = textContent(primaryNavigation[0]);
    for (const label of ['Topics', 'Archive']) {
      assert(
        primaryNavigationText.includes(label),
        `primary navigation lacks ${label}`
      );
    }
    assert(
      html.includes('href="/search/"') &&
        html.includes('data-icon="SearchIcon"'),
      'primary navigation lacks the Askr Lucide search link'
    );
    assert(
      !html.includes('class="utility-nav"'),
      'archive links must not render as a detached utility menu'
    );
    const pageText = textContent(document);
    for (const label of [
      'The Vegbooks Archive',
      'Search the Archive',
      'Browse Categories',
      'Archive by Year',
      'Recent Reviews',
    ]) {
      assert(
        pageText.includes(label),
        `home page lacks Title Case label: ${label}`
      );
    }
  }
  for (const element of findAll(document, (candidate) =>
    ['a', 'img', 'script', 'link'].includes(candidate.tagName)
  )) {
    const raw = attr(
      element,
      element.tagName === 'a' || element.tagName === 'link' ? 'href' : 'src'
    );
    if (
      !raw ||
      raw.startsWith('#') ||
      /^(?:https?:|mailto:|tel:|data:)/i.test(raw)
    )
      continue;
    const url = new URL(raw, `https://vegbooks.org${route}`);
    if (url.hostname !== 'vegbooks.org') continue;
    assert(
      resolveOutput(url.pathname),
      `${route} references missing output ${url.pathname}`
    );
  }
}

assert(
  existsSync(join(dist, '404.html')),
  'portable 404.html was not generated'
);
const sitemapFiles = walk(dist).filter((file) => /sitemap.*\.xml$/.test(file));
assert(sitemapFiles.length > 0, 'sitemap was not generated');
const sitemap = sitemapFiles
  .map((file) => readFileSync(file, 'utf8'))
  .join('\n');
assert(
  !sitemap.includes('https://vegbooks.org/search/'),
  'search leaked into sitemap'
);
assert(
  !sitemap.includes('https://vegbooks.org/404/'),
  '404 leaked into sitemap'
);
assert(
  (sitemap.match(/<loc>/g) ?? []).length === generatedRouteCount - 2,
  'sitemap route count is incomplete'
);
assert(
  (
    sitemap.match(
      new RegExp(`<lastmod>${archiveLastModified}</lastmod>`, 'g')
    ) ?? []
  ).length ===
    generatedRouteCount - 2,
  'sitemap entries must carry the stable archive modification date'
);
assert(
  !sitemap.includes('<changefreq>'),
  'sitemap must not emit ignored change frequency hints'
);

console.log(
  `Verified ${htmlFiles.length} static pages, their metadata and internal assets, plus the complete sitemap.`
);

function resolveOutput(pathname: string): boolean {
  const decoded = decodeURIComponent(pathname);
  const asset = join(dist, decoded.replace(/^\//, ''));
  if (extname(decoded)) return existsSync(asset);
  return existsSync(join(asset, 'index.html'));
}

function routeForFile(file: string): string {
  const path = relative(dist, dirname(file)).split('\\').join('/');
  return path === '' || path === '.' ? '/' : `/${path}/`;
}

function basenameIsIndex(file: string): boolean {
  return file.endsWith('/index.html') || file === join(dist, 'index.html');
}

function walk(directory: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

function attr(element: Element, name: string): string | undefined {
  return element.attrs.find((attribute) => attribute.name === name)?.value;
}

function childNodes(node: Node): Node[] {
  return 'childNodes' in node ? (node.childNodes as Node[]) : [];
}

function* walkNodes(root: Node): Generator<Node> {
  for (const child of childNodes(root)) {
    yield child;
    yield* walkNodes(child);
  }
}

function findAll(
  root: Node,
  predicate: (element: Element) => boolean
): Element[] {
  const values: Element[] = [];
  for (const node of walkNodes(root)) {
    if ('tagName' in node && predicate(node as Element))
      values.push(node as Element);
  }
  return values;
}

function textContent(root: Node): string {
  let value = '';
  for (const node of walkNodes(root)) {
    if (node.nodeName === '#text' && 'value' in node) value += node.value;
  }
  return value;
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
