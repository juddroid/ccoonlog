import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import firebase from '../../firebase';
import {
  commentEditIDState,
  commentEditInputValueState,
} from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';
import { ArticleLocationState } from '../../types/types';
import { getInfoDate, getLocalStorageData, isAuth } from '../../utils/utils';
import CommentDeleteButton from './CommentDeleteButton';
import CommentEditButton from './CommentEditButton';
import CommentEditCancelButton from './CommentEditCancelButton';
import CommentEditPawButton from './CommentEditPawButton';
import { LOCAL_STORAGE as LOCAL } from '../../const';

const CommentDisplayHeader = ({
  date,
  cid,
  name,
  uid,
}: {
  date: string;
  cid: string;
  name: string;
  uid: string;
}) => {
  const infoDate = getInfoDate(date);
  const location = useLocation<ArticleLocationState>();
  const userAuth = isAuth(uid);
  const [commentEditID, setCommentEditID] = useRecoilState(commentEditIDState);
  const commentEditInputValue = useRecoilValue(commentEditInputValueState);

  const handleClickCommentDeleteButton = () => {
    const articleID = location.state.id;
    const deleteRef = firebase.database().ref(`comment/${articleID}/${cid}`);

    deleteRef
      .remove()
      .then(() => console.log('Remove succeeded.'))
      .catch((error) => console.log('Remove failed: ' + error.message));
  };

  const handleClickCommentEditButton = (e: React.MouseEvent) =>
    setCommentEditID(e.currentTarget.id);

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
    <S.CommentDisplayHeader>
      <S.CommentDisplayHeaderInfoBox>
        <S.CommentDisplayHeaderInfoName>{name}</S.CommentDisplayHeaderInfoName>
        <S.CommentDisplayHeaderInfoDate>
          {infoDate}
        </S.CommentDisplayHeaderInfoDate>
      </S.CommentDisplayHeaderInfoBox>
      {userAuth && (
        <S.CommentDisplayHeaderButtonBox>
          {commentEditID === cid ? (
            <>
              <CommentEditCancelButton
                onClick={handleClickCommentEditCancelButton}
              />
              <CommentEditPawButton
                id={cid}
                onClick={handleClickCommentEditPawButton}
              />
            </>
          ) : (
            <>
              <CommentEditButton
                id={cid}
                onClick={handleClickCommentEditButton}
              />
              <CommentDeleteButton onClick={handleClickCommentDeleteButton} />
            </>
          )}
        </S.CommentDisplayHeaderButtonBox>
      )}
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
