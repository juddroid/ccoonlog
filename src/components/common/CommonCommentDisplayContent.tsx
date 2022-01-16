import { Viewer } from '@toast-ui/react-editor';
import { Comment as S } from '../../styles/styles';

const CommonCommentDisplayContent = ({ comment }: { comment: string }) => {
  return (
    <S.CommentDisplayContent>
      <Viewer initialValue={comment} />
    </S.CommentDisplayContent>
  );
};

export default CommonCommentDisplayContent;
