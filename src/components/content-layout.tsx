import type { Props } from '@askrjs/askr';

interface ContentLayoutProps extends Props {
  sidebar?: unknown;
  width?: 'reading' | 'wide';
}

export function ContentLayout({
  children,
  sidebar,
  width = 'reading',
}: ContentLayoutProps) {
  return (
    <div
      class={
        sidebar ? 'content-layout content-layout--sidebar' : 'content-layout'
      }
      data-width={width}
    >
      <div class="content-layout__main">{children}</div>
      {sidebar && <aside class="content-layout__aside">{sidebar}</aside>}
    </div>
  );
}
