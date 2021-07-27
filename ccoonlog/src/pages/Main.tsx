import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';
import { Main as S } from '../styles/styles';
import { ArticleProps } from '../types/types';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { articleDataForRender, articleDataState } from '../store/Recoil';
import { TEXT } from '../const';

const Main = () => {
  const setArticleData =
    useSetRecoilState<ArticleProps[] | null>(articleDataState);
  const articleDataRender = useRecoilValue(articleDataForRender);

  useEffect(() => {
    const articleRef = firebase.database().ref('article');
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const articleList = [];

      for (let id in article) {
        articleList.push(article[id]);
      }

      setArticleData(articleList);
    });

    return () => articleRef.off();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!articleDataRender) return null;
  if (articleDataRender.length === 0) return <S.Error>{TEXT.NO_DATA}</S.Error>;

  return (
    <S.Main>
      {[...articleDataRender]
        .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))
        // .reverse()
        .map((article) => (
          <Article article={article} key={uuidv4()} />
        ))}
    </S.Main>
  );
};

export default Main;
