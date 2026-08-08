export function normalizeSiteBasePath(value: string | undefined): string {
  if (!value || value === '/') return '';
  const normalized = `/${value}`.replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized === '/' ? '' : normalized;
}

export function addSiteBase(
  value: string,
  basePath: string = siteBasePath
): string {
  const base = normalizeSiteBasePath(basePath);
  if (
    !base ||
    !value.startsWith('/') ||
    value.startsWith('//') ||
    value === base ||
    value.startsWith(`${base}/`)
  ) {
    return value;
  }
  return value === '/' ? `${base}/` : `${base}${value}`;
}

export function stripSiteBase(
  pathname: string,
  basePath: string = siteBasePath
): string {
  const base = normalizeSiteBasePath(basePath);
  if (!base) return pathname;
  if (pathname === base || pathname === `${base}/`) return '/';
  return pathname.startsWith(`${base}/`)
    ? pathname.slice(base.length)
    : pathname;
}

export function sitePath(value: string): string {
  return addSiteBase(value);
}

const viteBaseUrl =
  typeof import.meta.env === 'object' &&
  typeof import.meta.env.BASE_URL === 'string'
    ? import.meta.env.BASE_URL
    : undefined;
const processBasePath =
  typeof process === 'object' ? process.env.SITE_BASE_PATH : undefined;

export const siteBasePath = normalizeSiteBasePath(
  viteBaseUrl ?? processBasePath
);
