import Info from '../../components/common/Info/Info';
import { ArticleDetailProps } from '../../types/types';
import { Article as S } from '../../styles/styles';

const ArticleDetailHeader = ({
  articleDetail,
}: {
  articleDetail: ArticleDetailProps;
}) => {
  return (
    <S.ArticleDetailHeader>
      <h2>{articleDetail.title}</h2>
      <Info date={articleDetail.date} />
    </S.ArticleDetailHeader>
  );
};

export default ArticleDetailHeader;
