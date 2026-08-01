# Content and templates

Routes load or import content data and select one of three templates:

- `ArticleTemplate` renders one complete review.
- `CollectionTemplate` renders home, category, tag, author, date, and search
  collections from the same article-card and pagination primitives.
- `EditorialPageTemplate` renders curated pages such as About, Contributors,
  Books, Movies, and Favorites. Those pages compose content-specific sections
  inside a shared frame instead of adding conditionals to one giant template.

All three templates use `ContentLayout`, so the main/sidebar frame is defined
once. `ArchiveSidebar` is data-driven and can be shared across routes.

Extracted reviews become typed `ContentBlock` records rendered by
`ArticleContent`; routes never inject copied WordPress template HTML. Inline
links and emphasis, headings, images, quotes, and lists remain composable and
safe to render.

The extracted archive should produce structured `Article`, `CollectionPage`,
and `EditorialPage` records. It must not preserve WordPress template markup,
comment data, comment counts, or comment routes.

Typical routes stay intentionally small:

```tsx
export function PostPage() {
  return <ArticleTemplate article={article} sidebar={archiveSidebar} />;
}

export function CategoryPage() {
  return <CollectionTemplate collection={category} sidebar={archiveSidebar} />;
}
```
