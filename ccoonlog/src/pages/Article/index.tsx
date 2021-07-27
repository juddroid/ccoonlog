import ArticleHeader from './ArticleHeader';
import { Article as S } from '../../styles/styles';
import { ArticleProps } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';
import { useSetRecoilState } from 'recoil';
import { categoryIDState } from '../../store/Recoil';
import { handleClickFilteringButton } from '../../utils/utils';

const Article = ({ article }: { article: ArticleProps }) => {
  const setCategoryID = useSetRecoilState(categoryIDState);

  return (
    <S.Article>
      <ArticleHeader {...{ article }} />
      <p>{article.subTitle}</p>
      <S.ArticleCategoryBox>
        {article.category?.map((category) => (
          <S.ArticleDetailCategory
            id={`${category.id}`}
            key={uuidv4()}
            onClick={(e) => handleClickFilteringButton(e, setCategoryID)}
          >
            {category.item}
          </S.ArticleDetailCategory>
        ))}
      </S.ArticleCategoryBox>
    </S.Article>
  );
};

export default Article;
