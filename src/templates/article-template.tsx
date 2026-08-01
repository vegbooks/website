import { ArchiveSidebar } from '../components/archive-sidebar';
import { ArticleMeta } from '../components/article-meta';
import { ContentLayout } from '../components/content-layout';
import { TaxonomyLinks } from '../components/taxonomy-links';
import type {
  PostComponent,
  PostMetadata,
  SidebarModel,
} from '../content/types';
import { sitePath } from '../site-base';

export function ArticleTemplate({
  article,
  Post,
  sidebar,
}: {
  article: PostMetadata;
  Post: PostComponent;
  sidebar?: SidebarModel;
}) {
  return (
    <ContentLayout sidebar={sidebar && <ArchiveSidebar sidebar={sidebar} />}>
      <article class="article-page">
        <header>
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </header>
        <Post />
        <footer>
          <TaxonomyLinks label="Tags" terms={article.tags} />
          <nav class="article-neighbors" aria-label="Adjacent reviews">
            <span>
              {article.previous && (
                <a href={sitePath(article.previous.url)}>
                  ← {article.previous.title}
                </a>
              )}
            </span>
            <span>
              {article.next && (
                <a href={sitePath(article.next.url)}>{article.next.title} →</a>
              )}
            </span>
          </nav>
        </footer>
      </article>
    </ContentLayout>
  );
}
