import { deliveryImages } from './generated/delivery-images.ts';

export type DeliveryImageFormat = 'avif' | 'webp';

const sourceImagePattern = /\.(?:gif|jpe?g|png)(?=([?#]|$))/i;

export function deliveryImagePath(
  value: string,
  format: DeliveryImageFormat
): string | undefined {
  const pathname = absolutePathname(value);
  if (
    !pathname ||
    (!pathname.startsWith('/media/') && !pathname.startsWith('/assets/')) ||
    !sourceImagePattern.test(value)
  ) {
    return undefined;
  }
  const sourceBase = pathname.replace(/\.(?:gif|jpe?g|png)$/i, '');
  // Source images are removed after conversion, so use the generated
  // canonical delivery basename whenever one is available. This also keeps
  // explicit name overrides (and collision-safe slugs) in sync with output.
  const base = deliveryImages[pathname] ?? sourceBase;
  if (!base) return undefined;
  if (value.startsWith('/')) {
    const suffix = value.slice(pathname.length);
    return `${base}.${format}${suffix}`;
  }
  const url = new URL(value);
  url.pathname = `${base}.${format}`;
  return url.href;
}

function absolutePathname(value: string): string | undefined {
  if (value.startsWith('/')) return value.split(/[?#]/, 1)[0];
  try {
    const url = new URL(value);
    return url.hostname === 'vegbooks.org' ||
      url.hostname === 'www.vegbooks.org'
      ? url.pathname
      : undefined;
  } catch {
    return undefined;
  }
}
