import { Button as S } from '../../styles/CommonStyles';
import { OAuthButtonProps } from '../../types/CommonTypes';

const OAuthButton = ({
  name,
  color,
  background,
  onClick,
  disabled,
}: OAuthButtonProps) => {
  return (
    <S.OAuthButton {...{ color, background, onClick }} disabled={disabled}>
      {name}
    </S.OAuthButton>
  );
};

export default OAuthButton;
