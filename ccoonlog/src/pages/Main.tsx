import { useEffect, useState } from 'react';
import firebase from '../firebase';
import Article from './Article';
import { v4 as uuidv4 } from 'uuid';
import { Main as S } from '../styles/styles';
import { ArticleProps } from '../types/types';

const Main = () => {
  const [data, setData] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const articleRef = firebase.database().ref('article');
    articleRef.on('value', (snapshot) => {
      const article = snapshot.val();
      const articleList = [];

      for (let id in article) {
        articleList.push(article[id]);
      }

      setData(articleList);
    });

    return () => articleRef.off();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  return (
    <S.Main>
      {[...data]
        .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date))
        // .reverse()
        .map((article) => (
          <Article article={article} key={uuidv4()} />
        ))}
    </S.Main>
  );
};

export default Main;
