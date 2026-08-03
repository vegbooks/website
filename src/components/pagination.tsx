import type { Pagination as PaginationModel } from '../content/types';
import { SiteLink } from './site-link';

export function Pagination({ pagination }: { pagination: PaginationModel }) {
  if (pagination.total <= 1) return null;
  return (
    <nav class="pagination" aria-label="Collection pages">
      <span>
        {pagination.previousUrl && (
          <SiteLink href={pagination.previousUrl}>← Newer</SiteLink>
        )}
      </span>
      <span>
        Page {pagination.current} of {pagination.total}
      </span>
      <span>
        {pagination.nextUrl && (
          <SiteLink href={pagination.nextUrl}>Older →</SiteLink>
        )}
      </span>
    </nav>
  );
}
