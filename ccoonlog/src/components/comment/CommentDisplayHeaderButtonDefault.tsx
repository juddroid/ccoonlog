import CommentEditCancelButton from './CommentEditCancelButton';
import CommentEditPawButton from './CommentEditPawButton';
import { useLocation } from 'react-router-dom';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { ArticleLocationState } from '../../types/types';
import firebase from 'firebase';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  cocommentEditIDState,
  commentEditIDState,
  commentEditInputValueState,
} from '../../store/Recoil';
import { getLocalStorageData } from '../../utils/utils';

const CommentDisplayHeaderButtonDefault = ({
  cid,
  date,
  ccid,
}: {
  cid: string;
  date: string;
  ccid?: string;
}) => {
  const location = useLocation<ArticleLocationState>();
  const setCommentEditID = useSetRecoilState(commentEditIDState);
  const setCocommentEditID = useSetRecoilState(cocommentEditIDState);
  const commentEditInputValue = useRecoilValue(commentEditInputValueState);

  const callback = ccid ? setCocommentEditID : setCommentEditID;

  const handleClickCommentEditCancelButton = () => callback(null);
  const handleClickCommentEditPawButton = () => {
    const articleID = location.state.id;
    const uid = getLocalStorageData(LOCAL.USER);
    const email = uid?.email?.split('@')[0] || null;
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
