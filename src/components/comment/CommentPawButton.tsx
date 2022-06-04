import firebase from '../../firebase';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentInputValueState, isLoggedInState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { useLocation } from 'react-router-dom';
import { ArticleDetailProps } from '../../types/types';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { v4 as uuidv4 } from 'uuid';
import { getLocalStorageData } from '../../utils/utils';
import { useEffect, useState } from 'react';

const CommentPawButton = () => {
  const [pawButtonState, setPawButtonState] = useState(false);
  const [commentInputValue, setCommentInputValue] = useRecoilState(
    commentInputValueState
  );
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const location = useLocation<ArticleDetailProps>();
  const user = getLocalStorageData(LOCAL.USER);
  const email = user?.email?.split('@')[0] || null;

  const handleClickPawButton = () => {
    if (!isLoggedIn) return alert('로그인이 필요해요');

    const cid = uuidv4();
    const articleID = location.state.id;
    const name = user.displayName || email;
    const commentRef = firebase.database().ref(`comment/${articleID}/${cid}`);
    const updateComment = {
      cid: cid,
      uid: user.uid,
      name: name,
      date: `${new Date()}`,
      comment: commentInputValue,
      userImageURL: user.photoURL,
    };
    commentRef.set(updateComment);

    setCommentInputValue('');
  };

  useEffect(() => {
    commentInputValue !== ''
      ? setPawButtonState(false)
      : setPawButtonState(true);
  }, [commentInputValue]);

  return (
    <S.CommentPawButton
      onClick={handleClickPawButton}
      disabled={pawButtonState}
    >
      Paw
    </S.CommentPawButton>
  );
};

export default CommentPawButton;
