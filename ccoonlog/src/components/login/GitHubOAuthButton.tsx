import OAuthButton from '../common/OAuthButton';
import { OAUTH_BUTTON_NAME as O, URL as U } from '../../const';
import theme from '../../styles/theme';

const GitHubOAuthButton = () => {
  return (
    <a href={U.GITHUB}>
      <OAuthButton
        name={O.GITHUB}
        color={theme.colors.white}
        background={theme.colors.black}
      />
    </a>
  );
};

export default GitHubOAuthButton;
