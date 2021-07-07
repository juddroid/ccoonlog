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
      <h3>{articleDetail.subTitle}</h3>
    </S.ArticleDetailHeader>
  );
};

export default ArticleDetailHeader;
