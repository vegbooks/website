import type { ImageProps } from '@askrjs/vite/image';
import { Image } from '@askrjs/vite/image';
import type { JSXElement } from '@askrjs/askr/jsx-runtime';
import { imageAssets } from '../generated/image-assets';
import { sitePath } from '../site-base';

interface OptimizedImageProps extends Omit<ImageProps, 'image'> {
  src: string;
  alt: string;
}

export function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  const declaration = imageAssets[src];
  return declaration ? (
    <Image
      image={declaration}
      alt={alt}
      loading="lazy"
      decoding="async"
      sizes="(min-width: 64rem) 48rem, 100vw"
      {...props}
    />
  ) : (
    <img src={sitePath(src)} alt={alt} {...props} />
  );
}

export function optimizeElementImages(element: JSXElement): JSXElement {
  return optimizeRenderableImages(element) as JSXElement;
}

function optimizeRenderableImages(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(optimizeRenderableImages);
  if (!isJSXElement(value)) return value;

  if (value.type === 'img' && typeof value.props.src === 'string') {
    const { src, alt, ...props } = value.props;
    return OptimizedImage({
      ...props,
      src,
      alt: typeof alt === 'string' ? alt : '',
    });
  }

  value.props.children = optimizeRenderableImages(value.props.children);
  return value;
}

function isJSXElement(value: unknown): value is JSXElement {
  return (
    typeof value === 'object' &&
    value !== null &&
    '$$typeof' in value &&
    (value as { $$typeof: unknown }).$$typeof === Symbol.for('askr.element')
  );
}
