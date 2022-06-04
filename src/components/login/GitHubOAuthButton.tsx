import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import light from '../../styles/lightTheme';
import firebase from '../../firebase';

const GitHubOAuthButton = () => {
  const signInWithRedirect = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const handleClickLogInButton = () => signInWithRedirect();

  return (
    <OAuthButton
      name={O.GITHUB}
      color={light.colors.white}
      background={light.colors.black}
      onClick={handleClickLogInButton}
    />
  );
};

export default GitHubOAuthButton;
