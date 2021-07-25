import GitHubOAuthButton from '../components/login/GitHubOAuthButton';
import GoogleOAuthButton from '../components/login/GoogleOAuthButton';
import NaverOAuthButton from '../components/login/NaverOAuthButton';
import KakaoOAuthButton from '../components/login/KakaoOAuthButton';
import FacebookOAuthButton from '../components/login/FacebookOAuthButton';
import { LogIn as S } from '../styles/styles';
import { Redirect } from 'react-router-dom';

const LogIn = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  isLoggedIn && console.log('이미 로그인했어요~');

  return (
    <>
      {isLoggedIn ? (
        <Redirect from="*" to="/" />
      ) : (
        <S.LogIn>
          <GitHubOAuthButton />
          <GoogleOAuthButton />
          <NaverOAuthButton />
          <FacebookOAuthButton />
          <KakaoOAuthButton />
        </S.LogIn>
      )}
    </>
  );
};

export default LogIn;
