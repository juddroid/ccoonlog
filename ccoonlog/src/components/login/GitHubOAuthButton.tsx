import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';
import firebase from 'firebase';

const GitHubOAuthButton = () => {
  const getToken = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const credential = res.credential as firebase.auth.OAuthCredential;
        const token = credential.accessToken;
        const user = res.user;
        console.log(token, user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.table({
          errorCode: errorCode,
          errorMessage: errorMessage,
          email: email,
          credential: credential,
        });
      });
  };

  const handleClickLogInButton = () => getToken();

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
