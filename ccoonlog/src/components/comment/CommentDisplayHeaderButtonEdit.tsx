import firebase from 'firebase';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { commentEditIDState } from '../../store/Recoil';
import { ArticleLocationState } from '../../types/types';
import CommentDeleteButton from './CommentDeleteButton';
import CommentEditButton from './CommentEditButton';

const CommentDisplayHeaderButtonEdit = ({ cid }: { cid: string }) => {
  const location = useLocation<ArticleLocationState>();
  const [commentEditID, setCommentEditID] = useRecoilState(commentEditIDState);

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
  return (
    <>
      <CommentEditButton id={cid} onClick={handleClickCommentEditButton} />
      <CommentDeleteButton onClick={handleClickCommentDeleteButton} />
    </>
  );
};

export default CommentDisplayHeaderButtonEdit;
