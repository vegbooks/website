import { Link, type LinkProps } from '@askrjs/askr/router';
import { deliveryImagePath } from '../image-paths.ts';
import { sitePath } from '../site-base';

type SiteLinkProps = Omit<LinkProps, 'href'> & { href: string };

/** An Askr client link that consistently applies the site's deployment base. */
export function SiteLink({ href, ...props }: SiteLinkProps) {
  return (
    <Link {...props} href={sitePath(deliveryImagePath(href, 'webp') ?? href)} />
  );
}
