import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';

const FacebookOAuthButton = () => {
  return (
    <OAuthButton
      name={O.FACEBOOK}
      color={theme.colors.white}
      background={theme.colors.facebook}
    />
  );
};

export default FacebookOAuthButton;
