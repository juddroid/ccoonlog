import InfoDate from './InfoDate';
import { Info as S } from '../../../styles/CommonStyles';
import InfoRead from './InfoRead';

const Info = ({ date }: { date: string }) => {
  return (
    <S.Info>
      <InfoDate {...{ date }} />
      <S.InfoDot>•</S.InfoDot>
      <InfoRead />
    </S.Info>
  );
};

export default Info;
