import { useState } from 'react';
import { useTimer } from 'use-timer';

import { VERIFICATION } from '@constants/auth/account';
import { requestVerificationNumber } from '@services/auth/verification';
import { convertNumberToClockFormat } from '@utils/converter';
import { isFailureResponse } from '@utils/checker/common';

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

  const [isVerifing, setIsVerifing] = useState(false);
  const [transmissionCount, setTransmissionCount] = useState<number>(0);
  const [isSend, setIsSend] = useState(false);
  const [isVerificationError, setIsVerificationError] = useState<string>('');

  const timer = convertNumberToClockFormat(time);

  const sendVerificationNumber = async (
    storeId: string,
    ownerPhone: string,
  ) => {
    if (validateTransmissionCount()) {
      setIsVerifing(true);
      const response = await requestVerificationNumber(storeId, ownerPhone);
      if (isFailureResponse(response)) {
        setIsVerificationError(response.errorCode);
        return;
      }

      setTransmissionCount(transmissionCount + 1); // 인증 횟수 추가
      handleVerificationResend();
    }

    setIsVerifing(false);
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
    isVerifing,
    timer,
    isSend,
    isVerificationError,
    timerStatus,
    sendVerificationNumber,
  };
};

export default useVerifyPhone;
