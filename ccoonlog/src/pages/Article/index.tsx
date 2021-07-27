import ArticleHeader from './ArticleHeader';
import { Article as S } from '../../styles/styles';
import { ArticleProps } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';

const Article = ({ article }: { article: ArticleProps }) => {
  return (
    <S.Article>
      <ArticleHeader {...{ article }} />
      <p>{article.subTitle}</p>
      <>
        {article.category?.map((category) => (
          <S.ArticleDetailCategory key={uuidv4()}>
            {category.item}
          </S.ArticleDetailCategory>
        ))}
      </>
    </S.Article>
  );
};

export default Article;
