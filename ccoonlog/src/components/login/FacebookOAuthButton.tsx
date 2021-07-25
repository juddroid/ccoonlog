import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';
import firebase from '../../firebase';

const FacebookOAuthButton = () => {
  const getToken = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase
      .auth()
      .getRedirectResult()
      .then((res) => {
        const credential = res.credential as firebase.auth.OAuthCredential;
        const token = credential.accessToken;
        const user = res.user;
        console.log(token, user);
        // localStorage.setItem(LOCAL.TOKEN, JSON.stringify(token));
        // localStorage.setItem(LOCAL.USER, JSON.stringify(user));
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
      name={O.FACEBOOK}
      color={theme.colors.white}
      background={theme.colors.facebook}
      onClick={handleClickLogInButton}
    />
  );
};

export default FacebookOAuthButton;
