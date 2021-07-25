import { useLocation } from 'react-router-dom';
import firebase from '../../firebase';
import { Button } from '../../styles/CommonStyles';
import { ArticleDetailState } from '../../types/types';
import { NAME } from '../../const';
import { useRecoilValue } from 'recoil';
import {
  editSubTitleState,
  editTitleState,
  selectedCategoryListState,
} from '../../store/Recoil';

const EditButton = ({
  editorRef,
}: {
  editorRef: React.MutableRefObject<any>;
}) => {
  const location = useLocation<ArticleDetailState>();
  const { date } = location.state.articleDetail;

  const articleID = location.state.articleDetail.id;
  const editRef = firebase.database().ref('article/' + articleID);
  const editTitle = useRecoilValue(editTitleState);
  const editSubTitle = useRecoilValue(editSubTitleState);
  const selectedCategoryList = useRecoilValue(selectedCategoryListState);

  const handleClickEditButton = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdownContent = editorInstance.getMarkdown();

    const editArticle = {
      id: articleID,
      date: date,
      title: editTitle,
      subTitle: editSubTitle,
      content: markdownContent,
      category: selectedCategoryList,
    };
    editRef.update(editArticle);
    window.history.back();
  };

  return (
    <Button.MenuButton onClick={handleClickEditButton}>
      {NAME.EDIT}
    </Button.MenuButton>
  );
};

export default EditButton;
