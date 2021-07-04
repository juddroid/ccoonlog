import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';
import { Main as S } from '../styles/styles';
import { useRecoilValue } from 'recoil';
import { articleData } from '../store/Recoil';
import { ArticleProps } from '../types/types';

const Main = () => {
  // const articleRecoil = useRecoilValue(articleData);
  const [data, setData] = useState<ArticleProps[]>([]);

  const articleRef = firebase.database().ref('article');

  useEffect(() => {
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      // const articleList = [];
      const articleList = [
        {
          id: 1,
          title: 'First',
          subTitle: 'First subTitle',
          date: 'Sun Jul 04 2021 20:53:54 GMT+0900',
        },
        {
          id: 2,
          title: 'Second',
          subTitle: 'Second subTitle',
          date: 'Sun Jul 03 2021 20:53:54 GMT+0900',
        },
      ];

      for (let id in article) {
        articleList.push({ ...article[id], id });
      }

      setData(articleList);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;
  return (
    <S.Main>
      {[...data].reverse().map((article) => (
        <Article article={article} key={uuidv4()} />
      ))}
    </S.Main>
  );
};

export default Main;
