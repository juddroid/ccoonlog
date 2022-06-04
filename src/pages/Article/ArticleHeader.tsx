import { Link } from 'react-router-dom';
import Info from '../../components/common/Info/Info';
import { Common as S } from '../../styles/CommonStyles';
import { ArticleProps } from '../../types/types';

const ArticleHeader = ({ article }: { article: ArticleProps }) => {
  const { id, date, title, content } = article;

  return (
    <S.Header>
      <Link
        to={{
          pathname: `pages/post/${title}`,
          state: {
            id: id,
            title: title,
          },
        }}
      >
        <h3>{title}</h3>
      </Link>

      <Info {...{ date, content }} />
    </S.Header>
  );
};

export default ArticleHeader;
