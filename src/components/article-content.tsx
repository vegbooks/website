import type { Props } from '@askrjs/askr';
import type { ContentBlock, InlineContent } from '../content/types';
import { SiteLink } from './site-link';
import { OptimizedImage } from './optimized-image';
import { deliveryImagePath } from '../image-paths.ts';

export function ArticleContent({
  blocks,
}: {
  blocks: readonly ContentBlock[];
}) {
  return (
    <div class="article-content">
      {blocks.map((block, index) => (
        <ContentBlockView key={index} block={block} />
      ))}
    </div>
  );
}

interface ContentBlockViewProps extends Props {
  block: ContentBlock;
}

function ContentBlockView({ block }: ContentBlockViewProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          <InlineContentView content={block.children} />
        </p>
      );
    case 'heading':
      return block.level === 2 ? (
        <h2>
          <InlineContentView content={block.children} />
        </h2>
      ) : (
        <h3>
          <InlineContentView content={block.children} />
        </h3>
      );
    case 'image':
      const image = (
        <OptimizedImage
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          sizes="(min-width: 64rem) 48rem, 100vw"
          loading="lazy"
          decoding="async"
        />
      );
      return (
        <figure
          class={`content-image content-image--${block.align ?? 'center'}`}
        >
          {block.href ? (
            block.external ? (
              <a
                href={deliveryImagePath(block.href, 'webp') ?? block.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {image}
              </a>
            ) : (
              <SiteLink href={block.href}>{image}</SiteLink>
            )
          ) : (
            image
          )}
          {block.caption && (
            <figcaption>
              <InlineContentView content={block.caption} />
            </figcaption>
          )}
        </figure>
      );
    case 'quote':
      return (
        <blockquote>
          {block.children.map((child, index) => (
            <ContentBlockView key={index} block={child} />
          ))}
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    case 'list': {
      const items = block.items.map((item, index) => (
        <li key={index}>
          <InlineContentView content={item} />
        </li>
      ));
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
    }
    case 'address':
      return (
        <address>
          <InlineContentView content={block.children} />
        </address>
      );
    case 'table':
      return (
        <div class="table-scroll" tabIndex={0}>
          <table>
            {block.caption && (
              <caption>
                <InlineContentView content={block.caption} />
              </caption>
            )}
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.cells.map((cell, cellIndex) =>
                    cell.header ? (
                      <th key={cellIndex} scope="col">
                        <InlineContentView content={cell.children} />
                      </th>
                    ) : (
                      <td key={cellIndex}>
                        <InlineContentView content={cell.children} />
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'separator':
      return <hr />;
  }
}

function InlineContentView({ content }: { content: readonly InlineContent[] }) {
  return (
    <>
      {content.map((node, index) => {
        if (typeof node === 'string') return node;
        if (node.type === 'lineBreak') return <br key={index} />;
        const children = <InlineContentView content={node.children} />;
        switch (node.type) {
          case 'emphasis':
            return <em key={index}>{children}</em>;
          case 'strong':
            return <strong key={index}>{children}</strong>;
          case 'code':
            return <code key={index}>{children}</code>;
          case 'link':
            return node.external ? (
              <a
                key={index}
                href={node.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ) : (
              <SiteLink key={index} href={node.href}>
                {children}
              </SiteLink>
            );
        }
      })}
    </>
  );
}
