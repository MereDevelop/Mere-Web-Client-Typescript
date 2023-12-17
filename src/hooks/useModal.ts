import { useEffect, useState } from 'react';
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

  const openConfirm = () => setIsConfirm(true);
  const closeConfirm = () => setIsConfirm(false);
  const onClickYes = () => setIsTextPrompt(true);

  return {
    isConfirm,
    isTextPrompt,
    onClickYes,
    openConfirm,
    closeConfirm,
  };
};

export default useModal;
