import firebase from '../../firebase';
import { useRecoilValue } from 'recoil';
import { commentInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { useLocation } from 'react-router-dom';
import { ArticleDetailProps } from '../../types/types';
import { LOCAL_STORAGE as LOCAL } from '../../const';

const CommentPawButton = () => {
  const commentInputValue = useRecoilValue(commentInputValueState);
  const location = useLocation<ArticleDetailProps>();
  const user = localStorage.getItem(LOCAL.USER);
  const uid = user && JSON.parse(user);

  const handleClickPawButton = () => {
    const articleID = location.state.id;
    const commentRef = firebase
      .database()
      .ref(`comment/${articleID}/${uid.uid}`);
    const updateComment = {
      date: `${new Date()}`,
      comment: commentInputValue,
    };
    commentRef.set(updateComment);
  };

  return (
    <S.CommentPawButton onClick={handleClickPawButton}>Paw</S.CommentPawButton>
  );
};

export default CommentPawButton;
