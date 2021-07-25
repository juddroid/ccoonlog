import React, { useRef, useEffect } from 'react';
import { Post as S } from '../styles/styles';
import { useHistory } from 'react-router-dom';
import { isAuth } from '../utils/utils';
import PostTitle from './Post/PostTitle';
import PostSubTitle from './Post/PostSubTitle';
import PostButton from './Post/PostButton';
import PostCategory from './Post/PostCategory';
import PostEditor from './Post/PostEditor';

const Post = () => {
  const history = useHistory();
  const editorRef: React.MutableRefObject<any> = useRef<any>();

  useEffect(() => {
    const auth = isAuth();
    if (!auth) {
      console.log('권한이 없어용');
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('post');

  return (
    <S.Post>
      <PostTitle />
      <PostSubTitle />
      <PostCategory />
      <PostEditor {...{ editorRef }} />
      <PostButton {...{ editorRef }} />
    </S.Post>
  );
};

export default Post;
