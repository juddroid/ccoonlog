export interface ArticleProps {
  id: number;
  title: string;
  subTitle: string;
  date: string;
}

export interface ArticleLocationState {
  id: number;
}

export interface ArticleDetailProps {
  id: number;
  title: string;
  date: string;
  content?: string;
}
