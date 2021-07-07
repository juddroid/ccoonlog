import { Link } from 'react-router-dom';
import Info from '../../components/common/Info/Info';
import { Common as S } from '../../styles/CommonStyles';
import { ArticleProps } from '../../types/types';

const ArticleHeader = ({ article }: { article: ArticleProps }) => {
  const fileName = article.title;
  return (
    <S.Header>
      <Link
        to={{
          pathname: `pages/post/${fileName}`,
          state: {
            id: article.id,
          },
        }}
      >
        <h3>{article.title}</h3>
      </Link>

      <Info date={article.date} />
    </S.Header>
  );
};

export default ArticleHeader;
