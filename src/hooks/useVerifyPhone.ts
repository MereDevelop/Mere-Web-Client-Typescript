import { useState } from 'react';
import { useTimer } from 'use-timer';

import { requestVerifyNumber } from '@services/auth/verification';
import { isCustomError } from '@utils/check';
import { VERIFICATION } from '@constants/auth/account';

const useVerifyPhone = () => {
  const {
    time,
    start,
    reset: resetTimer,
    status: timerStatus,
  } = useTimer({
    initialTime: 300,
    endTime: 0,
    timerType: 'DECREMENTAL',
  });

  const [transmissionCount, setTransmissionCount] = useState<number>(
    VERIFICATION.initTransmissionCount,
  );
  const [isSend, setIsSend] = useState(false);
  const [isVerificationError, setIsVerificationError] = useState<string>('');

  const timer = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}
    :${(time % 60).toString().padStart(2, '0')}`;

  const sendVerifyNumber = async (storeId: string, ownerPhone: string) => {
    setTransmissionCount(transmissionCount + 1); // 인증 횟수 추가
    if (isValidateTransmissionCount()) {
      const data = {
        storeAccountId: storeId,
        phoneNumber: ownerPhone,
      };

      const response = await requestVerifyNumber(data);
      if (isCustomError(response)) {
        setIsVerificationError(response.errorCode);
        return;
      }

      alert('인증번호를 전송하였습니다.');
      reSendVerifyNumber();
    }
  };

  const isValidateTransmissionCount = (): boolean => {
    if (transmissionCount > VERIFICATION.maxTransmissionCount) {
      alert('인증 횟수가 초과되어 3분동안 접근이 제한됩니다.');
      setTimeout(() => {
        setTransmissionCount(VERIFICATION.initTransmissionCount);
      }, VERIFICATION.lockTime); // 3분
    }

    return transmissionCount <= VERIFICATION.maxTransmissionCount;
  };

  const reSendVerifyNumber = () => {
    resetTimer();
    start();
    setIsSend(true);
    setIsVerificationError('');
  };

  return {
    timer,
    isSend,
    isVerificationError,
    timerStatus,
    sendVerifyNumber,
  };
};

export default useVerifyPhone;
