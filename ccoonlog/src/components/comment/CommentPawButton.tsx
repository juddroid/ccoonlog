import firebase from '../../firebase';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentInputValueState, isLoggedInState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { useLocation } from 'react-router-dom';
import { ArticleDetailProps } from '../../types/types';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { v4 as uuidv4 } from 'uuid';

const CommentPawButton = () => {
  const [commentInputValue, setCommentInputValue] = useRecoilState(
    commentInputValueState
  );
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const location = useLocation<ArticleDetailProps>();
  const user = localStorage.getItem(LOCAL.USER);
  const uid = user && JSON.parse(user);
  const email = uid?.email.split('@')[0] || null;

  const handleClickPawButton = () => {
    if (!isLoggedIn) return alert('로그인이 필요해요');

    const cid = uuidv4();
    const articleID = location.state.id;
    const name = uid.displayName || email;
    const commentRef = firebase.database().ref(`comment/${articleID}/${cid}`);
    const updateComment = {
      cid: cid,
      uid: uid.uid,
      name: name,
      date: `${new Date()}`,
      comment: commentInputValue,
      userImageURL: uid.photoURL,
    };
    commentRef.set(updateComment);

    setCommentInputValue('');
  };

  return (
    <S.CommentPawButton onClick={handleClickPawButton}>Paw</S.CommentPawButton>
  );
};

export default CommentPawButton;
