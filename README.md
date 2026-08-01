# Vegbooks website

The read-only Vegbooks archive, rebuilt as a standalone Askr static site.
The generated site contains 1,008 reviews published from 2009–2021, all 2,541
legacy topics, reviewer/category/year indexes, editorial pages, full-text search,
and only the media referenced by canonical content.

```sh
npm install
npm run dev
npm run check
```

`npm run check` runs formatting, lint, TypeScript, unit tests, generated-content
verification, the client build, all 3,903 SSG routes, static output validation,
and `askr analyze --check`.

## Regenerating content

The normal build is self-contained. It reads the committed review modules under
`src/posts`, derived manifests under `src/generated`, and assets under
`public/media`; CI does not need the crawl.

To deliberately regenerate those files, place the clean archival repository at
`../archive` and run:

```sh
npm run migrate
npm run verify:content
```

Set `VEGBOOKS_ARCHIVE` to use a different archive checkout. The migration scans
canonical `type-post` and selected `type-page` documents, deduplicates them by
canonical URL, normalizes their structured content, rewrites internal links,
copies referenced media to deterministic kebab-case paths, keeps the
highest-resolution asset when normalized names collide, writes review modules
to `src/posts`, and records deterministic provenance in
`src/generated/provenance.json`.

Search uses a compact, versioned inverted index that is fetched only on
`/search/`. Its document tuples omit review bodies after indexing, its postings
are delta-encoded, and content verification enforces a 2 MB asset budget.

`public/redirects.json` is a host-independent 301 manifest. Hosting, DNS, and
deployment configuration are intentionally outside this repository.

The historical crawl and crawler remain unchanged in the sibling
[`archive`](../archive) repository.
