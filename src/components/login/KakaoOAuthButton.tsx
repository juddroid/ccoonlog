import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import light from '../../styles/lightTheme';

const KakaoOAuthButton = () => {
  return (
    <OAuthButton
      name={O.KAKAO}
      color={light.colors.black}
      background={light.colors.kakao}
      disabled={true}
    />
  );
};

export default KakaoOAuthButton;
