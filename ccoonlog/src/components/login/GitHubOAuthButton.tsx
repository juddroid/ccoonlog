import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';
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
      color={theme.colors.white}
      background={theme.colors.black}
      onClick={handleClickLogInButton}
    />
  );
};

export default GitHubOAuthButton;
