import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';
import { ArticleDetailProps, ArticleLocationState } from '../../types/types';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleDetailViewer from './ArticleDetailViewer';
import { Article as S } from '../../styles/styles';
import ArticleDeleteButton from './ArticleDeleteButton';
import ArticleEditButton from './ArticleEditButton';
import { isAuth } from '../../utils/utils';

const ArticleDetail = () => {
  const [articleDetail, setArticleDetail] =
    useState<ArticleDetailProps | null>(null);
  const auth = isAuth();
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
  console.log(auth);
  return (
    <S.ArticleDetail>
      <ArticleDetailHeader {...{ articleDetail }} />
      <ArticleDetailViewer {...{ articleDetail }} />
      {auth && (
        <S.ArticleButtonBox>
          <ArticleEditButton {...{ articleDetail }} />
          <ArticleDeleteButton articleID={location.state.id} />
        </S.ArticleButtonBox>
      )}
    </S.ArticleDetail>
  );
};

export default ArticleDetail;
