export interface TaxonomyTerm {
  name: string;
  slug: string;
  url: string;
}

export interface ArticleSummary {
  id: string;
  slug: string;
  url: string;
  legacyUrl: string;
  title: string;
  publishedAt: string;
  publishedLabel: string;
  excerpt: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  categories: readonly TaxonomyTerm[];
  tags: readonly TaxonomyTerm[];
  reviewer: Reviewer;
  seo: SeoFields;
}

export interface PostMetadata extends ArticleSummary {
  previous?: Pick<ArticleSummary, 'title' | 'url'>;
  next?: Pick<ArticleSummary, 'title' | 'url'>;
}

export interface ReviewContentModule {
  default: readonly ContentBlock[];
}

export interface Reviewer extends TaxonomyTerm {
  aliases: readonly string[];
}

export interface SeoFields {
  description: string;
  image?: string;
}

export type InlineContent =
  | string
  | { type: 'emphasis'; children: readonly InlineContent[] }
  | { type: 'strong'; children: readonly InlineContent[] }
  | { type: 'code'; children: readonly InlineContent[] }
  | { type: 'lineBreak' }
  | {
      type: 'link';
      href: string;
      children: readonly InlineContent[];
      external?: boolean;
    };

export type ContentBlock =
  | { type: 'paragraph'; children: readonly InlineContent[] }
  | { type: 'heading'; level: 2 | 3; children: readonly InlineContent[] }
  | {
      type: 'image';
      src: string;
      alt: string;
      href?: string;
      external?: boolean;
      caption?: readonly InlineContent[];
      width?: number;
      height?: number;
      align?: 'left' | 'center' | 'right';
    }
  | { type: 'quote'; children: readonly ContentBlock[]; cite?: string }
  | {
      type: 'list';
      ordered?: boolean;
      items: readonly (readonly InlineContent[])[];
    }
  | { type: 'address'; children: readonly InlineContent[] }
  | {
      type: 'table';
      caption?: readonly InlineContent[];
      rows: readonly {
        cells: readonly {
          header: boolean;
          children: readonly InlineContent[];
        }[];
      }[];
    }
  | { type: 'separator' };

export interface SidebarLink {
  label: string;
  url: string;
}

export interface SidebarSection {
  title: string;
  description?: string;
  links?: readonly SidebarLink[];
}

export interface SidebarModel {
  label?: string;
  sections: readonly SidebarSection[];
}

export type CollectionKind =
  | 'home'
  | 'reviews'
  | 'category'
  | 'topic'
  | 'contributor'
  | 'year'
  | 'media';

export interface CollectionPage {
  kind: CollectionKind;
  title: string;
  description?: string;
  canonicalUrl: string;
  articles: readonly ArticleSummary[];
  pagination?: Pagination;
}

export interface Pagination {
  current: number;
  total: number;
  previousUrl?: string;
  nextUrl?: string;
}

export interface EditorialPage {
  id: string;
  title: string;
  slug: string;
  legacyUrl: string;
  canonicalUrl: string;
  description?: string;
  content: readonly ContentBlock[];
}

export interface CollectionTerm extends TaxonomyTerm {
  count: number;
  articleSlugs: readonly string[];
}

export interface YearCollection {
  year: number;
  url: string;
  count: number;
  articleSlugs: readonly string[];
}

export interface ContentManifest {
  articles: readonly ArticleSummary[];
  topics: readonly CollectionTerm[];
  categories: readonly CollectionTerm[];
  reviewers: readonly (Reviewer & {
    count: number;
    articleSlugs: readonly string[];
  })[];
  years: readonly YearCollection[];
  editorials: readonly EditorialPage[];
}
