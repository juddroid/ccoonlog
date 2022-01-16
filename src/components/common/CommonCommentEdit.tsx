import { RecoilState } from 'recoil';
import useCommentEdit from '../../hooks/useCommentEdit';

const CommonCommentEdit = ({
  comment,
  recoilValueState,
}: {
  comment: string;
  recoilValueState: RecoilState<string>;
}) => {
  const { renderCommentEdit } = useCommentEdit(comment, recoilValueState);

  return <>{renderCommentEdit()}</>;
};

export default CommonCommentEdit;
