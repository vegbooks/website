import type { SidebarModel } from '../content/types';
import { sitePath } from '../site-base';

export function ArchiveSidebar({ sidebar }: { sidebar: SidebarModel }) {
  return (
    <div class="archive-sidebar" aria-label={sidebar.label ?? 'Browse reviews'}>
      {sidebar.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.description && <p>{section.description}</p>}
          {section.links && (
            <ul>
              {section.links.map((link) => (
                <li key={link.url}>
                  <a href={sitePath(link.url)}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
