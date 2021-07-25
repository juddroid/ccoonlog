import React, { useRef, useState, useEffect } from 'react';
import firebase from '../firebase';
// import chart from '@toast-ui/editor-plugin-chart';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
// import uml from '@toast-ui/editor-plugin-uml';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-chart/dist/tui-chart.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { Button } from '../styles/CommonStyles';
import { v1 as uuidv1 } from 'uuid';
import { Post as S } from '../styles/styles';
import { NAME } from '../const';
import { useHistory, useLocation } from 'react-router-dom';
import { isAuth } from '../utils/utils';

const Post = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  // const location = useLocation();
  const history = useHistory();
  const editorRef: React.MutableRefObject<any> = useRef<any>();

  const handleClickPostButton = () => {
    const id = uuidv1();
    const articleRef = firebase.database().ref('article/' + id);
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();

    const newArticle = {
      id: id,
      date: `${new Date()}`,
      title: title,
      subTitle: subTitle,
      content: markdownContent,
    };
    articleRef.set(newArticle);

    // 썼던 글을 바로 볼 수 있도록 바꿔야함
    history.push(`/`);
  };

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeInputsubTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSubTitle(e.target.value);
  };

  useEffect(() => {
    const auth = isAuth();
    if (!auth) {
      console.log('권한이 없어용');
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Post>
      <S.PostBox>
        <S.PostTitle>{NAME.TITLE}</S.PostTitle>
        <S.PostInput
          placeholder={NAME.TITLE}
          value={title}
          onChange={handleChangeInputTitle}
        />
      </S.PostBox>
      <S.PostBox>
        <S.PostTitle>{NAME.SUB_TITLE}</S.PostTitle>
        <S.PostInput
          placeholder={NAME.SUB_TITLE}
          value={subTitle}
          onChange={handleChangeInputsubTitle}
        />
      </S.PostBox>

      <S.Editor>
        <Editor
          initialValue=""
          previewStyle="vertical"
          height="800px"
          initialEditType="markdown"
          useCommandShortcut={true}
          plugins={
            [
              // chart,
              // codeSyntaxHighlight,
              // colorSyntax,
              // tableMergedCell,
              // uml,
            ]
          }
          ref={editorRef}
        />
      </S.Editor>
      <Button.AsideButton onClick={handleClickPostButton}>
        {NAME.POST}
      </Button.AsideButton>
    </S.Post>
  );
};

export default Post;
