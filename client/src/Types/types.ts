export interface ArticleType {
  id: number;
  title: string;
  author?: string;
  content: string;
}

export interface ContentProps {
  title: string;
  link: string;
  author: string;
  overlayLink: string;
}

export interface ObjectProps {
  type: string;
  value?: string;
  children?: Array<Object>;
}
