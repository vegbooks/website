import type { Props } from '@askrjs/askr';
import type { ArticleSummary } from '../content/types';
import { ArticleMeta } from './article-meta';
import { TaxonomyLinks } from './taxonomy-links';
import { sitePath } from '../site-base';

interface ArticleCardProps extends Props {
  article: ArticleSummary;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article class="article-card">
      <h2>
        <a href={sitePath(article.url)}>{article.title}</a>
      </h2>
      <ArticleMeta article={article} />
      {article.image && (
        <a
          class="article-card__image"
          href={sitePath(article.url)}
          tabIndex={-1}
        >
          <img
            src={sitePath(article.image.src)}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
          />
        </a>
      )}
      <p>{article.excerpt}</p>
      <p>
        <a href={sitePath(article.url)}>Continue Reading →</a>
      </p>
      <TaxonomyLinks label="Tags" terms={article.tags} />
    </article>
  );
}
