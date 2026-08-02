import {
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicRoot = join(root, 'public');
const stagingRoot = join(root, '.image-conversion');
const sourceExtensions = new Set(['.gif', '.jpeg', '.jpg', '.png']);
const sourceRoots = [join(publicRoot, 'media'), join(publicRoot, 'assets')];
const maxWidth = 960;
const concurrency = 8;
const postRoot = join(root, 'src', 'posts');
const manifestPath = join(root, 'src', 'generated', 'delivery-images.ts');
const nameOverrides: Readonly<Record<string, string>> = {
  '/media/2009/10/4ee4ca87d535cf5b2d000020.jpg': 'raising-veg-kids-good-books',
  '/media/2009/10/gv-vb.jpg': 'generation-veggie-top-10-books',
  '/media/2010/10/0152056882-lres.jpg': 'happy-birthday-baby',
  '/media/2010/12/9781429645362-int01.jpg':
    'onion-juice-poop-alternative-energy-interior',
  '/media/2013/04/cover-r3.jpg': 'the-abcs-of-nutrition',
  '/media/2013/05/9780152018986-hres.jpg': 'each-living-thing',
  '/media/2013/09/9781419704000-i-know-a-lot-cv.jpg': 'i-know-a-lot',
  '/media/2013/10/bronto-cera-frontcover-copy.jpg': 'bronto-cera-front-cover',
  '/media/2014/08/9780547875071-lres.jpg': 'a-boy-and-his-jaguar',
  '/media/2015/03/9781419710377-lullabyand-kisses-sweet-tx2.jpg':
    'lullaby-kisses-sweet-poems-interior',
  '/media/2015/03/9781419715143-rhymoceros-cv.jpg': 'rhymoceros',
  '/media/2016/01/623-herd-your-horses-box-720233006234.jpg':
    'herd-your-horses-box',
  '/media/2016/01/623-herd-your-horses-otb-720233006234.jpg':
    'herd-your-horses-game',
};

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : [path];
    })
  );
  return nested.flat();
}

const sources = (
  await Promise.all(sourceRoots.map((directory) => walk(directory)))
)
  .flat()
  .filter((path) => sourceExtensions.has(extname(path).toLowerCase()))
  .sort();

if (sources.length === 0) {
  throw new Error('No JPEG, PNG, or GIF source images remain to convert.');
}

const labels = await collectImageLabels();
const names = new Map<string, string>();
const usedNames = new Set<string>();
for (const source of sources) {
  const sourcePath = `/${relative(publicRoot, source).replaceAll('\\', '/')}`;
  const directory = sourcePath.slice(0, sourcePath.lastIndexOf('/'));
  const context = labels.get(sourcePath);
  const original = sourcePath.slice(
    sourcePath.lastIndexOf('/') + 1,
    -extname(sourcePath).length
  );
  const preferred =
    nameOverrides[sourcePath] ??
    meaningfulSlug(context?.alt) ??
    meaningfulSlug(original) ??
    context?.articleSlug ??
    'archive-image';
  let name = preferred;
  let suffix = 2;
  while (usedNames.has(`${directory}/${name}`))
    name = `${preferred}-${suffix++}`;
  usedNames.add(`${directory}/${name}`);
  names.set(sourcePath, `${directory}/${name}`);
}

await rm(stagingRoot, { recursive: true, force: true });

let completed = 0;
let cursor = 0;
const workers = Array.from({ length: concurrency }, async () => {
  while (cursor < sources.length) {
    const source = sources[cursor++];
    const sourcePath = `/${relative(publicRoot, source).replaceAll('\\', '/')}`;
    const relativeBase = names.get(sourcePath)!.slice(1);
    const avif = join(stagingRoot, `${relativeBase}.avif`);
    const webp = join(stagingRoot, `${relativeBase}.webp`);
    await mkdir(dirname(avif), { recursive: true });

    const pipeline = sharp(source).rotate().resize({
      width: maxWidth,
      withoutEnlargement: true,
    });
    const asset = sourcePath.startsWith('/assets/');
    await Promise.all([
      pipeline
        .clone()
        .avif({ quality: asset ? 75 : 60, effort: 4 })
        .toFile(avif),
      pipeline
        .clone()
        .webp({ quality: asset ? 88 : 82, effort: 4 })
        .toFile(webp),
    ]);

    completed++;
    if (completed % 50 === 0 || completed === sources.length) {
      console.log(`Converted ${completed}/${sources.length} images.`);
    }
  }
});

await Promise.all(workers);

for (const source of sources) {
  const sourcePath = `/${relative(publicRoot, source).replaceAll('\\', '/')}`;
  const relativeBase = names.get(sourcePath)!.slice(1);
  for (const format of ['avif', 'webp']) {
    const staged = join(stagingRoot, `${relativeBase}.${format}`);
    const destination = join(publicRoot, `${relativeBase}.${format}`);
    await rename(staged, destination);
  }
}
for (const source of sources) await rm(source);
await rm(stagingRoot, { recursive: true, force: true });

const entries = [...names]
  .map(
    ([source, destination]) =>
      `  ${JSON.stringify(source)}: ${JSON.stringify(destination)},`
  )
  .join('\n');
await writeFile(
  manifestPath,
  `// Generated by scripts/convert-images.ts.\nexport const deliveryImages: Readonly<Record<string, string>> = {\n${entries}\n};\n`
);

console.log(
  `Replaced ${sources.length} source images with committed AVIF/WebP pairs.`
);

async function collectImageLabels(): Promise<
  Map<string, { alt?: string; articleSlug: string }>
> {
  const result = new Map<string, { alt?: string; articleSlug: string }>();
  for (const post of (await walk(postRoot)).filter((path) =>
    path.endsWith('.tsx')
  )) {
    const source = await readFile(post, 'utf8');
    const articleSlug = post.slice(post.lastIndexOf('/') + 1, -4);
    for (const tag of source.match(/<img\b[^>]*>/g) ?? []) {
      const srcLiteral = tag.match(/src=\{("(?:\\.|[^"\\])*")\}/)?.[1];
      const altLiteral = tag.match(/alt=\{("(?:\\.|[^"\\])*")\}/)?.[1];
      if (!srcLiteral) continue;
      const imagePath = JSON.parse(srcLiteral) as string;
      if (!imagePath.startsWith('/media/')) continue;
      const alt = altLiteral ? (JSON.parse(altLiteral) as string) : undefined;
      const current = result.get(imagePath);
      if (!current || (!current.alt && alt)) {
        result.set(imagePath, { alt, articleSlug });
      }
    }
  }
  return result;
}

function meaningfulSlug(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const slug = value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/-\d{10,}(?:-\d+)?$/, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
  if (
    slug.length < 4 ||
    !/[a-z]{3}/.test(slug) ||
    /^(?:image|book-?cover|cover|front-cover|photo|untitled|jpg|img-?\d*)$/.test(
      slug
    ) ||
    /^(?:97[89])?\d[\d-]+$/.test(slug) ||
    /^[a-f0-9]{16,}$/.test(slug)
  ) {
    return undefined;
  }
  return slug;
}
