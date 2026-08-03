import type { ArticleSummary } from '../content/types';
import { SiteLink } from './site-link';

export function ArticleMeta({ article }: { article: ArticleSummary }) {
  return (
    <p class="post-meta">
      <time datetime={article.publishedAt}>{article.publishedLabel}</time>
      <span aria-hidden="true"> · </span>
      <span>
        Review by{' '}
        <SiteLink href={article.reviewer.url}>{article.reviewer.name}</SiteLink>
      </span>
      {article.categories.length > 0 && (
        <>
          <span aria-hidden="true"> · </span>
          {article.categories.map((category, index) => (
            <span key={category.slug}>
              {index > 0 && <span aria-hidden="true">, </span>}
              <SiteLink href={category.url}>{category.name}</SiteLink>
            </span>
          ))}
        </>
      )}
    </p>
  );
}
