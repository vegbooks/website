import type { Props } from '@askrjs/askr';
import { ArchiveSidebar } from '../components/archive-sidebar';
import { ContentLayout } from '../components/content-layout';
import type { EditorialPage, SidebarModel } from '../content/types';

interface EditorialPageTemplateProps extends Props {
  page: EditorialPage;
  sidebar?: SidebarModel;
}

export function EditorialPageTemplate({
  page,
  sidebar,
  children,
}: EditorialPageTemplateProps) {
  return (
    <ContentLayout sidebar={sidebar && <ArchiveSidebar sidebar={sidebar} />}>
      <article class="editorial-page">
        <header>
          <h1>{page.title}</h1>
          {page.description && (
            <p class="editorial-page__description">{page.description}</p>
          )}
        </header>
        <div class="editorial-page__body">{children}</div>
      </article>
    </ContentLayout>
  );
}
