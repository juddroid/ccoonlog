import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import Prism from 'prismjs';
// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { Viewer } from '@toast-ui/react-editor';
import { Article as S } from '../../styles/styles';
import { ArticleDetailProps } from '../../types/types';

const ArticleDetailViewer = ({
  articleDetail,
}: {
  articleDetail: ArticleDetailProps;
}) => {
  return (
    <S.ArticleDetailViewer>
      <Viewer
        initialValue={articleDetail.content}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </S.ArticleDetailViewer>
  );
};

export default ArticleDetailViewer;
