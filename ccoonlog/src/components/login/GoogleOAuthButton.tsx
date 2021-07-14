import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';

const GoogleOAuthButton = () => {
  return <OAuthButton name={O.GOOGLE} />;
};

export default GoogleOAuthButton;
