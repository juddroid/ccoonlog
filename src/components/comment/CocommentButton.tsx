import React from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';
import { cocommentEditIDState } from '../../store/Recoil';
import { Comment as S } from '../../styles/styles';

const CocommentButton = ({ cid }: { cid: string }) => {
  const setCocommentEditID = useSetRecoilState(cocommentEditIDState);

  const handleClickCocommentButton = (e: React.MouseEvent) =>
    setCocommentEditID((prev) =>
      prev === e.currentTarget.id ? '' : e.currentTarget.id
    );

  return (
    <S.CommentHeaderButton id={cid} onClick={handleClickCocommentButton}>
      <IoReturnUpBackOutline />
    </S.CommentHeaderButton>
  );
};

export default CocommentButton;
