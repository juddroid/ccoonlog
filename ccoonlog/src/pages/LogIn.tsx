import GitHubOAuthButton from '../components/login/GitHubOAuthButton';
import GoogleOAuthButton from '../components/login/GoogleOAuthButton';
import NaverOAuthButton from '../components/login/NaverOAuthButton';
import KakaoOAuthButton from '../components/login/KakaoOAuthButton';
import FacebookOAuthButton from '../components/login/FacebookOAuthButton';
import { LogIn as S } from '../styles/styles';
import { Redirect } from 'react-router-dom';

const LogIn = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <>
      {isLoggedIn ? (
        <Redirect from="*" to="/" />
      ) : (
        <S.LogIn>
          <GoogleOAuthButton />
          <GitHubOAuthButton />
          <FacebookOAuthButton />
          <NaverOAuthButton />
          <KakaoOAuthButton />
        </S.LogIn>
      )}
    </>
  );
};

export default LogIn;
