import { Link, type LinkProps } from '@askrjs/askr/router';
import { deliveryImagePath } from '../image-paths.ts';

type SiteLinkProps = Omit<LinkProps, 'href'> & { href: string };

/** An Askr client link that maps converted media to its delivered asset. */
export function SiteLink({ href, ...props }: SiteLinkProps) {
  return <Link {...props} href={deliveryImagePath(href, 'webp') ?? href} />;
}
