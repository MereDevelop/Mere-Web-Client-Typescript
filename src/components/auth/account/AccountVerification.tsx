import { Form, useOutletContext } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';

import BeatLoader from '@commons/BeatLoader';
import useFormValidation from '@hooks/useFormValidation';
import useVerifyPhone from '@hooks/useVerifyPhone';
import '@styles/auth/account/AccountVerification.scss';

type NavigationState = {
  isSubmitting: boolean;
};

const AccountVerification = () => {
  const { register, isValid, errors, touchedFields, getValues } =
    useFormValidation({
      storeID: '',
      ownerPhone: '',
      verificationNumber: '',
    });
  const { timer, isSend, timerStatus, isVerificationError, sendVerifyNumber } =
    useVerifyPhone();
  const { isSubmitting } = useOutletContext<NavigationState>();

  const disablePhoneBtn =
    errors.ownerPhone !== undefined || getValues('ownerPhone').length === 0;
  const isErrorVisible = touchedFields.ownerPhone && errors.ownerPhone;

  const sendVerificationNumber = () => {
    const storeID = getValues('storeID');
    const ownerPhone = getValues('ownerPhone');

    sendVerifyNumber(storeID, ownerPhone);
  };

  return (
    <Form className='verification-form' method='post' action='/account'>
      <div className='verification-input-container'>
        <div className='store-id-container'>
          <label htmlFor='storeID'>매장 ID</label>
          <input
            id='storeID'
            type='text'
            placeholder='아이디'
            aria-errormessage={isVerificationError}
            {...register('storeID')}
          />
        </div>
        <div className='owner-phone-container'>
          <label htmlFor='ownerPhone'>사장님 전화번호</label>
          <div className='phone-check-container'>
            <input
              id='ownerPhone'
              type='number'
              placeholder='‘-’빼고 숫자만 입력'
              className={isErrorVisible ? 'error-border' : ''}
              aria-errormessage={isVerificationError}
              {...register('ownerPhone')}
            />
            <button
              type='button'
              className='phone-check-btn'
              onClick={sendVerificationNumber}
              disabled={disablePhoneBtn}
            >
              {isSend ? '재인증 요청' : '인증번호 받기'}
            </button>
          </div>
          <label htmlFor='verificationNumber' className='label-inivisible' />
          <div className='verification-check-container'>
            <input
              id='verificationNumber'
              placeholder='인증번호 6자리 입력'
              {...register('verificationNumber')}
              disabled={!isSend}
            />
            {isSend && <p className='verification-timer'>{timer}</p>}
          </div>
        </div>
      </div>
      <div className='verification-error-container'>
        {isErrorVisible ? (
          <ErrorMessage
            errors={errors}
            name='ownerPhone'
            render={({ message }) => (
              <p className='verification-error-message'>{message}</p>
            )}
          />
        ) : (
          isVerificationError && (
            <p className='verification-error-message'>
              매장 ID 혹은 전화번호를 확인해주세요.
            </p>
          )
        )}
      </div>
      <button
        type='submit'
        className='verification-submit-btn'
        disabled={!isValid || timerStatus === 'STOPPED'}
      >
        {isSubmitting ? <BeatLoader /> : '다음'}
      </button>
    </Form>
  );
};

export default AccountVerification;
