import firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  cocommentEditIDState,
  cocommentInputValueState,
  isLoggedInState,
} from '../../store/Recoil';
import { getLocalStorageData } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import { LOCAL_STORAGE as LOCAL } from '../../const';
import { Cocomment as S } from '../../styles/styles';

const CocommentPawButton = ({ cid }: { cid: string }) => {
  const [pawButtonState, setPawButtonState] = useState(false);
  const [cocommentInputValue, setCocommentInputValue] = useRecoilState(
    cocommentInputValueState
  );
  const setCocommentEditID = useSetRecoilState(cocommentEditIDState);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const user = getLocalStorageData(LOCAL.USER);
  const email = user?.email?.split('@')[0] || null;

  const handleClickPawButton = () => {
    if (!isLoggedIn) return alert('로그인이 필요해요');

    const ccid = uuidv4();
    const name = user.displayName || email;
    const commentRef = firebase.database().ref(`cocomment/${cid}/${ccid}`);
    const updateComment = {
      cid: cid,
      ccid: ccid,
      uid: user.uid,
      name: name,
      date: `${new Date()}`,
      comment: cocommentInputValue,
      userImageURL: user.photoURL,
    };
    commentRef.set(updateComment);

    setCocommentInputValue('');
    setCocommentEditID(null);
  };

  useEffect(() => {
    cocommentInputValue !== ''
      ? setPawButtonState(false)
      : setPawButtonState(true);
  }, [cocommentInputValue]);

  return (
    <S.CocommentPawButton
      onClick={handleClickPawButton}
      disabled={pawButtonState}
    >
      Paw
    </S.CocommentPawButton>
  );
};

export default CocommentPawButton;
