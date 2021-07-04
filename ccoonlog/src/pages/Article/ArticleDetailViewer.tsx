import { Viewer } from '@toast-ui/react-editor';
import { Article as S } from '../../styles/styles';
import { ArticleDetailProps } from '../../types/types';

const ArticleDetailViewer = ({
  articleDetail,
}: {
  articleDetail: ArticleDetailProps;
}) => {
  return (
    <S.ArticleDetailViewer>
      <Viewer initialValue={articleDetail.content} />
    </S.ArticleDetailViewer>
  );
};

export default ArticleDetailViewer;
