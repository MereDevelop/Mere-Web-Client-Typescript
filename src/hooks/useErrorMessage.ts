import { useEffect, useState } from 'react';

const useErrorMessage = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 1500);
    }
  }, [errorMessage]);

  return [errorMessage, setErrorMessage];
};

export default useErrorMessage;
