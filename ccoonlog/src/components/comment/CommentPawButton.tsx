import firebase from '../../firebase';
import { useRecoilState } from 'recoil';
import { commentInputValueState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { useLocation } from 'react-router-dom';
import { ArticleDetailProps } from '../../types/types';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { v4 as uuidv4 } from 'uuid';

const CommentPawButton = () => {
  const [commentInputValue, setCommentInputValue] = useRecoilState(
    commentInputValueState
  );
  const location = useLocation<ArticleDetailProps>();
  const user = localStorage.getItem(LOCAL.USER);
  const uid = user && JSON.parse(user);

  const handleClickPawButton = () => {
    const cid = uuidv4();
    const articleID = location.state.id;
    const commentRef = firebase.database().ref(`comment/${articleID}/${cid}`);
    const updateComment = {
      uid: uid.uid,
      date: `${new Date()}`,
      comment: commentInputValue,
    };
    commentRef.set(updateComment);

    setCommentInputValue('');
  };

  return (
    <S.CommentPawButton onClick={handleClickPawButton}>Paw</S.CommentPawButton>
  );
};

export default CommentPawButton;
