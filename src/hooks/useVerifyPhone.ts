import { useState } from 'react';
import { useTimer } from 'use-timer';

import { VERIFICATION } from '@constants/auth/account';
import { requestVerifyNumber } from '@services/auth/verification';
import { isCustomError } from '@utils/check';
import { converterTime } from '@utils/converter';

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

  const [transmissionCount, setTransmissionCount] = useState<number>(0);
  const [isSend, setIsSend] = useState(false);
  const [isVerificationError, setIsVerificationError] = useState<string>('');

  const timer = converterTime(time);

  const sendVerificationNumber = async (
    storeId: string,
    ownerPhone: string,
  ) => {
    if (validateTransmissionCount()) {
      setTransmissionCount(transmissionCount + 1); // 인증 횟수 추가

      const response = await requestVerifyNumber(storeId, ownerPhone);
      if (isCustomError(response)) {
        setIsVerificationError(response.errorCode);
        return;
      }

      handleVerificationResend();
    }
  };

  const validateTransmissionCount = (): boolean => {
    if (transmissionCount > VERIFICATION.maxCount) {
      alert('인증 횟수가 초과되어 3분동안 접근이 제한됩니다.');
      setTimeout(() => {
        setTransmissionCount(VERIFICATION.initCount);
      }, VERIFICATION.lockTime); // 3분
    }

    return transmissionCount <= VERIFICATION.maxCount;
  };

  const handleVerificationResend = () => {
    alert('인증번호를 전송하였습니다.');

    setIsSend(true);
    setIsVerificationError('');

    resetTimer();
    start();
  };

  return {
    timer,
    isSend,
    isVerificationError,
    timerStatus,
    sendVerificationNumber,
  };
};

export default useVerifyPhone;
