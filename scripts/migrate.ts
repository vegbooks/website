import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { basename, dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageSize } from 'image-size';
import { parse, type DefaultTreeAdapterMap } from 'parse5';

type Node = DefaultTreeAdapterMap['node'];
type Element = DefaultTreeAdapterMap['element'];
type Document = DefaultTreeAdapterMap['document'];
type InlineContent =
  | string
  | { type: 'emphasis'; children: InlineContent[] }
  | { type: 'strong'; children: InlineContent[] }
  | { type: 'code'; children: InlineContent[] }
  | { type: 'lineBreak' }
  | {
      type: 'link';
      href: string;
      children: InlineContent[];
      external?: boolean;
    };
type ContentBlock =
  | { type: 'paragraph'; children: InlineContent[] }
  | { type: 'heading'; level: 2 | 3; children: InlineContent[] }
  | ImageBlock
  | { type: 'quote'; children: ContentBlock[]; cite?: string }
  | { type: 'list'; ordered?: boolean; items: InlineContent[][] }
  | { type: 'address'; children: InlineContent[] }
  | {
      type: 'table';
      caption?: InlineContent[];
      rows: {
        cells: { header: boolean; children: InlineContent[] }[];
      }[];
    }
  | { type: 'separator' };

interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  href?: string;
  external?: boolean;
  caption?: InlineContent[];
  width?: number;
  height?: number;
  align?: 'left' | 'center' | 'right';
}

interface Term {
  name: string;
  slug: string;
  url: string;
}

interface Reviewer extends Term {
  aliases: string[];
}

interface Capture {
  file: string;
  raw: string;
  sourceHash: string;
  canonical: string;
  document: Document;
  primary: Element;
  entry: Element;
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  wordpressAuthor: string;
  visibleByline?: { name: string; element: Element };
  categories: Term[];
  tags: Term[];
  fingerprint: string;
}

interface ArticleSummary {
  id: string;
  slug: string;
  url: string;
  legacyUrl: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  excerpt: string;
  image?: Omit<ImageBlock, 'type' | 'caption' | 'align'>;
  categories: Term[];
  tags: Term[];
  reviewer: Reviewer;
  seo: { description: string; image?: string };
}

interface Article extends ArticleSummary {
  content: ContentBlock[];
  previous?: { title: string; url: string };
  next?: { title: string; url: string };
}

interface Editorial {
  id: string;
  title: string;
  slug: string;
  legacyUrl: string;
  canonicalUrl: string;
  description: string;
  content: ContentBlock[];
}

interface MediaRecord {
  legacyPath: string;
  source: string;
  publicPath: string;
  pixelArea: number;
  bytes: number;
}

const PAGE_SIZE = 24;
const SITE_URL = 'https://vegbooks.org';
const EXPECTED_REVIEWS = 1008;
const EXPECTED_YEARS = 13;
const EXPECTED_CATEGORIES = 5;
const EXPECTED_AMAZON_AFFILIATE_LINKS = 194;
const MAX_SEARCH_INDEX_BYTES = 2_000_000;
// The crawl includes five tag links outside the selected canonical post
// captures. Reading taxonomy only from the 1,008 canonical primary posts
// yields the legacy inventory used by the migrated site.
const EXPECTED_SOURCE_TOPICS = 2541;
const websiteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const archiveRoot = resolve(
  process.env.VEGBOOKS_ARCHIVE ?? join(websiteRoot, '..', 'archive')
);
const archiveHost = join(archiveRoot, 'site', 'vegbooks.org');
const generatedRoot = join(websiteRoot, 'src', 'generated');
const postRoot = join(websiteRoot, 'src', 'posts');
const publicRoot = join(websiteRoot, 'public');
const mediaRoot = join(publicRoot, 'media');

if (!existsSync(archiveHost)) {
  throw new Error(
    `Vegbooks archive not found at ${archiveHost}. Set VEGBOOKS_ARCHIVE to the archive repository.`
  );
}

const warnings: string[] = [];
const unresolvedLinks = new Set<string>();
const unresolvedMedia = new Set<string>();
const media = new Map<string, MediaRecord>();
const mediaSources = new Map<string, Set<string>>();
const mediaQualityCache = new Map<
  string,
  Pick<MediaRecord, 'pixelArea' | 'bytes'>
>();
const htmlFiles = walkFiles(archiveHost).filter((file) =>
  file.endsWith('.html')
);
const captures: Capture[] = [];
const editorialSources = new Map<string, Capture>();
const reviewPattern =
  /^https?:\/\/(?:www\.)?vegbooks\.org\/index\.php\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+)\/$/i;
const editorialRoutes = new Map([
  ['https://vegbooks.org/index.php/about/', 'about'],
  ['https://vegbooks.org/index.php/favorites/', 'favorites'],
  ['https://vegbooks.org/index.php/contributors/', 'contributors'],
  ['https://vegbooks.org/index.php/about/publishers/', 'publishers'],
]);

for (const file of htmlFiles) {
  const raw = readFileSync(file, 'utf8');
  const canonical = canonicalFromRaw(raw);
  if (!canonical) continue;
  const reviewMatch = canonical.match(reviewPattern);
  const editorialSlug = editorialRoutes.get(normalizeLegacyUrl(canonical));
  if (!reviewMatch && !editorialSlug) continue;

  const document = parse(raw);
  const primary = findFirst(document, (element) =>
    hasClass(element, reviewMatch ? 'type-post' : 'type-page')
  );
  if (!primary) {
    throw new Error(`Missing primary content in ${file}`);
  }
  const entry = findFirst(primary, (element) => hasClass(element, 'entry'));
  if (!entry) {
    throw new Error(`Missing .entry content in ${file}`);
  }
  const titleElement = directElements(primary).find((element) =>
    /^h1$/i.test(element.tagName)
  );
  const title = cleanText(titleElement ? textContent(titleElement) : '');
  if (!title) throw new Error(`Missing title in ${file}`);
  const id = (attr(primary, 'id') ?? '').replace(/^post-/, '');
  const normalizedCanonical = normalizeLegacyUrl(canonical);

  if (editorialSlug) {
    const capture = {
      file,
      raw,
      sourceHash: sha256(raw),
      canonical: normalizedCanonical,
      document,
      primary,
      entry,
      id,
      slug: editorialSlug,
      title,
      publishedAt: '',
      publishedLabel: '',
      wordpressAuthor: '',
      categories: [],
      tags: [],
      fingerprint: fingerprint(entry),
    } satisfies Capture;
    const existing = editorialSources.get(editorialSlug);
    if (existing && existing.fingerprint !== capture.fingerprint) {
      throw new Error(
        `Editorial duplicate differs for ${normalizedCanonical}: ${existing.file}, ${file}`
      );
    }
    if (!existing || preferredCapture(capture, existing)) {
      editorialSources.set(editorialSlug, capture);
    }
    continue;
  }

  const [, year, month, day, slug] = reviewMatch!;
  const meta = directElements(primary).find((element) =>
    /^h4$/i.test(element.tagName)
  );
  const publishedLabel = cleanText(meta ? firstTextBeforeComment(meta) : '');
  const wordpressAuthor = authorFromComments(meta ?? primary);
  const categories = categoryTerms(primary);
  const tags = tagTerms(primary);
  const visibleByline = findVisibleByline(entry);

  captures.push({
    file,
    raw,
    sourceHash: sha256(raw),
    canonical: normalizedCanonical,
    document,
    primary,
    entry,
    id,
    slug,
    title,
    publishedAt: `${year}-${month}-${day}`,
    publishedLabel,
    wordpressAuthor,
    visibleByline,
    categories,
    tags,
    fingerprint: fingerprint(entry),
  });
}

const capturesByCanonical = groupBy(captures, (capture) => capture.canonical);
const selectedCaptures: Capture[] = [];
for (const [canonical, duplicates] of capturesByCanonical) {
  const fingerprints = new Set(
    duplicates.map((capture) => capture.fingerprint)
  );
  if (fingerprints.size !== 1) {
    throw new Error(
      `Duplicate captures normalize to different content for ${canonical}: ${duplicates
        .map((capture) => relative(archiveRoot, capture.file))
        .join(', ')}`
    );
  }
  selectedCaptures.push(
    [...duplicates].sort((left, right) =>
      preferredCapture(left, right) ? -1 : preferredCapture(right, left) ? 1 : 0
    )[0]
  );
}

selectedCaptures.sort(
  (left, right) =>
    right.publishedAt.localeCompare(left.publishedAt) ||
    left.slug.localeCompare(right.slug)
);
assertEqual(selectedCaptures.length, EXPECTED_REVIEWS, 'unique reviews');
assertEqual(
  new Set(selectedCaptures.map((capture) => capture.slug)).size,
  EXPECTED_REVIEWS,
  'unique review slugs'
);

const canonicalToRoute = new Map<string, string>();
const idToRoute = new Map<string, string>();
for (const capture of selectedCaptures) {
  canonicalToRoute.set(capture.canonical, `/reviews/${capture.slug}/`);
  if (capture.id) idToRoute.set(capture.id, `/reviews/${capture.slug}/`);
}
for (const [legacy, slug] of editorialRoutes) {
  canonicalToRoute.set(legacy, `/${slug}/`);
}

const reviewerAliases = new Map<string, Set<string>>();
const reviewerCache = new Map<string, Reviewer>();
const articles: Article[] = selectedCaptures.map((capture) => {
  const reviewer = normalizeReviewer(
    capture.visibleByline?.name || capture.wordpressAuthor,
    reviewerAliases,
    reviewerCache
  );
  const categories = normalizeCategories(capture.categories);
  const context: ParseContext = {
    legacyUrl: capture.canonical,
    title: capture.title,
    entry: capture.entry,
    bylineElement: capture.visibleByline?.element,
    imageCount: 0,
  };
  const content = parseBlocks(capture.entry, context);
  const images = collectImageBlocks(content);
  if (images[0] && !images[0].alt) images[0].alt = capture.title;
  const bodyText = blocksText(content);
  if (!bodyText) {
    throw new Error(`Review has no preserved body text: ${capture.canonical}`);
  }
  const excerpt = makeExcerpt(bodyText);
  const firstImage = images[0];
  const summaryImage = firstImage
    ? {
        src: firstImage.src,
        alt: firstImage.alt,
        ...(firstImage.width ? { width: firstImage.width } : {}),
        ...(firstImage.height ? { height: firstImage.height } : {}),
      }
    : undefined;
  return {
    id: capture.id || capture.slug,
    slug: capture.slug,
    url: `/reviews/${capture.slug}/`,
    legacyUrl: capture.canonical,
    title: capture.title,
    publishedAt: capture.publishedAt,
    publishedLabel:
      capture.publishedLabel || formatPublishedLabel(capture.publishedAt),
    excerpt,
    ...(summaryImage ? { image: summaryImage } : {}),
    categories,
    tags: capture.tags.map((tag) => ({
      name: tag.name,
      slug: tag.slug,
      url: `/topics/${tag.slug}/`,
    })),
    reviewer,
    seo: {
      description: excerpt,
      ...(firstImage ? { image: absoluteUrl(firstImage.src) } : {}),
    },
    content,
  };
});

for (const reviewer of reviewerCache.values()) {
  reviewer.aliases = [...(reviewerAliases.get(reviewer.slug) ?? [])].sort(
    (a, b) => a.localeCompare(b)
  );
}
for (const article of articles) {
  article.reviewer = reviewerCache.get(article.reviewer.slug)!;
}

const amazonAffiliateLinks = articles
  .flatMap((article) => collectBlockLinks(article.content))
  .filter(isAmazonAffiliateLink);
assertEqual(
  amazonAffiliateLinks.length,
  EXPECTED_AMAZON_AFFILIATE_LINKS,
  'Amazon affiliate links'
);

for (let index = 0; index < articles.length; index += 1) {
  const newer = articles[index - 1];
  const older = articles[index + 1];
  if (older) articleNeighbor(articles[index], 'previous', older);
  if (newer) articleNeighbor(articles[index], 'next', newer);
}

const editorialDescriptions: Record<string, string> = {
  about: 'The history and purpose of Vegbooks.',
  favorites: 'Favorite books and media selected by Vegbooks contributors.',
  contributors: 'The writers who created the Vegbooks archive.',
  publishers: 'Historical information for publishers and authors.',
};
const editorials: Editorial[] = [...editorialSources.values()]
  .sort((left, right) => left.slug.localeCompare(right.slug))
  .map((capture) => {
    const context: ParseContext = {
      legacyUrl: capture.canonical,
      title: capture.title,
      entry: capture.entry,
      imageCount: 0,
    };
    return {
      id: capture.id || capture.slug,
      title: capture.title,
      slug: capture.slug,
      legacyUrl: capture.canonical,
      canonicalUrl: `/${capture.slug}/`,
      description: editorialDescriptions[capture.slug],
      content: parseBlocks(capture.entry, context),
    };
  });
assertEqual(editorials.length, editorialRoutes.size, 'editorial pages');

if (unresolvedMedia.size > 0) {
  throw new Error(
    `Unresolved media references (${unresolvedMedia.size}):\n${[
      ...unresolvedMedia,
    ]
      .sort()
      .join('\n')}`
  );
}
if (unresolvedLinks.size > 0) {
  throw new Error(
    `Unresolved internal links (${unresolvedLinks.size}):\n${[
      ...unresolvedLinks,
    ]
      .sort()
      .join('\n')}`
  );
}

const duplicateMediaVariants = [...mediaSources.entries()]
  .filter(([, sources]) => sources.size > 1)
  .sort(([left], [right]) => left.localeCompare(right));
for (const [publicPath, sources] of duplicateMediaVariants) {
  const selected = media.get(publicPath)!;
  warnings.push(
    `Selected higher-quality media ${relative(archiveRoot, selected.source)} for ${publicPath} from ${sources.size} variants`
  );
}
const discardedMediaVariants = duplicateMediaVariants.reduce(
  (total, [, sources]) => total + sources.size - 1,
  0
);

const topicMap = collectionMap(articles, (article) => article.tags);
const topics = [...topicMap.values()].sort((left, right) =>
  left.name.localeCompare(right.name)
);
assertEqual(topics.length, EXPECTED_SOURCE_TOPICS, 'source topic slugs');
const categoryMap = collectionMap(articles, (article) => article.categories);
const categories = [...categoryMap.values()].sort(
  (left, right) => categoryOrder(left.slug) - categoryOrder(right.slug)
);
assertEqual(categories.length, EXPECTED_CATEGORIES, 'media categories');
const yearMap = groupBy(articles, (article) => article.publishedAt.slice(0, 4));
const years = [...yearMap.entries()]
  .sort(([left], [right]) => right.localeCompare(left))
  .map(([year, values]) => ({
    year: Number(year),
    url: `/archive/${year}/`,
    count: values.length,
    articleSlugs: values.map((article) => article.slug),
  }));
assertEqual(years.length, EXPECTED_YEARS, 'archive years');
const reviewerMap = groupBy(articles, (article) => article.reviewer.slug);
const reviewers = [...reviewerMap.entries()]
  .map(([slug, values]) => ({
    ...reviewerCache.get(slug)!,
    count: values.length,
    articleSlugs: values.map((article) => article.slug),
  }))
  .sort((left, right) => left.name.localeCompare(right.name));

const manifest = {
  siteUrl: SITE_URL,
  pageSize: PAGE_SIZE,
  articles: articles.map(
    ({ content: _content, previous: _previous, next: _next, ...summary }) =>
      summary
  ),
  topics,
  categories,
  reviewers,
  years,
  editorials,
};

const routeEntries = buildRouteEntries(manifest);
const redirectManifest = buildRedirects(articles, topics, reviewers);
const searchIndex = buildSearchIndexAsset(articles);
const searchIndexAsset = `${JSON.stringify(searchIndex)}\n`;
const searchIndexBytes = Buffer.byteLength(searchIndexAsset);
if (searchIndexBytes > MAX_SEARCH_INDEX_BYTES) {
  throw new Error(
    `Search index exceeds ${MAX_SEARCH_INDEX_BYTES} bytes: ${searchIndexBytes}`
  );
}
const archiveCommit = git(['rev-parse', 'HEAD']);
const archiveCommitDate = git(['show', '-s', '--format=%cI', 'HEAD']);
const generatedByLegacy = new Map(
  articles.map((article) => [article.legacyUrl, article])
);
const sourceFiles = selectedCaptures
  .map((capture) => {
    const generated = generatedByLegacy.get(capture.canonical)!;
    return {
      canonicalUrl: capture.canonical,
      file: relative(archiveRoot, capture.file),
      sha256: capture.sourceHash,
      parity: {
        sourceTextCharacters: cleanText(textContent(capture.entry)).length,
        generatedTextCharacters: blocksText(generated.content).length,
        sourceImages: findAll(
          capture.entry,
          (element) => element.tagName === 'img'
        ).length,
        generatedImages: collectImageBlocks(generated.content).length,
        intentionalRemovals: capture.visibleByline
          ? ['duplicated visible reviewer byline']
          : [],
      },
    };
  })
  .sort((left, right) => left.canonicalUrl.localeCompare(right.canonicalUrl));
const provenance = {
  schemaVersion: 1,
  archiveCommit,
  archiveCommitDate,
  inventory: 'canonical type-post and selected type-page documents',
  counts: {
    htmlFilesScanned: htmlFiles.length,
    reviewCaptures: captures.length,
    uniqueReviews: articles.length,
    duplicateCaptures: captures.length - articles.length,
    topics: topics.length,
    reviewers: reviewers.length,
    years: years.length,
    categories: categories.length,
    editorials: editorials.length,
    mediaFiles: media.size,
    duplicateMediaNames: duplicateMediaVariants.length,
    discardedMediaVariants,
    searchIndexBytes,
    staticRoutes: routeEntries.routeCount,
    redirects: redirectManifest.length,
    amazonAffiliateLinks: amazonAffiliateLinks.length,
    unresolvedLinks: 0,
    unresolvedMedia: 0,
  },
  sourceDigest: sha256(JSON.stringify(sourceFiles)),
  sourceFiles,
  warnings: [...new Set(warnings)].sort(),
};

rmSync(generatedRoot, { recursive: true, force: true });
rmSync(postRoot, { recursive: true, force: true });
rmSync(mediaRoot, { recursive: true, force: true });
mkdirSync(postRoot, { recursive: true });
mkdirSync(mediaRoot, { recursive: true });

for (const article of articles) {
  writeFile(join(postRoot, `${article.slug}.tsx`), renderPostModule(article));
}
writeFile(
  join(generatedRoot, 'manifest.ts'),
  `import type { ContentManifest } from '../content/types';\n\nexport const manifest = ${json(manifest)} satisfies ContentManifest;\nexport default manifest;\n`
);
writeFile(join(generatedRoot, 'article-imports.ts'), renderImportMap(articles));
writeFile(join(generatedRoot, 'route-entries.ts'), routeEntries.source);
writeFile(join(generatedRoot, 'provenance.json'), `${json(provenance)}\n`);
writeFile(join(publicRoot, 'search-index.json'), searchIndexAsset);
writeFile(join(publicRoot, 'redirects.json'), `${json(redirectManifest)}\n`);

for (const record of [...media.values()].sort((left, right) =>
  left.publicPath.localeCompare(right.publicPath)
)) {
  const destination = join(publicRoot, record.publicPath.replace(/^\//, ''));
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(record.source, destination);
}

console.log(
  `Migrated ${articles.length} reviews, ${topics.length} topics, ${reviewers.length} reviewers, ${media.size} media files, and ${routeEntries.routeCount} routes.`
);

interface ParseContext {
  legacyUrl: string;
  title: string;
  entry: Element;
  bylineElement?: Element;
  imageCount: number;
}

function parseBlocks(root: Element, context: ParseContext): ContentBlock[] {
  return childNodes(root).flatMap((node) => parseBlock(node, context));
}

function parseBlock(node: Node, context: ParseContext): ContentBlock[] {
  if (isText(node)) {
    const text = cleanText(node.value);
    return text ? [{ type: 'paragraph', children: [text] }] : [];
  }
  if (!isElement(node)) return [];
  const tag = node.tagName.toLowerCase();
  if (['script', 'style', 'form', 'noscript', 'template'].includes(tag))
    return [];
  if (tag === 'hr') return [{ type: 'separator' }];
  if (tag === 'img') return [parseImage(node, context)];
  if (tag === 'figure') {
    const image = findFirst(node, (element) => element.tagName === 'img');
    if (!image)
      return childNodes(node).flatMap((child) => parseBlock(child, context));
    const block = parseImage(image, context);
    const caption = findFirst(
      node,
      (element) => element.tagName === 'figcaption'
    );
    const captionContent = caption
      ? normalizeInline(parseInlineChildren(caption, context))
      : [];
    if (captionContent.length > 0) block.caption = captionContent;
    return [block];
  }
  if (/^h[1-6]$/.test(tag)) {
    const children = normalizeInline(parseInlineChildren(node, context));
    return children.length
      ? [
          {
            type: 'heading',
            level: Number(tag.slice(1)) <= 2 ? 2 : 3,
            children,
          },
        ]
      : [];
  }
  if (tag === 'p' || tag === 'pre') {
    const images = findAll(node, (element) => element.tagName === 'img').map(
      (image) => parseImage(image, context)
    );
    const children = normalizeInline(parseInlineChildren(node, context, true));
    if (node === context.bylineElement) return images;
    return [
      ...images,
      ...(children.length > 0
        ? [{ type: 'paragraph' as const, children }]
        : []),
    ];
  }
  if (tag === 'ul' || tag === 'ol') {
    const items = directElements(node)
      .filter((element) => element.tagName === 'li')
      .map((item) => normalizeInline(parseInlineChildren(item, context)))
      .filter((item) => item.length > 0);
    return items.length
      ? [{ type: 'list', ...(tag === 'ol' ? { ordered: true } : {}), items }]
      : [];
  }
  if (tag === 'blockquote') {
    const children = parseBlocks(node, context);
    const cite = attr(node, 'cite');
    return children.length
      ? [{ type: 'quote', children, ...(cite ? { cite } : {}) }]
      : [];
  }
  if (tag === 'table') {
    const captionElement = findFirst(
      node,
      (element) => element.tagName === 'caption'
    );
    const caption = captionElement
      ? normalizeInline(parseInlineChildren(captionElement, context))
      : [];
    const rows = findAll(node, (element) => element.tagName === 'tr')
      .map((row) => ({
        cells: directElements(row)
          .filter((cell) => cell.tagName === 'td' || cell.tagName === 'th')
          .map((cell) => ({
            header: cell.tagName === 'th',
            children: normalizeInline(parseInlineChildren(cell, context)),
          })),
      }))
      .filter((row) => row.cells.length > 0);
    return rows.length
      ? [{ type: 'table', ...(caption.length ? { caption } : {}), rows }]
      : [];
  }
  if (tag === 'address') {
    const children = normalizeInline(parseInlineChildren(node, context));
    return children.length ? [{ type: 'address', children }] : [];
  }
  if (tag === 'iframe' || tag === 'embed' || tag === 'object') {
    const source = attr(node, 'src') ?? attr(node, 'data');
    if (!source) return [];
    const href = rewriteLink(source, context.legacyUrl);
    return [
      {
        type: 'paragraph',
        children: [
          {
            type: 'link',
            href,
            external: true,
            children: ['View preserved embedded media'],
          },
        ],
      },
    ];
  }
  if (tag === 'a' && findFirst(node, (element) => element.tagName === 'img')) {
    const image = findFirst(node, (element) => element.tagName === 'img')!;
    return [parseImage(image, context)];
  }
  return childNodes(node).flatMap((child) => parseBlock(child, context));
}

function parseInlineChildren(
  element: Element,
  context: ParseContext,
  skipImages = false
): InlineContent[] {
  return childNodes(element).flatMap((node) =>
    parseInline(node, context, skipImages)
  );
}

function parseInline(
  node: Node,
  context: ParseContext,
  skipImages: boolean
): InlineContent[] {
  if (isText(node)) return [node.value.replace(/\s+/gu, ' ')];
  if (!isElement(node)) return [];
  const tag = node.tagName.toLowerCase();
  if (['script', 'style', 'form', 'noscript'].includes(tag)) return [];
  if (tag === 'img') return [];
  if (tag === 'br') return [{ type: 'lineBreak' }];
  const children = parseInlineChildren(node, context, skipImages);
  if (tag === 'strong' || tag === 'b') {
    return children.length ? [{ type: 'strong', children }] : [];
  }
  if (tag === 'em' || tag === 'i') {
    return children.length ? [{ type: 'emphasis', children }] : [];
  }
  if (tag === 'code' || tag === 'kbd' || tag === 'samp') {
    return children.length ? [{ type: 'code', children }] : [];
  }
  if (tag === 'a') {
    if (!children.length) return [];
    const href = attr(node, 'href');
    if (!href) return children;
    const rewritten = rewriteLink(href, context.legacyUrl);
    return [
      {
        type: 'link',
        href: rewritten,
        ...(attr(node, 'target') === '_blank' ? { external: true } : {}),
        children,
      },
    ];
  }
  return children;
}

function parseImage(element: Element, context: ParseContext): ImageBlock {
  const source = attr(element, 'src');
  if (!source) throw new Error(`Image without src in ${context.legacyUrl}`);
  const src = rewriteMedia(source, context.legacyUrl);
  const sourceRecord = media.get(src);
  const dimensions = imageDimensions(element, sourceRecord?.source);
  const classes = classList(element);
  const link = imageLink(element, src, context);
  const align = classes.has('alignleft')
    ? 'left'
    : classes.has('alignright')
      ? 'right'
      : classes.has('aligncenter')
        ? 'center'
        : undefined;
  context.imageCount += 1;
  return {
    type: 'image',
    src,
    alt: cleanText(attr(element, 'alt') ?? ''),
    ...link,
    ...dimensions,
    ...(align ? { align } : {}),
  };
}

function imageLink(
  element: Element,
  imageSrc: string,
  context: ParseContext
): { href?: string; external?: boolean } {
  let ancestor = element.parentNode;
  while (ancestor && ancestor !== context.entry) {
    if (isElement(ancestor) && ancestor.tagName === 'a') {
      const href = attr(ancestor, 'href');
      if (!href) return {};
      const rewritten = archivedMediaExists(href, context.legacyUrl)
        ? rewriteLink(href, context.legacyUrl)
        : imageSrc;
      if (rewritten === imageSrc && href !== imageSrc) {
        warnings.push(
          `Resolved missing linked media ${href} to displayed image ${imageSrc}`
        );
      }
      return {
        href: rewritten,
        ...(attr(ancestor, 'target') === '_blank' ? { external: true } : {}),
      };
    }
    if (!('parentNode' in ancestor)) break;
    ancestor = ancestor.parentNode;
  }
  return {};
}

function archivedMediaExists(raw: string, legacyUrl: string): boolean {
  let url: URL;
  try {
    url = new URL(raw, legacyUrl);
  } catch {
    return true;
  }
  if (
    !isVegbooksHost(url.hostname) ||
    !url.pathname.includes('/wp-content/uploads/')
  ) {
    return true;
  }
  const marker = '/wp-content/uploads/';
  const relativePath = decodePath(
    url.pathname.slice(url.pathname.indexOf(marker) + marker.length)
  );
  const source = join(archiveHost, 'wp-content', 'uploads', relativePath);
  if (existsSync(source)) return true;
  const fullSize = relativePath.replace(/-\d+x\d+(?=\.[^.]+$)/, '');
  if (
    fullSize !== relativePath &&
    existsSync(join(archiveHost, 'wp-content', 'uploads', fullSize))
  ) {
    return true;
  }
  return Boolean(findCaseInsensitiveFile(source));
}

function imageDimensions(
  element: Element,
  source: string | undefined
): { width?: number; height?: number } {
  const width = positiveInteger(attr(element, 'width'));
  const height = positiveInteger(attr(element, 'height'));
  if (width && height) return { width, height };
  if (!source)
    return { ...(width ? { width } : {}), ...(height ? { height } : {}) };
  try {
    const measured = imageSize(readFileSync(source));
    return {
      ...((width ?? measured.width) ? { width: width ?? measured.width } : {}),
      ...((height ?? measured.height)
        ? { height: height ?? measured.height }
        : {}),
    };
  } catch {
    warnings.push(
      `Could not read image dimensions: ${relative(archiveRoot, source)}`
    );
    return { ...(width ? { width } : {}), ...(height ? { height } : {}) };
  }
}

function rewriteLink(raw: string, legacyUrl: string): string {
  const normalizedRaw = normalizeLegacyLink(raw);
  if (!normalizedRaw || normalizedRaw.startsWith('#'))
    return normalizedRaw || '#';
  if (/^(?:mailto:|tel:|data:|javascript:)/i.test(normalizedRaw)) {
    return normalizedRaw.startsWith('javascript:') ? '#' : normalizedRaw;
  }
  let url: URL;
  try {
    url = new URL(normalizedRaw, legacyUrl);
  } catch {
    return normalizedRaw;
  }
  if (!isVegbooksHost(url.hostname)) return url.href;
  if (url.pathname.includes('/wp-content/uploads/')) {
    return rewriteMedia(url.href, legacyUrl);
  }
  const normalizedPath = decodePath(url.pathname)
    .replace(/\/index\.\s*php\//gi, '/index.php/')
    .replace(/\/index\.php\/\s+/gi, '/index.php/')
    .replace(
      /^.*(?=\/index\.php\/(?:\d{4}\/\d{2}\/\d{2}|contributors)(?:\/|$))/i,
      ''
    )
    .replace(/\/{2,}/g, '/');
  const normalizedUrl = `https://vegbooks.org${normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`}`;
  const exact = canonicalToRoute.get(normalizedUrl);
  if (exact) return `${exact}${url.hash}`;
  const shortId = url.searchParams.get('p');
  if (shortId && idToRoute.has(shortId))
    return `${idToRoute.get(shortId)}${url.hash}`;

  const review = normalizedPath.match(
    /\/index\.php\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+)(?:\/.*)?$/i
  );
  if (review) {
    const candidate = `https://vegbooks.org/index.php/${review[1]}/${review[2]}/${review[3]}/${review[4]}/`;
    const route =
      canonicalToRoute.get(candidate) ??
      articlesRouteBySlug(slugify(review[4]));
    if (route) return `${route}${url.hash}`;
  }
  const tag = normalizedPath.match(/\/index\.php\/tag\/([^/]+)\/?$/i);
  if (tag) return `/topics/${tag[1]}/${url.hash}`;
  const author = normalizedPath.match(/\/index\.php\/author\/([^/]+)\/?$/i);
  if (author)
    return `/contributors/${normalizeReviewerSlug(author[1])}/${url.hash}`;
  const category = normalizedPath.match(/\/index\.php\/category\/([^/]+)\/?$/i);
  if (category) {
    const slug = category[1] === '1' ? 'books' : category[1];
    if (categoryOrder(slug) < 99) return `/${slug}/${url.hash}`;
  }
  const archive = normalizedPath.match(
    /\/index\.php\/(2009|2010|2011|2012|2013|2014|2015|2016|2017|2018|2019|2020|2021)(?:\/\d{2})?\/?$/
  );
  if (archive) return `/archive/${archive[1]}/${url.hash}`;
  if (/^\/(?:index\.php\/)?$/i.test(normalizedPath)) {
    if (url.searchParams.has('s'))
      return `/search/?q=${encodeURIComponent(url.searchParams.get('s') ?? '')}`;
    return `/${url.hash}`;
  }
  if (
    /\/index\.php\/contributors\/(?:writers|contest-to-celebrate-our-500th-review)\/?$/i.test(
      normalizedPath
    )
  ) {
    return `/contributors/${url.hash}`;
  }
  if (/\/index\.php\/(?:about\/)?publishers\/?$/i.test(normalizedPath)) {
    return `/publishers/${url.hash}`;
  }
  if (
    /\/(?:feed|comments|wp-json|wp-admin|wp-login|xmlrpc\.php)(?:\/|$)/i.test(
      normalizedPath
    )
  ) {
    warnings.push(`Removed WordPress-only link: ${url.href}`);
    return '#';
  }
  if (
    /\/attachment(?:\/|$)/i.test(normalizedPath) ||
    url.searchParams.has('attachment_id')
  ) {
    const parent = normalizedPath.match(
      /\/index\.php\/\d{4}\/\d{2}\/\d{2}\/([^/]+)/i
    );
    if (parent) {
      const route = articlesRouteBySlug(parent[1]);
      if (route) return route;
    }
    warnings.push(`Collapsed attachment link: ${url.href}`);
    return '/';
  }
  unresolvedLinks.add(url.href);
  return url.href;
}

function normalizeLegacyLink(raw: string): string {
  let value = raw.trim();
  if (!/amazon\.com/i.test(value)) return value;
  value = value.replace(/^ttp:\/\//i, 'http://');
  const start = value.search(/https?:\/\//i);
  if (start > 0) value = value.slice(start);
  const duplicate = value.slice(8).search(/https?:\/\//i);
  if (duplicate >= 0) value = value.slice(0, duplicate + 8);
  value = value.replace(/["'>\s]+$/g, '');

  try {
    const url = new URL(value);
    if (url.hash.startsWith('#?')) {
      const fragment = new URLSearchParams(url.hash.slice(2));
      if (fragment.get('tag') === 'vegbooks-20') {
        for (const [name, fragmentValue] of fragment) {
          url.searchParams.set(name, fragmentValue);
        }
        url.hash = '';
      }
    }
    return url.href;
  } catch {
    return value;
  }
}

function articlesRouteBySlug(slug: string): string | undefined {
  for (const route of canonicalToRoute.values()) {
    if (route === `/reviews/${slug}/`) return route;
  }
  return undefined;
}

function rewriteMedia(raw: string, legacyUrl: string): string {
  let url: URL;
  try {
    url = new URL(raw, legacyUrl);
  } catch {
    unresolvedMedia.add(raw);
    return raw;
  }
  if (
    !isVegbooksHost(url.hostname) ||
    !url.pathname.includes('/wp-content/uploads/')
  ) {
    return url.href;
  }
  const marker = '/wp-content/uploads/';
  const relativePath = decodePath(
    url.pathname.slice(url.pathname.indexOf(marker) + marker.length)
  );
  if (relativePath.includes('..')) {
    unresolvedMedia.add(url.href);
    return url.href;
  }
  let source = join(archiveHost, 'wp-content', 'uploads', relativePath);
  let outputRelative = relativePath;
  if (!existsSync(source)) {
    const extension = extname(relativePath);
    const fullSize = relativePath.replace(/-\d+x\d+(?=\.[^.]+$)/, '');
    const fullSource = join(archiveHost, 'wp-content', 'uploads', fullSize);
    if (fullSize !== relativePath && existsSync(fullSource)) {
      warnings.push(
        `Resolved missing thumbnail ${relativePath} to ${fullSize}`
      );
      source = fullSource;
      outputRelative = fullSize;
    } else {
      const caseInsensitive = findCaseInsensitiveFile(source);
      if (caseInsensitive) {
        warnings.push(
          `Resolved media filename case ${relativePath} to ${basename(caseInsensitive)}`
        );
        source = caseInsensitive;
        outputRelative = join(dirname(relativePath), basename(caseInsensitive));
      } else {
        unresolvedMedia.add(url.href);
        return `/media/${relativePath}`;
      }
    }
    if (!extension) unresolvedMedia.add(url.href);
  }
  const publicPath = `/media/${normalizeMediaPath(outputRelative)}`;
  const quality = mediaQuality(source);
  const candidate: MediaRecord = {
    legacyPath: relativePath,
    source,
    publicPath,
    ...quality,
  };
  const sources = mediaSources.get(publicPath) ?? new Set<string>();
  sources.add(source);
  mediaSources.set(publicPath, sources);
  const existing = media.get(publicPath);
  if (!existing || isHigherQuality(candidate, existing)) {
    media.set(publicPath, candidate);
  }
  return publicPath;
}

function normalizeMediaPath(relativePath: string): string {
  const directory = dirname(relativePath);
  if (!/^\d{4}\/\d{2}$/.test(directory)) {
    throw new Error(`Media is outside a year/month directory: ${relativePath}`);
  }
  const extension = extname(relativePath).toLocaleLowerCase('en-US');
  if (!/^\.[a-z0-9]+$/.test(extension)) {
    throw new Error(`Media has an invalid extension: ${relativePath}`);
  }
  const originalName = basename(relativePath, extname(relativePath)).replace(
    /(?:[-_]\d+x\d+)+$/i,
    ''
  );
  const kebabName = originalName
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replace(/['’‘`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  if (!kebabName) {
    throw new Error(`Media filename cannot be normalized: ${relativePath}`);
  }
  return `${directory}/${kebabName}${extension}`;
}

function mediaQuality(
  source: string
): Pick<MediaRecord, 'pixelArea' | 'bytes'> {
  const cached = mediaQualityCache.get(source);
  if (cached) return cached;
  let pixelArea = 0;
  try {
    const dimensions = imageSize(readFileSync(source));
    pixelArea = (dimensions.width ?? 0) * (dimensions.height ?? 0);
  } catch {
    warnings.push(
      `Could not compare image quality: ${relative(archiveRoot, source)}`
    );
  }
  const quality = { pixelArea, bytes: statSync(source).size };
  mediaQualityCache.set(source, quality);
  return quality;
}

function isHigherQuality(
  candidate: MediaRecord,
  existing: MediaRecord
): boolean {
  if (candidate.pixelArea !== existing.pixelArea) {
    return candidate.pixelArea > existing.pixelArea;
  }
  if (candidate.bytes !== existing.bytes)
    return candidate.bytes > existing.bytes;
  return candidate.source.localeCompare(existing.source) < 0;
}

function findCaseInsensitiveFile(path: string): string | undefined {
  const directory = dirname(path);
  if (!existsSync(directory)) return undefined;
  const wanted = basename(path).toLocaleLowerCase();
  const match = readdirSync(directory).find(
    (entry) => entry.toLocaleLowerCase() === wanted
  );
  return match ? join(directory, match) : undefined;
}

function normalizeCategories(terms: Term[]): Term[] {
  const slugs = new Set(
    terms.map((term) => (term.slug === '1' ? 'books' : term.slug))
  );
  if (slugs.size === 0) slugs.add('books');
  const normalized = [...slugs]
    .filter((slug) => categoryOrder(slug) < 99)
    .sort((left, right) => categoryOrder(left) - categoryOrder(right))
    .map((slug) => ({
      name: categoryName(slug),
      slug,
      url: `/${slug}/`,
    }));
  if (normalized.length === 0) {
    normalized.push({ name: 'Books', slug: 'books', url: '/books/' });
  }
  return normalized;
}

function normalizeReviewer(
  raw: string,
  aliases: Map<string, Set<string>>,
  cache: Map<string, Reviewer>
): Reviewer {
  const alias = cleanReviewerName(raw);
  if (!alias)
    throw new Error(`Review remains unattributed (raw byline: ${raw})`);
  const lookup = alias
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  const names: Record<string, string> = {
    admin: 'Jessica Almy',
    jessica: 'Jessica Almy',
    'jessica almy': 'Jessica Almy',
    jg: 'Jennifer Gannett',
    'jennifer gannett': 'Jennifer Gannett',
    'jennifer g': 'Jennifer Gannett',
    jane: 'Jane Cowles',
    'jane coco cowles': 'Jane Cowles',
    'jane cowles': 'Jane Cowles',
    'carolyn merino mullin': 'Carolyn M. Mullin',
    'carolyn m mullin': 'Carolyn M. Mullin',
    'ben devries': 'Ben DeVries',
    'huyen macmichael': 'Huyen MacMichael',
    'john mcintyre': 'John McIntyre',
    'katrina f': 'Katrina Donovan Fleming',
    'krisitn wald': 'Kristin Wald',
    'maureen mcdowell': 'Maureen McDowell',
    sandi: 'Sandi Lancaster',
    'sandi lancaster': 'Sandi Lancaster',
  };
  const name = names[lookup] ?? titleCaseName(alias);
  const slug = slugify(name);
  const aliasSet = aliases.get(slug) ?? new Set<string>();
  aliasSet.add(alias);
  aliases.set(slug, aliasSet);
  const existing = cache.get(slug);
  if (existing) return existing;
  const reviewer: Reviewer = {
    name,
    slug,
    url: `/contributors/${slug}/`,
    aliases: [],
  };
  cache.set(slug, reviewer);
  return reviewer;
}

function normalizeReviewerSlug(raw: string): string {
  const aliases: Record<string, string> = {
    admin: 'jessica-almy',
    jg: 'jennifer-gannett',
    jane: 'jane-cowles',
    'jane-coco-cowles': 'jane-cowles',
    sandi: 'sandi-lancaster',
  };
  return aliases[raw] ?? raw;
}

function findVisibleByline(
  entry: Element
): { name: string; element: Element } | undefined {
  const candidates = findAll(entry, (element) =>
    ['p', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element.tagName)
  );
  for (const element of candidates) {
    const text = cleanText(textContent(element));
    if (text.length > 120) continue;
    const match = text.match(
      /^(?:(?:guest\s+)?(?:review|post)|reviewed|written|contributed)\s+by\s*:?[\s\u00a0]*(.+?)\s*[.!]?$/i
    );
    if (!match) continue;
    const contributorLink = findFirst(element, (candidate) => {
      const href = attr(candidate, 'href') ?? '';
      return (
        candidate.tagName === 'a' &&
        /\/(?:contributors|about)\/?(?:#|$)/i.test(href)
      );
    });
    const name = cleanReviewerName(
      contributorLink ? textContent(contributorLink) : match[1]
    );
    if (name) return { name, element };
  }
  return undefined;
}

function cleanReviewerName(value: string): string {
  return cleanText(value)
    .replace(
      /^(?:reviewed?|post|written|contributed)\s+by\s*:?[\s\u00a0]*/i,
      ''
    )
    .replace(/[|·].*$/, '')
    .replace(/[.!,:;\s]+$/, '')
    .trim();
}

function titleCaseName(value: string): string {
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) return value;
  return value
    .toLocaleLowerCase('en-US')
    .replace(/(^|[\s.'’-])\p{L}/gu, (match) =>
      match.toLocaleUpperCase('en-US')
    );
}

function collectionMap(
  articles: Article[],
  terms: (article: Article) => Term[]
): Map<string, Term & { count: number; articleSlugs: string[] }> {
  const result = new Map<
    string,
    Term & { count: number; articleSlugs: string[] }
  >();
  for (const article of articles) {
    for (const term of terms(article)) {
      const entry = result.get(term.slug) ?? {
        ...term,
        count: 0,
        articleSlugs: [],
      };
      entry.count += 1;
      entry.articleSlugs.push(article.slug);
      result.set(term.slug, entry);
    }
  }
  return result;
}

function buildRouteEntries(content: typeof manifest): {
  source: string;
  routeCount: number;
} {
  const reviewEntries = content.articles.map(({ slug }) => ({ slug }));
  const reviewPageEntries = pagesAfterFirst(content.articles.length).map(
    (page) => ({ page })
  );
  const topicEntries = content.topics.map(({ slug }) => ({ slug }));
  const topicPageEntries = content.topics.flatMap((topic) =>
    pagesAfterFirst(topic.count).map((page) => ({ slug: topic.slug, page }))
  );
  const contributorEntries = content.reviewers.map(({ slug }) => ({ slug }));
  const contributorPageEntries = content.reviewers.flatMap((reviewer) =>
    pagesAfterFirst(reviewer.count).map((page) => ({
      slug: reviewer.slug,
      page,
    }))
  );
  const yearEntries = content.years.map(({ year }) => ({ year: String(year) }));
  const yearPageEntries = content.years.flatMap((year) =>
    pagesAfterFirst(year.count).map((page) => ({
      year: String(year.year),
      page,
    }))
  );
  const categoryEntries = content.categories.map(({ slug }) => ({
    category: slug,
  }));
  const categoryPageEntries = content.categories.flatMap((category) =>
    pagesAfterFirst(category.count).map((page) => ({
      category: category.slug,
      page,
    }))
  );
  const mediaCount = content.articles.filter((article) =>
    article.categories.some((category) => category.slug !== 'books')
  ).length;
  const mediaPageEntries = pagesAfterFirst(mediaCount).map((page) => ({
    page,
  }));
  const values = {
    reviewEntries,
    reviewPageEntries,
    topicEntries,
    topicPageEntries,
    contributorEntries,
    contributorPageEntries,
    yearEntries,
    yearPageEntries,
    categoryEntries,
    categoryPageEntries,
    mediaPageEntries,
  };
  const routeCount =
    11 +
    Object.values(values).reduce((total, entries) => total + entries.length, 0);
  const exports = Object.entries(values)
    .map(([name, value]) => `export const ${name} = ${json(value)} as const;`)
    .join('\n\n');
  return {
    source: `${exports}\n\nexport const generatedRouteCount = ${routeCount};\n`,
    routeCount,
  };
}

function pagesAfterFirst(count: number): string[] {
  return Array.from(
    { length: Math.max(0, Math.ceil(count / PAGE_SIZE) - 1) },
    (_, index) => String(index + 2)
  );
}

function buildRedirects(
  articles: Article[],
  topics: (Term & { count: number; articleSlugs: string[] })[],
  reviewers: (Reviewer & { count: number; articleSlugs: string[] })[]
) {
  const redirects = new Map<string, string>();
  for (const article of articles)
    redirects.set(new URL(article.legacyUrl).pathname, article.url);
  redirects.set('/index.php/about/', '/about/');
  redirects.set('/index.php/favorites/', '/favorites/');
  redirects.set('/index.php/contributors/', '/contributors/');
  redirects.set('/index.php/about/publishers/', '/publishers/');
  redirects.set('/index.php/publishers/', '/publishers/');
  redirects.set('/index.php/books/', '/books/');
  redirects.set('/index.php/movies-2/', '/media/');
  for (const category of [
    'books',
    'movies',
    'music',
    'television',
    'board-games',
  ]) {
    redirects.set(`/index.php/category/${category}/`, `/${category}/`);
  }
  redirects.set('/index.php/category/1/', '/books/');
  for (const topic of topics) {
    redirects.set(`/index.php/tag/${topic.slug}/`, topic.url);
  }
  for (const reviewer of reviewers) {
    redirects.set(`/index.php/author/${reviewer.slug}/`, reviewer.url);
  }
  for (let year = 2009; year <= 2021; year += 1) {
    redirects.set(`/index.php/${year}/`, `/archive/${year}/`);
    for (let month = 1; month <= 12; month += 1) {
      redirects.set(
        `/index.php/${year}/${String(month).padStart(2, '0')}/`,
        `/archive/${year}/`
      );
    }
  }
  return [...redirects.entries()]
    .map(([from, to]) => ({ from, to, status: 301 }))
    .sort((left, right) => left.from.localeCompare(right.from));
}

function buildSearchIndexAsset(articles: Article[]) {
  const weights = {
    title: 8,
    summary: 3,
    body: 1,
    categories: 4,
    tags: 5,
    reviewer: 4,
  };
  const terms = new Map<string, { document: number; frequency: number }[]>();
  let totalLength = 0;
  const documents = articles.map((article, document) => {
    const source = {
      id: article.id,
      url: article.url,
      title: article.title,
      summary: article.excerpt,
      body: blocksText(article.content),
      date: article.publishedAt,
      categories: article.categories.map((category) => category.name),
      tags: article.tags.map((tag) => tag.name),
      reviewer: article.reviewer.name,
    };
    const frequencies = new Map<string, number>();
    let length = 0;
    add(source.title, weights.title);
    add(source.summary, weights.summary);
    add(source.body, weights.body);
    add(source.categories.join(' '), weights.categories);
    add(source.tags.join(' '), weights.tags);
    add(source.reviewer, weights.reviewer);
    for (const [term, frequency] of frequencies) {
      const postings = terms.get(term) ?? [];
      postings.push({ document, frequency });
      terms.set(term, postings);
    }
    totalLength += length;
    return [
      source.id,
      source.url,
      source.title,
      source.summary,
      source.date,
      source.categories,
      source.tags,
      source.reviewer,
      length,
    ] as const;

    function add(value: string, weight: number): void {
      const tokens = searchTokens(value);
      length += tokens.length;
      for (const token of tokens) {
        frequencies.set(token, (frequencies.get(token) ?? 0) + weight);
      }
    }
  });
  const vocabulary = [...terms.keys()].sort();
  return {
    version: 2,
    documents,
    terms: vocabulary.map(
      (term) => [term, packSearchPostings(terms.get(term)!)] as const
    ),
    averageLength: documents.length === 0 ? 0 : totalLength / documents.length,
  };
}

function packSearchPostings(
  postings: readonly { document: number; frequency: number }[]
): number[] {
  let previousDocument = 0;
  return postings.flatMap((posting) => {
    const documentDelta = posting.document - previousDocument;
    previousDocument = posting.document;
    return [documentDelta, posting.frequency];
  });
}

function searchTokens(value: string): string[] {
  return (
    value
      .normalize('NFKD')
      .replace(/\p{M}/gu, '')
      .toLocaleLowerCase('en-US')
      .match(/[\p{L}\p{N}]+/gu) ?? []
  );
}

function renderImportMap(articles: Article[]): string {
  return `import type { PostModule } from '../content/types';\n\nexport const articleImports: Readonly<Record<string, () => Promise<PostModule>>> = {\n${articles
    .map(
      (article) =>
        `  ${JSON.stringify(article.slug)}: () => import('../posts/${article.slug}.tsx'),`
    )
    .join('\n')}\n};\n`;
}

function renderPostModule(article: Article): string {
  const { content, ...metadata } = article;
  return `import type { PostMetadata } from '../content/types';\n\nexport const article = ${json(metadata)} satisfies PostMetadata;\n\nexport default function Post() {\n  return (\n    <div class="article-content">\n${renderPostBlocks(content, 6)}\n    </div>\n  );\n}\n`;
}

function renderPostBlocks(
  blocks: readonly ContentBlock[],
  depth: number
): string {
  return blocks.map((block) => renderPostBlock(block, depth)).join('\n');
}

function renderPostBlock(block: ContentBlock, depth: number): string {
  const space = ' '.repeat(depth);
  switch (block.type) {
    case 'paragraph':
      return `${space}<p>${renderPostInline(block.children)}</p>`;
    case 'heading':
      return `${space}<h${block.level}>${renderPostInline(block.children)}</h${block.level}>`;
    case 'image': {
      const className = `content-image content-image--${block.align ?? 'center'}`;
      const dimensions = `${block.width ? ` width={${block.width}}` : ''}${block.height ? ` height={${block.height}}` : ''}`;
      const imageElement = `<img src={${JSON.stringify(block.src)}} alt={${JSON.stringify(block.alt)}}${dimensions} />`;
      const linkAttributes = block.external
        ? ' target="_blank" rel="noopener noreferrer"'
        : '';
      const image = block.href
        ? `${' '.repeat(depth + 2)}<a href={${JSON.stringify(block.href)}}${linkAttributes}>${imageElement}</a>`
        : `${' '.repeat(depth + 2)}${imageElement}`;
      const caption = block.caption
        ? `\n${' '.repeat(depth + 2)}<figcaption>${renderPostInline(block.caption)}</figcaption>`
        : '';
      return `${space}<figure class=${JSON.stringify(className)}>\n${image}${caption}\n${space}</figure>`;
    }
    case 'quote': {
      const children = renderPostBlocks(block.children, depth + 2);
      const cite = block.cite
        ? `\n${' '.repeat(depth + 2)}<cite>{${JSON.stringify(block.cite)}}</cite>`
        : '';
      return `${space}<blockquote>\n${children}${cite}\n${space}</blockquote>`;
    }
    case 'list': {
      const tag = block.ordered ? 'ol' : 'ul';
      const items = block.items
        .map(
          (item) => `${' '.repeat(depth + 2)}<li>${renderPostInline(item)}</li>`
        )
        .join('\n');
      return `${space}<${tag}>\n${items}\n${space}</${tag}>`;
    }
    case 'address':
      return `${space}<address>${renderPostInline(block.children)}</address>`;
    case 'table': {
      const caption = block.caption
        ? `\n${' '.repeat(depth + 4)}<caption>${renderPostInline(block.caption)}</caption>`
        : '';
      const rows = block.rows
        .map((row) => {
          const cells = row.cells
            .map((cell) => {
              const tag = cell.header ? 'th' : 'td';
              const scope = cell.header ? ' scope="col"' : '';
              return `${' '.repeat(depth + 8)}<${tag}${scope}>${renderPostInline(cell.children)}</${tag}>`;
            })
            .join('\n');
          return `${' '.repeat(depth + 6)}<tr>\n${cells}\n${' '.repeat(depth + 6)}</tr>`;
        })
        .join('\n');
      return `${space}<div class="table-scroll" tabIndex={0}>\n${' '.repeat(depth + 2)}<table>${caption}\n${' '.repeat(depth + 4)}<tbody>\n${rows}\n${' '.repeat(depth + 4)}</tbody>\n${' '.repeat(depth + 2)}</table>\n${space}</div>`;
    }
    case 'separator':
      return `${space}<hr />`;
  }
}

function renderPostInline(content: readonly InlineContent[]): string {
  return content
    .map((node) => {
      if (typeof node === 'string') return `{${JSON.stringify(node)}}`;
      if (node.type === 'lineBreak') return '<br />';
      const children = renderPostInline(node.children);
      switch (node.type) {
        case 'emphasis':
          return `<em>${children}</em>`;
        case 'strong':
          return `<strong>${children}</strong>`;
        case 'code':
          return `<code>${children}</code>`;
        case 'link': {
          const external = node.external
            ? ' target="_blank" rel="noopener noreferrer"'
            : '';
          return `<a href={${JSON.stringify(node.href)}}${external}>${children}</a>`;
        }
      }
    })
    .join('');
}

function categoryTerms(primary: Element): Term[] {
  const links = findAll(primary, (element) => {
    const rel = attr(element, 'rel') ?? '';
    return element.tagName === 'a' && rel.split(/\s+/).includes('category');
  });
  return uniqueTerms(
    links.map((link) => {
      const href = attr(link, 'href') ?? '';
      const match = href.match(/\/category\/([^/]+)/i);
      return {
        name: cleanText(textContent(link)),
        slug: match?.[1] ?? slugify(textContent(link)),
        url: href,
      };
    })
  );
}

function tagTerms(primary: Element): Term[] {
  const tagged = findFirst(primary, (element) => hasClass(element, 'tagged'));
  if (!tagged) return [];
  return uniqueTerms(
    findAll(tagged, (element) => {
      const rel = attr(element, 'rel') ?? '';
      return element.tagName === 'a' && rel.split(/\s+/).includes('tag');
    }).map((link) => {
      const href = attr(link, 'href') ?? '';
      const match = href.match(/\/tag\/([^/]+)/i);
      if (!match) throw new Error(`Malformed tag link ${href}`);
      return {
        name: cleanText(textContent(link)),
        slug: match[1],
        url: `/topics/${match[1]}/`,
      };
    })
  );
}

function uniqueTerms(terms: Term[]): Term[] {
  return [...new Map(terms.map((term) => [term.slug, term])).values()];
}

function authorFromComments(root: Node): string {
  for (const node of walk(root)) {
    if (isComment(node)) {
      const match = node.data.match(/^\s*by\s+(.+?)\s*$/i);
      if (match) return cleanReviewerName(match[1]);
    }
  }
  return '';
}

function firstTextBeforeComment(root: Node): string {
  let value = '';
  for (const node of walk(root)) {
    if (isComment(node)) break;
    if (isText(node)) value += ` ${node.value}`;
  }
  return value.split('·')[0].trim();
}

function canonicalFromRaw(raw: string): string | undefined {
  const match = raw.match(
    /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i
  );
  return match?.[1].replace(/&amp;/g, '&');
}

function normalizeLegacyUrl(raw: string): string {
  const url = new URL(raw);
  url.protocol = 'https:';
  url.hostname = 'vegbooks.org';
  url.search = '';
  url.hash = '';
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.href;
}

function preferredCapture(left: Capture, right: Capture): boolean {
  const expected = join(
    archiveHost,
    decodePath(new URL(left.canonical).pathname),
    'index.html'
  );
  const leftExact = resolve(left.file) === resolve(expected);
  const rightExact = resolve(right.file) === resolve(expected);
  return leftExact !== rightExact
    ? leftExact
    : left.file.length !== right.file.length
      ? left.file.length < right.file.length
      : left.file.localeCompare(right.file) < 0;
}

function fingerprint(entry: Element): string {
  const values: string[] = [];
  for (const node of walk(entry)) {
    if (isText(node)) {
      const text = cleanText(node.value);
      if (text) values.push(`t:${text}`);
    } else if (isElement(node) && node.tagName === 'img') {
      values.push(`i:${attr(node, 'src') ?? ''}:${attr(node, 'alt') ?? ''}`);
    } else if (isElement(node) && node.tagName === 'a') {
      values.push(`a:${attr(node, 'href') ?? ''}`);
    }
  }
  return sha256(values.join('\n'));
}

function collectImageBlocks(blocks: ContentBlock[]): ImageBlock[] {
  const result: ImageBlock[] = [];
  for (const block of blocks) {
    if (block.type === 'image') result.push(block);
    if (block.type === 'quote')
      result.push(...collectImageBlocks(block.children));
  }
  return result;
}

function collectBlockLinks(blocks: ContentBlock[]): string[] {
  const result: string[] = [];
  for (const block of blocks) {
    if (block.type === 'image' && block.href) result.push(block.href);
    if (block.type === 'quote') {
      result.push(...collectBlockLinks(block.children));
      continue;
    }
    if ('children' in block) result.push(...collectInlineLinks(block.children));
    if (block.type === 'list') {
      for (const item of block.items) result.push(...collectInlineLinks(item));
    }
    if (block.type === 'table') {
      if (block.caption) result.push(...collectInlineLinks(block.caption));
      for (const row of block.rows) {
        for (const cell of row.cells) {
          result.push(...collectInlineLinks(cell.children));
        }
      }
    }
  }
  return result;
}

function collectInlineLinks(values: InlineContent[]): string[] {
  return values.flatMap((value) => {
    if (typeof value === 'string' || value.type === 'lineBreak') return [];
    return [
      ...(value.type === 'link' ? [value.href] : []),
      ...collectInlineLinks(value.children),
    ];
  });
}

function isAmazonAffiliateLink(href: string): boolean {
  try {
    const url = new URL(href);
    return (
      /(^|\.)amazon\.com$/i.test(url.hostname) &&
      url.searchParams.get('tag') === 'vegbooks-20'
    );
  } catch {
    return false;
  }
}

function blocksText(blocks: ContentBlock[]): string {
  const values: string[] = [];
  for (const block of blocks) {
    if ('children' in block && block.type !== 'quote') {
      values.push(inlineText(block.children));
    } else if (block.type === 'quote') {
      values.push(blocksText(block.children));
    } else if (block.type === 'list') {
      values.push(block.items.map(inlineText).join(' '));
    } else if (block.type === 'table') {
      values.push(
        [
          ...(block.caption ? [inlineText(block.caption)] : []),
          ...block.rows.flatMap((row) =>
            row.cells.map((cell) => inlineText(cell.children))
          ),
        ].join(' ')
      );
    }
  }
  return cleanText(values.join(' '));
}

function inlineText(values: InlineContent[]): string {
  return cleanText(
    values
      .map((value) =>
        typeof value === 'string'
          ? value
          : value.type === 'lineBreak'
            ? ' '
            : inlineText(value.children)
      )
      .join('')
  );
}

function normalizeInline(values: InlineContent[]): InlineContent[] {
  const output: InlineContent[] = [];
  for (const value of values) {
    if (typeof value === 'string') {
      const normalized = value.replace(/\s+/gu, ' ');
      if (!normalized) continue;
      const previous = output.at(-1);
      if (typeof previous === 'string')
        output[output.length - 1] = previous + normalized;
      else output.push(normalized);
    } else if (value.type === 'lineBreak') {
      const previous = output.at(-1);
      if (
        typeof previous === 'string' ||
        previous === undefined ||
        previous.type !== 'lineBreak'
      ) {
        output.push(value);
      }
    } else {
      const children = normalizeInline(value.children);
      if (children.length) output.push({ ...value, children } as InlineContent);
    }
  }
  if (typeof output[0] === 'string') output[0] = output[0].trimStart();
  if (typeof output.at(-1) === 'string') {
    output[output.length - 1] = (output.at(-1) as string).trimEnd();
  }
  return output.filter((value) => value !== '');
}

function makeExcerpt(value: string): string {
  if (value.length <= 220) return value;
  const shortened = value
    .slice(0, 217)
    .replace(/\s+\S*$/, '')
    .trimEnd();
  return `${shortened}…`;
}

function formatPublishedLabel(isoDate: string): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDate}T00:00:00Z`));
}

function articleNeighbor(
  article: Article,
  key: 'previous' | 'next',
  neighbor: Article
): void {
  article[key] = { title: neighbor.title, url: neighbor.url };
}

function categoryOrder(slug: string): number {
  return ['books', 'movies', 'music', 'television', 'board-games'].indexOf(
    slug
  ) === -1
    ? 99
    : ['books', 'movies', 'music', 'television', 'board-games'].indexOf(slug);
}

function categoryName(slug: string): string {
  const names: Record<string, string> = {
    books: 'Books',
    movies: 'Movies',
    music: 'Music',
    television: 'Television',
    'board-games': 'Board Games',
  };
  return names[slug] ?? slug;
}

function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).href;
}

function slugify(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en-US')
    .replace(/['’‘`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function positiveInteger(value: string | undefined): number | undefined {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number : undefined;
}

function cleanText(value: string): string {
  return value
    .replace(/\u00a0/g, ' ')
    .replace(/\s+/gu, ' ')
    .trim();
}

function decodePath(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function isVegbooksHost(hostname: string): boolean {
  return /^(?:www\.)?vegbooks\.org$/i.test(hostname);
}

function attr(element: Element, name: string): string | undefined {
  return element.attrs.find((attribute) => attribute.name === name)?.value;
}

function classList(element: Element): Set<string> {
  return new Set((attr(element, 'class') ?? '').split(/\s+/).filter(Boolean));
}

function hasClass(element: Element, name: string): boolean {
  return classList(element).has(name);
}

function childNodes(node: Node): Node[] {
  return 'childNodes' in node ? (node.childNodes as Node[]) : [];
}

function directElements(node: Node): Element[] {
  return childNodes(node).filter(isElement);
}

function* walk(root: Node): Generator<Node> {
  for (const child of childNodes(root)) {
    yield child;
    yield* walk(child);
  }
}

function findFirst(
  root: Node,
  predicate: (element: Element) => boolean
): Element | undefined {
  for (const node of walk(root)) {
    if (isElement(node) && predicate(node)) return node;
  }
  return undefined;
}

function findAll(
  root: Node,
  predicate: (element: Element) => boolean
): Element[] {
  const values: Element[] = [];
  for (const node of walk(root)) {
    if (isElement(node) && predicate(node)) values.push(node);
  }
  return values;
}

function textContent(root: Node): string {
  let value = '';
  for (const node of walk(root)) {
    if (isText(node)) value += node.value;
  }
  return value;
}

function isElement(node: Node): node is Element {
  return 'tagName' in node;
}

function isText(node: Node): node is DefaultTreeAdapterMap['textNode'] {
  return node.nodeName === '#text';
}

function isComment(node: Node): node is DefaultTreeAdapterMap['commentNode'] {
  return node.nodeName === '#comment';
}

function groupBy<T, K>(values: T[], key: (value: T) => K): Map<K, T[]> {
  const result = new Map<K, T[]>();
  for (const value of values) {
    const group = result.get(key(value)) ?? [];
    group.push(value);
    result.set(key(value), group);
  }
  return result;
}

function walkFiles(root: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const path = join(root, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(path));
    else if (entry.isFile()) files.push(path);
  }
  return files.sort((left, right) => left.localeCompare(right));
}

function sha256(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

function git(args: string[]): string {
  return execFileSync('git', ['-C', archiveRoot, ...args], {
    encoding: 'utf8',
  }).trim();
}

function json(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function writeFile(path: string, contents: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, contents);
}

function assertEqual(actual: number, expected: number, label: string): void {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} ${label}, found ${actual}`);
  }
}
