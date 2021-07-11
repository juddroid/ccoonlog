import React, { useRef, useState } from 'react';
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
import { Post as S, Article as A } from '../styles/styles';
import { NAME } from '../const';
import { useLocation } from 'react-router-dom';
import { ArticleDetailState } from '../types/types';

const Edit = () => {
  const location = useLocation<ArticleDetailState>();

  const { title, subTitle, content, date } = location.state.articleDetail;

  const [editTitle, setEditTitle] = useState(title);
  const [editSubTitle, setEditSubTitle] = useState(subTitle);

  const editorRef: React.MutableRefObject<any> = useRef<any>();
  const articleID = location.state.articleDetail.id;
  const editRef = firebase.database().ref('article/' + articleID);

  const handleClickEditButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();

    const editArticle = {
      id: articleID,
      date: date,
      title: editTitle,
      subTitle: editSubTitle,
      content: markdownContent,
    };
    editRef.update(editArticle);
    window.history.back();
  };

  const handleClickCancelButton = () => window.history.back();

  const handleChangeInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };
  const handleChangeInputsubTitle = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditSubTitle(e.target.value);
  };

  return (
    <S.Post>
      <S.PostBox>
        <S.PostTitle>{NAME.TITLE}</S.PostTitle>
        <S.PostInput
          placeholder={NAME.TITLE}
          value={editTitle}
          onChange={handleChangeInputTitle}
        />
      </S.PostBox>
      <S.PostBox>
        <S.PostTitle>{NAME.SUB_TITLE}</S.PostTitle>
        <S.PostInput
          placeholder={NAME.SUB_TITLE}
          value={editSubTitle}
          onChange={handleChangeInputsubTitle}
        />
      </S.PostBox>

      <S.Editor>
        <Editor
          initialValue={content}
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
      <A.ArticleButtonBox>
        <Button.MenuButton onClick={handleClickEditButton}>
          {NAME.EDIT}
        </Button.MenuButton>
        <Button.MenuButton onClick={handleClickCancelButton}>
          {NAME.CANCEL}
        </Button.MenuButton>
      </A.ArticleButtonBox>
    </S.Post>
  );
};

export default Edit;
