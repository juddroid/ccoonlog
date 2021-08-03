import { Cocomment as S } from '../../styles/styles';
import { v4 as uuidv4 } from 'uuid';

const CocommentDisplayUpperBox = () => {
  return (
    <>
      {/* {[...commentList]
        .sort((a: any, b: any) => +new Date(a.date) - +new Date(b.date))
        .map((articleComment) => (
          <S.CocommentDisplayUpperBox key={uuidv4()}>
            <CommentDisplayUpperBoxWrapper {...{ articleComment }} />
          </S.CocommentDisplayUpperBox>
        ))} */}

      <div>upper</div>
    </>
  );
};

export default CocommentDisplayUpperBox;
