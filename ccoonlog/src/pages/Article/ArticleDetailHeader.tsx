import Info from '../../components/common/Info/Info';
import { ArticleDetailProps } from '../../types/types';
import { Article as S } from '../../styles/styles';
import { v4 as uuidv4 } from 'uuid';

const ArticleDetailHeader = ({
  articleDetail,
}: {
  articleDetail: ArticleDetailProps;
}) => {
  const { title, date, category, subTitle, content } = articleDetail;

  return (
    <S.ArticleDetailHeader>
      <h2>{title}</h2>
      <Info {...{ date, content }} />
      <S.ArticleDetailCategoryBox>
        {category?.map((category) => (
          <S.ArticleDetailCategory key={uuidv4()}>
            {category.item}
          </S.ArticleDetailCategory>
        ))}
      </S.ArticleDetailCategoryBox>
      <h3>{subTitle}</h3>
    </S.ArticleDetailHeader>
  );
};

export default ArticleDetailHeader;
