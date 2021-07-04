import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase';
import { ArticleDetailProps, ArticleLocationState } from '../../types/types';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleDetailViewer from './ArticleDetailViewer';

const ArticleDetail = () => {
  const [articleDetail, setArticleDetail] = useState<ArticleDetailProps>({
    id: 0,
    title: '',
    date: '',
  });

  const location = useLocation<ArticleLocationState>();
  console.log(location);
  const articleRef = firebase.database().ref('article');

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      // const currentArticle = article[location.state.id];
      const currentArticle = {
        id: 1,
        title: 'Test',
        date: 'Mon Jul 05 2021 02:26:31 GMT+0900',
      };

      setArticleDetail(currentArticle);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!articleDetail) return null;

  return (
    <DetailArticleStyle>
      <ArticleDetailHeader {...{ articleDetail }} />
      <ArticleDetailViewer {...{ articleDetail }} />
    </DetailArticleStyle>
  );
};

export default ArticleDetail;

const DetailArticleStyle = styled.div`
  margin-top: 3.5rem;
`;
