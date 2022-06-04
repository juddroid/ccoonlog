import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import light from '../../styles/lightTheme';

const NaverOAuthButton = () => {
  return (
    <OAuthButton
      name={O.NAVER}
      color={light.colors.white}
      background={light.colors.naver}
      disabled={true}
    />
  );
};

export default NaverOAuthButton;
