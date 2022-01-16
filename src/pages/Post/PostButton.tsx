import { NAME } from '../../const';
import { Button } from '../../styles/CommonStyles';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { v1 as uuidv1 } from 'uuid';
import firebase from '../../firebase';
import {
  postTitleState,
  postSubTitleState,
  selectedCategoryListState,
} from '../../store/Recoil';

const PostButton = ({
  editorRef,
}: {
  editorRef: React.MutableRefObject<any>;
}) => {
  const history = useHistory();
  const postTitle = useRecoilValue(postTitleState);
  const postSubTitle = useRecoilValue(postSubTitleState);
  const selectedCategoryList = useRecoilValue(selectedCategoryListState);

  const handleClickPostButton = () => {
    const id = uuidv1();
    const articleRef = firebase.database().ref('article/' + id);
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();

    const newArticle = {
      id: id,
      date: `${new Date()}`,
      title: postTitle,
      subTitle: postSubTitle,
      content: markdownContent,
      category: selectedCategoryList,
    };
    articleRef.set(newArticle);

    // 썼던 글을 바로 볼 수 있도록 바꿔야함
    history.push(`/`);
  };

  return (
    <Button.AsideButton onClick={handleClickPostButton}>
      {NAME.POST}
    </Button.AsideButton>
  );
};

export default PostButton;
