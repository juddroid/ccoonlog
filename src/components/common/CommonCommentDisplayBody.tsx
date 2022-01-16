import { RecoilState } from 'recoil';
import { Comment as S } from '../../styles/styles';
import CommonCommentEdit from './CommonCommentEdit';
import CommonCommentDisplayContent from './CommonCommentDisplayContent';

const CommonCommentDisplayBody = ({
  comment,
  recoilValueState,
  id,
  editID,
}: {
  comment: string;
  id: string;
  editID: string;
  recoilValueState: RecoilState<string>;
}) => {
  return (
    <S.CommentDisplayBody>
      {editID === id ? (
        <CommonCommentEdit {...{ comment, recoilValueState }} />
      ) : (
        <CommonCommentDisplayContent {...{ comment }} />
      )}
    </S.CommentDisplayBody>
  );
};

export default CommonCommentDisplayBody;
