import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';
import { ArticleDetailProps, ArticleLocationState } from '../../types/types';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleDetailViewer from './ArticleDetailViewer';
import { Article as S } from '../../styles/styles';
import ArticleDeleteButton from './ArticleDeleteButton';
import ArticleEditButton from './ArticleEditButton';

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
    <S.ArticleDetail>
      <ArticleDetailHeader {...{ articleDetail }} />
      <ArticleDetailViewer {...{ articleDetail }} />
      <S.ArticleButtonBox>
        <ArticleEditButton articleID={location.state.id} />
        <ArticleDeleteButton articleID={location.state.id} />
      </S.ArticleButtonBox>
    </S.ArticleDetail>
  );
};

export default ArticleDetail;
