import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';

const NaverOAuthButton = () => {
  return (
    <OAuthButton
      name={O.NAVER}
      color={theme.colors.white}
      background={theme.colors.naver}
    />
  );
};

export default NaverOAuthButton;
