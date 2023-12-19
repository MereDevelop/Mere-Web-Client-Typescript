import * as yup from 'yup';

import { regExpPassword, regExpPhoneNum } from './regular-expression';

const verificationFormSchema = yup.object().shape({
  storeID: yup.string().required(),
  ownerPhone: yup
    .string()
    .matches(regExpPhoneNum, `'-'이 포함되지 않았는지 확인해주세요.`)
    .required('휴대폰 번호를 입력해주세요.')
    .min(10, '휴대폰 번호를 확인해주세요.')
    .max(14, '휴대폰 번호를 확인해주세요.'),
  verificationNumber: yup.string().required(),
});

const passwordFormSchema = yup.object().shape({
  password: yup.string().matches(regExpPassword),
  confirmPassword: yup
    .string()
    .matches(regExpPassword)
    .oneOf([yup.ref('password')])
    .required(),
});

export { verificationFormSchema, passwordFormSchema };
