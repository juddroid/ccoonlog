import React from 'react';
import { Info as S } from '../../../styles/CommonStyles';
import { getInfoDate } from '../../../utils';

const InfoDate = ({ date }: { date: string }) => {
  return <S.InfoDate>{getInfoDate(date)}</S.InfoDate>;
};

export default InfoDate;
