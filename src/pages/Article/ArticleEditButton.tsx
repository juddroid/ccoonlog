import { NAME } from '../../const';
import { Button } from '../../styles/CommonStyles';
import { Link } from 'react-router-dom';
import { ArticleDetailProps } from '../../types/types';

const ArticleEditButton = ({
  articleDetail,
}: {
  articleDetail: ArticleDetailProps;
}) => {
  return (
    <Link
      to={{
        pathname: `edit/${articleDetail.title}`,
        state: {
          articleDetail: articleDetail,
        },
      }}
    >
      <Button.MenuButton>{NAME.EDIT}</Button.MenuButton>
    </Link>
  );
};

export default ArticleEditButton;
