import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Comment as S } from '../../styles/styles';
import { ArticleLocationState, CommentProps } from '../../types/types';
import { isAuth } from '../../utils/utils';
import CommentCancelButton from './CommentCancelButton';
import CommentDisplay from './CommentDisplay';
import CommentInput from './CommentInput';
import CommentPawButton from './CommentPawButton';
import CommentProfileImageBox from './CommentProfileImageBox';
import { v4 as uuidv4 } from 'uuid';

const Comment = () => {
  const [commentList, setCommentList] = useState<CommentProps[] | null>(null);
  const auth = isAuth();
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
  console.log(commentList);
  return (
    <S.Comment>
      <S.CommentDisplayBox>
        {[...commentList]
          .sort((a: any, b: any) => +new Date(a.date) - +new Date(b.date))
          .map((articleComment) => (
            <S.CommentDisplayUpperBox key={uuidv4()}>
              <CommentProfileImageBox />
              <CommentDisplay {...{ articleComment }} />
            </S.CommentDisplayUpperBox>
          ))}
        <S.CommentDisplayBottomBox>
          <CommentInput />
        </S.CommentDisplayBottomBox>
      </S.CommentDisplayBox>
      <S.CommentButtonBox>
        <CommentCancelButton />
        <CommentPawButton />
      </S.CommentButtonBox>
    </S.Comment>
  );
};

export default Comment;
