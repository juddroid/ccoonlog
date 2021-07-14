import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O } from '../../const';
import theme from '../../styles/theme';

const GitHubOAuthButton = () => {
  return (
    <OAuthButton
      name={O.GITHUB}
      color={theme.colors.white}
      background={theme.colors.black}
    />
  );
};

export default GitHubOAuthButton;
