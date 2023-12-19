import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { verificationFormSchema } from '@constants/validation/schema';

type AccountVerificationType = {
  storeID: string;
  ownerPhone: string;
  verificationNumber: string;
};

const useFormValidation = (defaultValues: AccountVerificationType) => {
  const {
    register,
    formState: { isValid, errors, touchedFields },
    getValues,
    setFocus,
  } = useForm({
    mode: 'onChange',
    defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(verificationFormSchema),
  });

  useEffect(() => {
    setFocus('storeID');
  }, [setFocus]);

  return {
    register,
    isValid,
    errors,
    touchedFields,
    getValues,
    setFocus,
  };
};

export default useFormValidation;
