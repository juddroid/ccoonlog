import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import light from '../../styles/lightTheme';
import firebase from '../../firebase';

const FacebookOAuthButton = () => {
  const signInWithRedirect = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const handleClickLogInButton = () => signInWithRedirect();

  return (
    <OAuthButton
      name={O.FACEBOOK}
      color={light.colors.white}
      background={light.colors.facebook}
      onClick={handleClickLogInButton}
    />
  );
};

export default FacebookOAuthButton;
