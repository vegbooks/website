import type { Props } from '@askrjs/askr';
import type { ContentBlock, InlineContent } from '../content/types';

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
        <img
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
        />
      );
      return (
        <figure
          class={`content-image content-image--${block.align ?? 'center'}`}
        >
          {block.href ? (
            <a
              href={block.href}
              target={block.external ? '_blank' : undefined}
              rel={block.external ? 'noopener noreferrer' : undefined}
            >
              {image}
            </a>
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
            return (
              <a
                key={index}
                href={node.href}
                target={node.external ? '_blank' : undefined}
                rel={node.external ? 'noopener noreferrer' : undefined}
              >
                {children}
              </a>
            );
        }
      })}
    </>
  );
}
