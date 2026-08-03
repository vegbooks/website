import type { JSXElement } from '@askrjs/askr/jsx-runtime';
import { deliveryImagePath } from './image-paths.ts';

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

export function isActiveSitePath(
  currentPath: string,
  targetPath: string,
  basePath: string = siteBasePath
): boolean {
  const normalize = (value: string) => {
    const stripped = stripSiteBase(value, basePath);
    return stripped !== '/' && stripped.endsWith('/')
      ? stripped.slice(0, -1)
      : stripped;
  };
  const current = normalize(currentPath);
  const target = normalize(targetPath);
  return target === '/'
    ? current === '/'
    : current === target || current.startsWith(`${target}/`);
}

export function sitePath(value: string): string {
  return addSiteBase(value);
}

export function prefixElementSiteUrls(
  element: JSXElement,
  basePath: string = siteBasePath
): JSXElement {
  prefixRenderableSiteUrls(element, basePath);
  return element;
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

function prefixRenderableSiteUrls(value: unknown, basePath: string): void {
  if (Array.isArray(value)) {
    for (const child of value) prefixRenderableSiteUrls(child, basePath);
    return;
  }
  if (!isJSXElement(value)) return;

  if (typeof value.type === 'string') {
    for (const attribute of ['action', 'href', 'poster', 'src', 'srcSet']) {
      const current = value.props[attribute];
      if (typeof current === 'string')
        value.props[attribute] = addSiteBase(
          deliveryImagePath(current, 'webp') ?? current,
          basePath
        );
    }
  }
  prefixRenderableSiteUrls(value.props.children, basePath);
}

function isJSXElement(value: unknown): value is JSXElement {
  return (
    typeof value === 'object' &&
    value !== null &&
    '$$typeof' in value &&
    (value as { $$typeof: unknown }).$$typeof === Symbol.for('askr.element')
  );
}
