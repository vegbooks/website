import { articleImports } from '../generated/article-imports';
import { createArticleRoutePage } from '../pages/content-pages';

export async function loadArticleRoutePage(slug: string) {
  const loadPost = articleImports[slug];
  if (!loadPost) throw new Error(`Unknown article: ${slug}`);
  const { default: content } = await loadPost();
  return createArticleRoutePage(content);
}
