import firebase from '../../firebase';
import { useLocation } from 'react-router-dom';
import { SetterOrUpdater } from 'recoil';
import { ArticleLocationState } from '../../types/types';
import CommentDeleteButton from './CommentDeleteButton';
import CommentEditButton from './CommentEditButton';

const CommentDisplayHeaderButtonEdit = ({
  id,
  callback,
  cid,
  ccid,
}: {
  id: string;
  callback: SetterOrUpdater<string>;
  cid: string;
  ccid?: string;
}) => {
  const location = useLocation<ArticleLocationState>();

  const handleClickCommentDeleteButton = () => {
    const articleID = location.state.id;
    const deletePath = ccid ? `cocomment/${cid}/${ccid}` : `comment/${articleID}/${id}`;
    const deleteRef = firebase.database().ref(deletePath);

    deleteRef
      .remove()
      .then(() => console.log('Remove succeeded.'))
      .catch((error) => console.log('Remove failed: ' + error.message));
  };

  const handleClickCommentEditButton = (e: React.MouseEvent) => callback(e.currentTarget.id);

  return (
    <>
      <CommentEditButton id={id} onClick={handleClickCommentEditButton} />
      <CommentDeleteButton onClick={handleClickCommentDeleteButton} />
    </>
  );
};

export default CommentDisplayHeaderButtonEdit;
