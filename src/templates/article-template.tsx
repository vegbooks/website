import { ArchiveSidebar } from '../components/archive-sidebar';
import { ArticleMeta } from '../components/article-meta';
import { ContentLayout } from '../components/content-layout';
import { TaxonomyLinks } from '../components/taxonomy-links';
import type { PostMetadata, SidebarModel } from '../content/types';
import { SiteLink } from '../components/site-link';
import type { Props } from '@askrjs/askr';

export function ArticleTemplate({
  article,
  children,
  sidebar,
}: Props & {
  article: PostMetadata;
  children: Props['children'];
  sidebar?: SidebarModel;
}) {
  return (
    <ContentLayout sidebar={sidebar && <ArchiveSidebar sidebar={sidebar} />}>
      <article class="article-page">
        <header>
          <h1>{article.title}</h1>
          <ArticleMeta article={article} />
        </header>
        {children}
        <footer>
          <TaxonomyLinks label="Tags" terms={article.tags} />
          <nav class="article-neighbors" aria-label="Adjacent reviews">
            <span>
              {article.previous && (
                <SiteLink href={article.previous.url}>
                  ← {article.previous.title}
                </SiteLink>
              )}
            </span>
            <span>
              {article.next && (
                <SiteLink href={article.next.url}>
                  {article.next.title} →
                </SiteLink>
              )}
            </span>
          </nav>
        </footer>
      </article>
    </ContentLayout>
  );
}
