import { Cocomment as S } from '../../styles/styles';
import { v4 as uuidv4 } from 'uuid';
import { CommentProps } from '../../types/types';
import CocommentDisplayUpperBoxWrapper from './CocommentDisplayUpperBoxWrapper';

const CocommentDisplayUpperBox = ({
  cocommentList,
}: {
  cocommentList: CommentProps[];
}) => {
  return (
    <>
      {[...cocommentList]
        .sort((a: any, b: any) => +new Date(a.date) - +new Date(b.date))
        .map((cocomment) => (
          <S.CocommentDisplayUpperBox key={uuidv4()}>
            <CocommentDisplayUpperBoxWrapper {...{ cocomment }} />
          </S.CocommentDisplayUpperBox>
        ))}
    </>
  );
};

export default CocommentDisplayUpperBox;
