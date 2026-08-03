import type { Props } from '@askrjs/askr';
import type { ArticleSummary } from '../content/types';
import { ArticleMeta } from './article-meta';
import { TaxonomyLinks } from './taxonomy-links';
import { SiteLink } from './site-link';
import { OptimizedImage } from './optimized-image';

interface ArticleCardProps extends Props {
  article: ArticleSummary;
  priority?: boolean;
}

export function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <article class="article-card">
      <h2>
        <SiteLink href={article.url}>{article.title}</SiteLink>
      </h2>
      <ArticleMeta article={article} />
      {article.image && (
        <SiteLink class="article-card__image" href={article.url} tabIndex={-1}>
          <OptimizedImage
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            sizes="(min-width: 48rem) 16rem, 100vw"
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={priority ? 'high' : undefined}
          />
        </SiteLink>
      )}
      <p>{article.excerpt}</p>
      <p>
        <SiteLink href={article.url}>Continue Reading →</SiteLink>
      </p>
      <TaxonomyLinks label="Tags" terms={article.tags} />
    </article>
  );
}
