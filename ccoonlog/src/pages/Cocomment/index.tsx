import { Cocomment as S } from '../../styles/styles';
import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { CommentProps } from '../../types/types';
import CocommentDisplayUpperBox from './CocommentDisplayUpperBox';
import CocommentDisplayBottomBox from './CocommentDisplayBottomBox';
import { useRecoilValue } from 'recoil';
import { cocommentEditIDState } from '../../store/Recoil';

const Cocomment = ({ cid }: { cid: string }) => {
  const [cocommentList, setCocommentList] =
    useState<CommentProps[] | null>(null);
  const cocommentEditID = useRecoilValue(cocommentEditIDState);

  useEffect(() => {
    const commentRef = firebase.database().ref(`cocomment/${cid}`);
    commentRef.on('value', (snapshot) => {
      const cocomment = snapshot.val();
      const cocomments = [];

      for (const id in cocomment) {
        cocomments.push(cocomment[id]);
      }

      cocomments && setCocommentList(cocomments);
    });

    return () => commentRef.off();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!cocommentList) return null;

  return (
    <>
      <S.Cocomment>
        <S.CocommentDisplayBox>
          <CocommentDisplayUpperBox {...{ cocommentList }} />
          {cocommentEditID === cid && (
            <CocommentDisplayBottomBox {...{ cid }} />
          )}
        </S.CocommentDisplayBox>
      </S.Cocomment>
    </>
  );
};

export default Cocomment;
