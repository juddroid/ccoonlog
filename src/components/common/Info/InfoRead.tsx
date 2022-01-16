import { Info as S } from '../../../styles/CommonStyles';
import { getCoffee, getReadingTime } from '../../../utils/utils';

const InfoRead = ({ content }: { content?: string }) => {
  const readingTime = content && getReadingTime(content);
  const coffee = readingTime && getCoffee(readingTime);

  return (
    <S.InfoRead>
      {coffee} &nbsp;{readingTime}min read
    </S.InfoRead>
  );
};

export default InfoRead;
