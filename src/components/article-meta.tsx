import type { ArticleSummary } from '../content/types';

export function ArticleMeta({ article }: { article: ArticleSummary }) {
  return (
    <p class="post-meta">
      <time datetime={article.publishedAt}>{article.publishedLabel}</time>
      <span aria-hidden="true"> · </span>
      <span>
        Review by <a href={article.reviewer.url}>{article.reviewer.name}</a>
      </span>
      {article.categories.length > 0 && (
        <>
          <span aria-hidden="true"> · </span>
          {article.categories.map((category, index) => (
            <span key={category.slug}>
              {index > 0 && <span aria-hidden="true">, </span>}
              <a href={category.url}>{category.name}</a>
            </span>
          ))}
        </>
      )}
    </p>
  );
}
