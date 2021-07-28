import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';
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
      color={theme.colors.white}
      background={theme.colors.facebook}
      onClick={handleClickLogInButton}
    />
  );
};

export default FacebookOAuthButton;
