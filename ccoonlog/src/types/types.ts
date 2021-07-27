export interface ArticleProps {
  id: number;
  title: string;
  subTitle?: string;
  date: string;
  content?: string;
  category?: CategoryProps[];
}

export interface ArticleLocationState {
  id: string;
  title: string;
}

export interface CategoryProps {
  item: string;
  state: boolean;
  id: number;
}

export interface ArticleDetailProps {
  id: number;
  title: string;
  subTitle?: string;
  date: string;
  content?: string;
  category?: CategoryProps[];
}

export interface ArticleDetailState {
  articleDetail: ArticleDetailProps;
}
