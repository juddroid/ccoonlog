import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Comment as S } from '../../styles/styles';
import { ArticleLocationState, CommentProps } from '../../types/types';
import CommentButtonBox from './CommentButtonBox';
import CommentDisplayBox from './CommentDisplayBox';

const Comment = () => {
  const [commentList, setCommentList] = useState<CommentProps[] | null>(null);
  const location = useLocation<ArticleLocationState>();

  useEffect(() => {
    const articleID = location.state.id;
    const commentRef = firebase.database().ref(`comment/${articleID}`);
    commentRef.on('value', (snapshot) => {
      const comment = snapshot.val();
      const comments = [];

      for (const id in comment) {
        comments.push(comment[id]);
      }

      comments && setCommentList(comments);
    });

    return () => commentRef.off();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!commentList) return null;

  return (
    <S.Comment>
      <CommentDisplayBox {...{ commentList }} />
      <CommentButtonBox />
    </S.Comment>
  );
};

export default Comment;
