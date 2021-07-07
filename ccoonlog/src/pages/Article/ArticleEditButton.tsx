import { NAME } from '../../const';
import { Button } from '../../styles/CommonStyles';
import firebase from '../../firebase';

const ArticleEditButton = ({ articleID }: { articleID: string }) => {
  const handleClickEditButton = () => {
    const editRef = firebase.database().ref('article/' + articleID);

    editRef
      .remove()
      .then(function () {
        console.log('Remove succeeded.');
        window.history.back();
      })
      .catch(function (error) {
        console.log('Remove failed: ' + error.message);
      });
  };

  return (
    <Button.MenuButton onClick={handleClickEditButton}>
      {NAME.EDIT}
    </Button.MenuButton>
  );
};

export default ArticleEditButton;
