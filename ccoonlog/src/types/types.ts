export interface ArticleProps {
  id: number;
  title: string;
  subTitle: string;
  date: string;
}

export interface ArticleLocationState {
  id: string;
  title: string;
}

export interface ArticleDetailProps {
  id: number;
  title: string;
  subTitle?: string;
  date: string;
  content?: string;
}

export interface ArticleDetailState {
  articleDetail: ArticleDetailProps;
}
