import { Cocomment as S } from '../../styles/styles';
import CocommentInput from '../../components/cocomment/CocommentInput';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CommentProps, ArticleLocationState } from '../../types/types';
import CocommentDisplayUpperBox from './CocommentDisplayUpperBox';
import CocommentDisplayBottomBox from './CocommentDisplayBottomBox';
import CocommentCancelButton from '../../components/cocomment/CocommentCancelButton';
import CocommentPawButton from '../../components/cocomment/CocommentPawButton';

const Cocomment = ({ cid }: { cid: string }) => {
  const [commentList, setCommentList] = useState<CommentProps[] | null>(null);
  const location = useLocation<ArticleLocationState>();

  // useEffect(() => {
  //   const articleID = location.state.id;
  //   const commentRef = firebase.database().ref(`cocomment/${cid}`);
  //   commentRef.on('value', (snapshot) => {
  //     const comment = snapshot.val();
  //     const comments = [];

  //     for (const id in comment) {
  //       comments.push(comment[id]);
  //     }

  //     comments && setCommentList(comments);
  //   });

  //   return () => commentRef.off();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (!commentList) return null;

  return (
    <>
      <S.Cocomment>
        <S.CocommentDisplayBox>
          <CocommentDisplayUpperBox />
          <CocommentDisplayBottomBox />
        </S.CocommentDisplayBox>
        <S.CocommentButtonBox>
          <CocommentCancelButton />
          <CocommentPawButton {...{ cid }} />
        </S.CocommentButtonBox>
      </S.Cocomment>
    </>
  );
};

export default Cocomment;
