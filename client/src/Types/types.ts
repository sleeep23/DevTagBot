export interface TagType {
  tagName: string;
}

export interface ArticleType {
  id: number;
  title: string;
  author?: string;
  date?: Date;
  content: string;
}
