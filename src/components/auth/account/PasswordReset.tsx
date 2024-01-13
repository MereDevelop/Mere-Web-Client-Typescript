import { Form } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import BeatLoader from '@commons/BeatLoader';
import { passwordFormSchema } from '@constants/validation/schema';
import '@styles/auth/account/PasswordReset.scss';

const PasswordReset: React.FC<{
  isSubmitting: boolean;
  authenticateCode: string | undefined;
  storeId: string | undefined;
}> = ({ isSubmitting, authenticateCode, storeId }) => {
  const {
    register,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(passwordFormSchema),
  });

  return (
    <Form className='new-password-form' method='post'>
      <input type='hidden' name='authenticateCode' value={authenticateCode} />
      <input type='hidden' name='storeId' value={storeId} />

      <div className='new-password-container'>
        <label htmlFor='password'>새 비밀번호</label>
        <input
          id='password'
          type='password'
          placeholder='비밀번호 입력'
          {...register('password')}
        />
        <p className='password-validation-message'>
          8~16자리 영문(대문자/소문자), 숫자, 특수문자 포함
        </p>
      </div>
      <div className='new-password-confirm-container'>
        <label htmlFor='confirmPassword'>새 비밀번호 확인</label>
        <input
          id='confirmPassword'
          type='password'
          placeholder='비밀번호 다시 입력'
          {...register('confirmPassword')}
        />
      </div>

      <button
        type='submit'
        className='new-password-submit-btn'
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? <BeatLoader /> : '등록'}
      </button>
    </Form>
  );
};

export default PasswordReset;
