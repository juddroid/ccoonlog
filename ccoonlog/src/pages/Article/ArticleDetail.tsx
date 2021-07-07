import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';
import { ArticleDetailProps, ArticleLocationState } from '../../types/types';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleDetailViewer from './ArticleDetailViewer';
import { Article as S } from '../../styles/styles';
import { Button } from '../../styles/CommonStyles';
import { NAME } from '../../const';

const ArticleDetail = () => {
  const [articleDetail, setArticleDetail] =
    useState<ArticleDetailProps | null>(null);

  const location = useLocation<ArticleLocationState>();

  const articleRef = firebase.database().ref('article');

  const handleClickDeleteButton = () => {
    const deleteRef = firebase.database().ref('article/' + location.state.id);

    deleteRef
      .remove()
      .then(function () {
        console.log('Remove succeeded.');
        window.history.back();
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });
  };

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
      <Button.AsideButton onClick={handleClickDeleteButton}>
        {NAME.DELETE}
      </Button.AsideButton>
    </S.ArticleDetail>
  );
};

export default ArticleDetail;
