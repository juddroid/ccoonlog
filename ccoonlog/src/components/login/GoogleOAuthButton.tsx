import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import firebase from '../../firebase';

const GoogleOAuthButton = () => {
  const signInWithRedirect = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const handleClickLogInButton = () => signInWithRedirect();

  return <OAuthButton name={O.GOOGLE} onClick={handleClickLogInButton} />;
};

export default GoogleOAuthButton;
