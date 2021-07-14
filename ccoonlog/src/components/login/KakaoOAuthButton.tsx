import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';

const KakaoOAuthButton = () => {
  return (
    <OAuthButton
      name={O.KAKAO}
      color={theme.colors.black}
      background={theme.colors.kakao}
    />
  );
};

export default KakaoOAuthButton;
