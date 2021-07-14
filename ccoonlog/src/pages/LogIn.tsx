import GitHubOAuthButton from '../components/login/GitHubOAuthButton';
import GoogleOAuthButton from '../components/login/GoogleOAuthButton';
import NaverOAuthButton from '../components/login/NaverOAuthButton';
import KakaoOAuthButton from '../components/login/KakaoOAuthButton';
import FacebookOAuthButton from '../components/login/FacebookOAuthButton';
import { LogIn as S } from '../styles/styles';
import firebase from 'firebase';

const LogIn = () => {
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
    });

  return (
    <S.LogIn>
      <GitHubOAuthButton />
      <GoogleOAuthButton />
      <NaverOAuthButton />
      <FacebookOAuthButton />
      <KakaoOAuthButton />
    </S.LogIn>
  );
};

export default LogIn;
