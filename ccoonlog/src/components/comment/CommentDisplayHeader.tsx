import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';
import { Comment as S } from '../../styles/styles';
import { ArticleLocationState } from '../../types/types';
import { getInfoDate } from '../../utils/utils';
import CommentDeleteButton from './CommentDeleteButton';
import CommentEditButton from './CommentEditButton';

const CommentDisplayHeader = ({ date, cid }: { date: string; cid: string }) => {
  const infoDate = getInfoDate(date);
  const location = useLocation<ArticleLocationState>();

  const handleClickDeleteButton = () => {
    const articleID = location.state.id;
    const deleteRef = firebase.database().ref(`comment/${articleID}/${cid}`);

    deleteRef
      .remove()
      .then(() => console.log('Remove succeeded.'))
      .catch((error) => console.log('Remove failed: ' + error.message));
  };

  return (
    <S.CommentDisplayHeader>
      <S.CommentDisplayHeaderInfoBox>{infoDate}</S.CommentDisplayHeaderInfoBox>
      <S.CommentDisplayHeaderButtonBox>
        <CommentEditButton />
        <CommentDeleteButton onClick={handleClickDeleteButton} />
      </S.CommentDisplayHeaderButtonBox>
    </S.CommentDisplayHeader>
  );
};

export default CommentDisplayHeader;
