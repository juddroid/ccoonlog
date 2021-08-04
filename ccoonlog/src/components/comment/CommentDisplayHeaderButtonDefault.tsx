import CommentEditCancelButton from './CommentEditCancelButton';
import CommentEditPawButton from './CommentEditPawButton';
import { useLocation } from 'react-router-dom';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { ArticleLocationState } from '../../types/types';
import firebase from '../../firebase';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  cocommentEditIDState,
  commentEditIDState,
  commentEditInputValueState,
  cocommentEditInputValueState,
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
  const cocommentEditInputValue = useRecoilValue(cocommentEditInputValueState);

  const callback = ccid ? setCocommentEditID : setCommentEditID;
  const id = ccid ? ccid : cid;
  const handleClickCommentEditCancelButton = () => callback(null);
  const handleClickCommentEditPawButton = () => {
    const articleID = location.state.id;
    const uid = getLocalStorageData(LOCAL.USER);
    const email = uid?.email?.split('@')[0] || null;
    const name = uid.displayName || email;
    const commentPath = ccid
      ? `cocomment/${cid}/${ccid}`
      : `comment/${articleID}/${cid}`;
    const commentRef = firebase.database().ref(commentPath);
    const updateComment = {
      cid: cid,
      uid: uid.uid,
      name: name,
      date: date,
      comment: commentEditInputValue,
      userImageURL: uid.photoURL,
      updateTime: `${new Date()}`,
    };
    const updateCocomment = {
      ccid: ccid,
      cid: cid,
      uid: uid.uid,
      name: name,
      date: date,
      comment: cocommentEditInputValue,
      userImageURL: uid.photoURL,
      updateTime: `${new Date()}`,
    };
    const update = ccid ? updateCocomment : updateComment;
    commentRef.update(update);
    callback(null);
  };

  return (
    <>
      <CommentEditCancelButton onClick={handleClickCommentEditCancelButton} />
      <CommentEditPawButton id={id} onClick={handleClickCommentEditPawButton} />
    </>
  );
};

export default CommentDisplayHeaderButtonDefault;
