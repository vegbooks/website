import { ArchiveSidebar } from '../components/archive-sidebar';
import { ArticleCard } from '../components/article-card';
import { ContentLayout } from '../components/content-layout';
import { Pagination } from '../components/pagination';
import type { CollectionPage, SidebarModel } from '../content/types';

export function CollectionTemplate({
  collection,
  sidebar,
}: {
  collection: CollectionPage;
  sidebar?: SidebarModel;
}) {
  return (
    <ContentLayout sidebar={sidebar && <ArchiveSidebar sidebar={sidebar} />}>
      <section class="collection-page" data-collection={collection.kind}>
        <header class="collection-header">
          <h1>{collection.title}</h1>
          {collection.description && <p>{collection.description}</p>}
        </header>
        <div class="article-list">
          {collection.articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        {collection.pagination && (
          <Pagination pagination={collection.pagination} />
        )}
      </section>
    </ContentLayout>
  );
}
