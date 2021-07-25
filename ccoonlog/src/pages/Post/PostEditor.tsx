import { Editor } from '@toast-ui/react-editor';
// import chart from '@toast-ui/editor-plugin-chart';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
// import uml from '@toast-ui/editor-plugin-uml';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-chart/dist/tui-chart.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { Post as S } from '../../styles/styles';

const PostEditor = ({
  editorRef,
}: {
  editorRef: React.MutableRefObject<any>;
}) => {
  return (
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
  );
};

export default PostEditor;
