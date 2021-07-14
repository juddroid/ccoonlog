import GitHubOAuthButton from '../components/login/GitHubOAuthButton';
import GoogleOAuthButton from '../components/login/GoogleOAuthButton';
import NaverOAuthButton from '../components/login/NaverOAuthButton';
import KakaoOAuthButton from '../components/login/KakaoOAuthButton';
import FacebookOAuthButton from '../components/login/FacebookOAuthButton';
import { LogIn as S } from '../styles/styles';

const LogIn = () => {
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
