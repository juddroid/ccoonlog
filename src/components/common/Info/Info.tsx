import InfoDate from './InfoDate';
import { Info as S } from '../../../styles/CommonStyles';
import InfoRead from './InfoRead';

const Info = ({ date, content }: { date: string; content?: string }) => {
  return (
    <S.Info>
      <InfoDate {...{ date }} />
      <S.InfoDot>•</S.InfoDot>
      <InfoRead {...{ content }} />
    </S.Info>
  );
};

export default Info;
