import React, { useRef } from 'react';
import { Post as S, Article as A } from '../styles/styles';
import EditTitle from './Edit/EditTitle';
import EditSubTitle from './Edit/EditSubTitle';
import EditEditor from './Edit/EditEditor';
import EditButton from './Edit/EditButton';
import EditCancelButton from './Edit/EditCancelButton';
import EditCategory from './Edit/EditCategory';

const Edit = () => {
  const editorRef: React.MutableRefObject<any> = useRef<any>();

  return (
    <S.Post>
      <EditTitle />
      <EditSubTitle />
      <EditCategory />
      <EditEditor {...{ editorRef }} />

      <A.ArticleButtonBox>
        <EditButton {...{ editorRef }} />
        <EditCancelButton />
      </A.ArticleButtonBox>
    </S.Post>
  );
};

export default Edit;
