import type { TaxonomyTerm } from '../content/types';
import { SiteLink } from './site-link';

export function TaxonomyLinks({
  label,
  terms,
}: {
  label: string;
  terms: readonly TaxonomyTerm[];
}) {
  if (terms.length === 0) return null;
  return (
    <p class="taxonomy-links">
      <strong>{label}:</strong>{' '}
      {terms.map((term, index) => (
        <span key={term.slug}>
          {index > 0 && <span aria-hidden="true"> · </span>}
          <SiteLink href={term.url}>{term.name}</SiteLink>
        </span>
      ))}
    </p>
  );
}
