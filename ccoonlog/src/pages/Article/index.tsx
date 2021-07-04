import ArticleHeader from './ArticleHeader';
import { Article as S } from '../../styles/styles';
import { ArticleProps } from '../../types/types';

const Article = ({ article }: { article: ArticleProps }) => {
  console.log(article);
  return (
    <S.Article>
      <ArticleHeader {...{ article }} />
      <p>{article.subTitle}</p>
    </S.Article>
  );
};

export default Article;
