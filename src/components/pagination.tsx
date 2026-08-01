import type { Pagination as PaginationModel } from '../content/types';

export function Pagination({ pagination }: { pagination: PaginationModel }) {
  if (pagination.total <= 1) return null;
  return (
    <nav class="pagination" aria-label="Collection pages">
      <span>
        {pagination.previousUrl && <a href={pagination.previousUrl}>← Newer</a>}
      </span>
      <span>
        Page {pagination.current} of {pagination.total}
      </span>
      <span>
        {pagination.nextUrl && <a href={pagination.nextUrl}>Older →</a>}
      </span>
    </nav>
  );
}
