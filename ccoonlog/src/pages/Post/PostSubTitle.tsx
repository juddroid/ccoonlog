import { Post as S } from '../../styles/styles';
import { NAME } from '../../const';
import { useRecoilState } from 'recoil';
import { postSubTitleState } from '../../store/Recoil';
import { useEffect } from 'react';

const PostSubTitle = () => {
  const [subTitle, setSubTitle] = useRecoilState(postSubTitleState);

  const handleChangeInputsubTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubTitle(e.target.value);
  };

  useEffect(() => {
    setSubTitle('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.PostBox>
      <S.PostTitle>{NAME.SUB_TITLE}</S.PostTitle>
      <S.PostInput
        placeholder={NAME.SUB_TITLE}
        value={subTitle}
        onChange={handleChangeInputsubTitle}
      />
    </S.PostBox>
  );
};

export default PostSubTitle;
