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

export interface CommentProps {
  date: string;
  comment: string;
  uid: string;
  cid: string;
  name: string;
  userImageURL?: string;
  updateTime?: string;
}
