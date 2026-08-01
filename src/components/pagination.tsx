import type { Pagination as PaginationModel } from '../content/types';
import { sitePath } from '../site-base';

export function Pagination({ pagination }: { pagination: PaginationModel }) {
  if (pagination.total <= 1) return null;
  return (
    <nav class="pagination" aria-label="Collection pages">
      <span>
        {pagination.previousUrl && (
          <a href={sitePath(pagination.previousUrl)}>← Newer</a>
        )}
      </span>
      <span>
        Page {pagination.current} of {pagination.total}
      </span>
      <span>
        {pagination.nextUrl && (
          <a href={sitePath(pagination.nextUrl)}>Older →</a>
        )}
      </span>
    </nav>
  );
}
