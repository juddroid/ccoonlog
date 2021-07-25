import { Post as S } from '../../styles/styles';
import { NAME } from '../../const';
import { useRecoilState } from 'recoil';
import { postTitleState } from '../../store/Recoil';
import { useEffect } from 'react';

const PostTitle = () => {
  const [title, setTitle] = useRecoilState(postTitleState);

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle('');
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.TITLE}</S.PostTitle>
      <S.PostInput
        placeholder={NAME.TITLE}
        value={title}
        onChange={handleChangeInputTitle}
      />
    </S.PostBox>
  );
};

export default PostTitle;
