import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { articleImports } from '../src/generated/article-imports.ts';
import { manifest } from '../src/generated/manifest.ts';
import {
  categoryEntries,
  categoryPageEntries,
  contributorEntries,
  contributorPageEntries,
  generatedRouteCount,
  mediaPageEntries,
  reviewEntries,
  reviewPageEntries,
  topicEntries,
  topicPageEntries,
  yearEntries,
  yearPageEntries,
} from '../src/generated/route-entries.ts';
import type { ContentBlock, InlineContent } from '../src/content/types.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const styles = readFileSync(join(root, 'src', 'styles.css'), 'utf8');
assert(
  !/text-transform:\s*uppercase/i.test(styles),
  'interface text must render in Title Case, not forced uppercase'
);
const provenance = JSON.parse(
  readFileSync(join(root, 'src', 'generated', 'provenance.json'), 'utf8')
) as {
  counts: Record<string, number>;
  sourceFiles: {
    canonicalUrl: string;
    parity: {
      sourceTextCharacters: number;
      generatedTextCharacters: number;
      sourceImages: number;
      generatedImages: number;
    };
  }[];
};

assert(manifest.articles.length === 1008, 'expected 1,008 reviews');
assert(manifest.topics.length === 2541, 'expected 2,541 topics');
assert(manifest.years.length === 13, 'expected 13 archive years');
assert(manifest.categories.length === 5, 'expected five media categories');
assert(
  manifest.categories.map((category) => category.slug).join(',') ===
    'books,movies,music,television,board-games',
  'category inventory or order drifted'
);
assert(
  new Set(manifest.articles.map((article) => article.slug)).size === 1008,
  'duplicate review slugs'
);
assert(
  new Set(manifest.topics.map((topic) => topic.slug)).size === 2541,
  'duplicate topic slugs'
);
assert(
  Object.keys(articleImports).length === 1008,
  'article import map is incomplete'
);
assert(provenance.counts.unresolvedLinks === 0, 'unresolved source links');
assert(provenance.counts.unresolvedMedia === 0, 'unresolved source media');
assert(
  provenance.counts.amazonAffiliateLinks === 194,
  'Amazon affiliate link inventory drifted'
);
assert(
  provenance.counts.staticRoutes === generatedRouteCount,
  'route count differs from provenance'
);
assert(
  provenance.sourceFiles.length === 1008,
  'provenance source inventory is incomplete'
);

const mediaRoot = join(root, 'public', 'media');
const mediaFiles = walkFiles(mediaRoot);
assert(
  mediaFiles.length === provenance.counts.mediaFiles,
  'generated media count differs from provenance'
);
for (const file of mediaFiles) {
  const path = relative(mediaRoot, file);
  assert(
    /^\d{4}\/\d{2}\/[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+$/.test(path),
    `media path is not kebab-case: ${path}`
  );
  assert(
    !/-\d+x\d+(?=\.[a-z0-9]+$)/.test(path),
    `WordPress thumbnail variant leaked into media path: ${path}`
  );
}
for (const file of walkFiles(join(root, 'public', 'assets'))) {
  const path = relative(join(root, 'public', 'assets'), file);
  assert(
    /^[a-z0-9]+(?:-[a-z0-9]+)*\.[a-z0-9]+$/.test(path),
    `site asset is not kebab-case: ${path}`
  );
}

const routeSet = buildRouteSet();
assert(
  routeSet.size === generatedRouteCount,
  'generated route entries collide'
);
const articleBySlug = new Map(
  manifest.articles.map((article) => [article.slug, article])
);
const postRoot = join(root, 'src', 'posts');
const postFiles = walkFiles(postRoot).filter((file) => file.endsWith('.tsx'));
assert(postFiles.length === 1008, 'expected 1,008 TSX post modules');
assert(
  !existsSync(join(root, 'src', 'generated', 'articles')),
  'review modules must live in src/posts, not src/generated/articles'
);

for (const article of manifest.articles) {
  assert(
    articleBySlug.has(article.slug),
    `article missing from manifest: ${article.slug}`
  );
  assert(
    article.reviewer.name.length > 0,
    `unattributed review: ${article.slug}`
  );
  assert(
    article.categories.length > 0 &&
      article.categories.every((category) => category.slug !== '1'),
    `invalid category on ${article.slug}`
  );
  const postPath = join(postRoot, `${article.slug}.tsx`);
  assert(existsSync(postPath), `missing TSX post body: ${article.slug}`);
  const postSource = readFileSync(postPath, 'utf8');
  assert(
    postSource.includes('export const article =') &&
      postSource.includes('export default function Post()') &&
      postSource.includes('<div class="article-content">'),
    `invalid TSX post module: ${article.slug}`
  );
  if (article.image) verifyAsset(article.image.src, article.url);
  for (const term of [
    ...article.categories,
    ...article.tags,
    article.reviewer,
  ]) {
    assert(
      routeSet.has(normalizeRoute(term.url)),
      `missing taxonomy route ${term.url}`
    );
  }
}

for (const page of manifest.editorials) {
  assert(page.content.length > 0, `empty editorial body: ${page.slug}`);
  verifyBlocks(page.content, page.canonicalUrl, routeSet);
}

for (const source of provenance.sourceFiles) {
  const parity = source.parity;
  assert(
    parity.generatedTextCharacters > 0,
    `empty normalized text: ${source.canonicalUrl}`
  );
  assert(
    parity.sourceImages === parity.generatedImages,
    `image parity differs for ${source.canonicalUrl}: source=${parity.sourceImages}, generated=${parity.generatedImages}`
  );
  const ratio = parity.generatedTextCharacters / parity.sourceTextCharacters;
  assert(
    ratio >= 0.9 && ratio <= 1.1,
    `text parity outside reviewed tolerance for ${source.canonicalUrl}: ${ratio.toFixed(3)}`
  );
}

const searchIndexPath = join(root, 'public', 'search-index.json');
const searchIndex = JSON.parse(readFileSync(searchIndexPath, 'utf8')) as {
  version: number;
  documents: unknown[][];
  terms: [string, number[]][];
};
assert(searchIndex.version === 2, 'unsupported generated search index');
assert(
  searchIndex.documents.length === 1008,
  'search document inventory is incomplete'
);
assert(
  searchIndex.terms.length > 1000,
  'search vocabulary is unexpectedly small'
);
assert(
  searchIndex.terms.every(
    ([term, postings], index) =>
      term.length > 0 &&
      postings.length % 2 === 0 &&
      postings.every((value) => Number.isInteger(value) && value >= 0) &&
      (index === 0 || searchIndex.terms[index - 1][0] < term)
  ),
  'compact search terms or delta-encoded postings are invalid'
);
const searchIndexBytes = statSync(searchIndexPath).size;
assert(
  searchIndexBytes <= 2_000_000,
  `search index exceeds its 2 MB budget: ${searchIndexBytes}`
);
assert(
  searchIndexBytes === provenance.counts.searchIndexBytes,
  'search index size differs from provenance'
);

const redirects = JSON.parse(
  readFileSync(join(root, 'public', 'redirects.json'), 'utf8')
) as { from: string; to: string; status: number }[];
assert(
  redirects.length === provenance.counts.redirects,
  'redirect count drifted'
);
assert(
  redirects.every(
    (redirect) =>
      redirect.status === 301 &&
      redirect.from.startsWith('/') &&
      redirect.to.startsWith('/')
  ),
  'redirect manifest contains a non-portable entry'
);

console.log(
  `Verified ${manifest.articles.length} reviews, ${manifest.topics.length} topics, ${generatedRouteCount} routes, ${provenance.counts.mediaFiles} media files, and ${redirects.length} redirects.`
);

function verifyBlocks(
  blocks: readonly ContentBlock[],
  sourceUrl: string,
  routes: Set<string>
): void {
  for (const block of blocks) {
    if (block.type === 'image') {
      verifyAsset(block.src, sourceUrl);
      if (block.href) verifyLink(block.href, sourceUrl, routes);
    }
    if (block.type === 'quote') verifyBlocks(block.children, sourceUrl, routes);
    if ('children' in block && block.type !== 'quote') {
      verifyInline(block.children, sourceUrl, routes);
    }
    if (block.type === 'list') {
      for (const item of block.items) verifyInline(item, sourceUrl, routes);
    }
    if (block.type === 'table') {
      if (block.caption) verifyInline(block.caption, sourceUrl, routes);
      for (const row of block.rows) {
        for (const cell of row.cells)
          verifyInline(cell.children, sourceUrl, routes);
      }
    }
  }
}

function verifyInline(
  nodes: readonly InlineContent[],
  sourceUrl: string,
  routes: Set<string>
): void {
  for (const node of nodes) {
    if (typeof node === 'string' || node.type === 'lineBreak') continue;
    if (node.type === 'link') {
      verifyLink(node.href, sourceUrl, routes);
    }
    verifyInline(node.children, sourceUrl, routes);
  }
}

function verifyLink(
  href: string,
  sourceUrl: string,
  routes: Set<string>
): void {
  assert(
    !href.startsWith('/') || !href.includes('index.php'),
    `legacy internal URL in ${sourceUrl}`
  );
  if (href.startsWith('/media/')) verifyAsset(href, sourceUrl);
  else if (href.startsWith('/')) {
    assert(
      routes.has(normalizeRoute(href)),
      `missing internal route ${href} linked from ${sourceUrl}`
    );
  }
}

function verifyAsset(path: string, sourceUrl: string): void {
  if (!path.startsWith('/')) return;
  assert(
    existsSync(join(root, 'public', path.replace(/^\//, ''))),
    `missing asset ${path} referenced by ${sourceUrl}`
  );
}

function buildRouteSet(): Set<string> {
  const routes = new Set<string>([
    '/',
    '/reviews/',
    '/media/',
    '/topics/',
    '/contributors/',
    '/archive/',
    '/about/',
    '/favorites/',
    '/publishers/',
    '/search/',
    '/404/',
  ]);
  for (const { slug } of reviewEntries) routes.add(`/reviews/${slug}/`);
  for (const { page } of reviewPageEntries)
    routes.add(`/reviews/page/${page}/`);
  for (const { page } of mediaPageEntries) routes.add(`/media/page/${page}/`);
  for (const { slug } of topicEntries) routes.add(`/topics/${slug}/`);
  for (const { slug, page } of topicPageEntries)
    routes.add(`/topics/${slug}/page/${page}/`);
  for (const { slug } of contributorEntries)
    routes.add(`/contributors/${slug}/`);
  for (const { slug, page } of contributorPageEntries)
    routes.add(`/contributors/${slug}/page/${page}/`);
  for (const { year } of yearEntries) routes.add(`/archive/${year}/`);
  for (const { year, page } of yearPageEntries)
    routes.add(`/archive/${year}/page/${page}/`);
  for (const { category } of categoryEntries) routes.add(`/${category}/`);
  for (const { category, page } of categoryPageEntries)
    routes.add(`/${category}/page/${page}/`);
  return routes;
}

function normalizeRoute(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0];
  return pathname === '/' ? '/' : `${pathname.replace(/\/+$/, '')}/`;
}

function walkFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(path) : [path];
  });
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}
