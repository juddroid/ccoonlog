import { Button as S } from '../../styles/CommonStyles';
import { OAuthButtonProps } from '../../types/CommonTypes';

const OAuthButton = ({
  name,
  color,
  background,
  onClick,
}: OAuthButtonProps) => {
  return (
    <S.OAuthButton {...{ color, background, onClick }}>{name}</S.OAuthButton>
  );
};

export default OAuthButton;
