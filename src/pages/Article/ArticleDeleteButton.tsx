import { NAME } from '../../const';
import { Button } from '../../styles/CommonStyles';
import firebase from '../../firebase';

const ArticleDeleteButton = ({ articleID }: { articleID: string }) => {
  const handleClickDeleteButton = () => {
    const deleteRef = firebase.database().ref('article/' + articleID);

    deleteRef
      .remove()
      .then(() => {
        console.log('Remove succeeded.');
        window.history.back();
      })
      .catch((error) => console.log('Remove failed: ' + error.message));
  };

  return (
    <Button.AsideButton onClick={handleClickDeleteButton}>
      {NAME.DELETE}
    </Button.AsideButton>
  );
};

export default ArticleDeleteButton;
