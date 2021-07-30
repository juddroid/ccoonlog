import CommentEditCancelButton from './CommentEditCancelButton';
import CommentEditPawButton from './CommentEditPawButton';
import { useLocation } from 'react-router-dom';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { ArticleLocationState } from '../../types/types';
import firebase from 'firebase';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  commentEditIDState,
  commentEditInputValueState,
} from '../../store/Recoil';
import { getLocalStorageData } from '../../utils/utils';

const CommentDisplayHeaderButtonDefault = ({
  cid,
  date,
}: {
  cid: string;
  date: string;
}) => {
  const location = useLocation<ArticleLocationState>();
  const [commentEditID, setCommentEditID] = useRecoilState(commentEditIDState);
  const commentEditInputValue = useRecoilValue(commentEditInputValueState);

  const handleClickCommentEditCancelButton = () => setCommentEditID(null);
  const handleClickCommentEditPawButton = () => {
    const articleID = location.state.id;
    const uid = getLocalStorageData(LOCAL.USER);
    const email = uid?.email.split('@')[0] || null;
    const name = uid.displayName || email;
    const commentRef = firebase.database().ref(`comment/${articleID}/${cid}`);
    const updateComment = {
      cid: cid,
      uid: uid.uid,
      name: name,
      date: date,
      comment: commentEditInputValue,
      userImageURL: uid.photoURL,
      updateTime: `${new Date()}`,
    };
    commentRef.update(updateComment);
    setCommentEditID(null);
  };

  return (
    <>
      <CommentEditCancelButton onClick={handleClickCommentEditCancelButton} />
      <CommentEditPawButton
        id={cid}
        onClick={handleClickCommentEditPawButton}
      />
    </>
  );
};

export default CommentDisplayHeaderButtonDefault;