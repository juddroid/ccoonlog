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
import { useLocation } from 'react-router-dom';
import { ArticleDetailState } from '../../types/types';
import { Post as S } from '../../styles/styles';

const EditEditor = ({
  editorRef,
}: {
  editorRef: React.MutableRefObject<any>;
}) => {
  const location = useLocation<ArticleDetailState>();

  const { content } = location.state.articleDetail;

  return (
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
  );
};

export default EditEditor;
