// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'tui-chart/dist/tui-chart.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import Prism from 'prismjs';
import { Editor } from '@toast-ui/react-editor';
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
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        ref={editorRef}
      />
    </S.Editor>
  );
};

export default PostEditor;
