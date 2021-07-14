import { Button as S } from '../../styles/CommonStyles';
import { OAuthButtonProps } from '../../types/CommonTypes';

const OAuthButton = ({ name, color, background }: OAuthButtonProps) => {
  return <S.OAuthButton {...{ color, background }}>{name}</S.OAuthButton>;
};

export default OAuthButton;
