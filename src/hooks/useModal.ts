import { useEffect, useState, useCallback } from 'react';
import { useToggle } from 'react-use';

const useModal = () => {
  const [isConfirm, setIsConfirm] = useToggle(false);
  const [isTextPrompt, setIsTextPrompt] = useState<boolean>(false);

  useEffect(() => {
    if (isTextPrompt) {
      setTimeout(() => {
        setIsTextPrompt(false);
      }, 1500);
    }
  }, [isTextPrompt]);

  const openConfirm = useCallback(() => setIsConfirm(true), [setIsConfirm]);
  const closeConfirm = useCallback(() => setIsConfirm(false), [setIsConfirm]);
  const onClickYes = useCallback(
    () => setIsTextPrompt(true),
    [setIsTextPrompt],
  );

  return {
    isConfirm,
    isTextPrompt,
    onClickYes,
    openConfirm,
    closeConfirm,
  };
};

export default useModal;
