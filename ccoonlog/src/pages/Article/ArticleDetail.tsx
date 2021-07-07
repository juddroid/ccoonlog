import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import firebase from '../../firebase';
import { ArticleDetailProps, ArticleLocationState } from '../../types/types';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleDetailViewer from './ArticleDetailViewer';

const ArticleDetail = () => {
  const [articleDetail, setArticleDetail] =
    useState<ArticleDetailProps | null>(null);

  const location = useLocation<ArticleLocationState>();

  const articleRef = firebase.database().ref('article');

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const currentArticle = article[location.state.id];

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
