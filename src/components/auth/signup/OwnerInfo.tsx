import { Form } from 'react-router-dom';
import BeatLoader from '@commons/BeatLoader';
import '@styles/auth/account/Verification.scss';
import { OwnerInfoProps } from '@custom/types/signup/Signup';
import { useEffect, useState } from 'react';
import '@styles/auth/signup/OwnerInfoForm.scss';

const OwnerInfo: React.FC<OwnerInfoProps> = ({ isSubmitting }) => {
  const [ownerName, setOwnerName] = useState<string | undefined>();
  const [ownerTel, setOwnerTel] = useState<string | undefined>();
  const [representativeName, setRepresentativeName] = useState<
    string | undefined
  >();
  const [registrationNo, setRegistrationNo] = useState<string | undefined>();
  const [accountPW, setAccountPW] = useState<string | undefined>();
  const [accountNum, setAccountNum] = useState<string | undefined>();
  const [accountBank, setAccountBank] = useState<string | undefined>(
    '은행선택',
  );
  const [verifyNum, setVerifyNum] = useState<string | undefined>();
  const [isValid, setIsVaild] = useState<boolean>(false);

  useEffect(() => {
    const isAllFilled = () => {
      if (
        ownerName &&
        ownerTel &&
        representativeName &&
        registrationNo &&
        accountPW &&
        accountNum &&
        accountBank &&
        verifyNum
      ) {
        setIsVaild(true);
      } else setIsVaild(false);
    };
    isAllFilled();
  });

  const selectBank = () => {
    setAccountBank('농협');
  };

  return (
    <Form className='owner-info-form' method='post' action='./'>
      <div className='owner-info-input-container'>
        <div className='owner-info-container'>
          <div className='owner-name-container'>
            <label htmlFor='ownerName'>사장님 성명</label>
            <input
              id='ownerName'
              name='ownerName'
              type='text'
              placeholder='사장님 성명 입력'
              onChange={(e) => {
                setOwnerName(e.target.value);
              }}
            />
          </div>
          <div className='owner-phone-container'>
            <label htmlFor='ownerPhone'>사장님 연락처</label>
            <div className='owner-phone-verify-container'>
              <input
                id='ownerPhone'
                name='ownerPhone'
                type='number'
                placeholder='‘-’빼고 숫자만 입력'
                onChange={(e) => {
                  setOwnerTel(e.target.value);
                }}
              />
              <button type='button' className='verification-owner-phone-btn'>
                인증번호 받기
              </button>
            </div>
            <input
              id='verifyPhone'
              name='verifyPhone'
              type='number'
              placeholder='인증번호 6자리 입력'
              onChange={(e) => {
                setVerifyNum(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='owner-representative-name-container'>
          <label htmlFor='owner-representative-name'>대표자 성명</label>
          <input
            id='representative-name'
            name='representative-name'
            type='text'
            placeholder='대표자 성명 입력'
            onChange={(e) => {
              setRepresentativeName(e.target.value);
            }}
          />
        </div>

        <div className='flex-container'>
          <div className='registrationNo-container'>
            <label htmlFor='registrationNo'>사업자등록번호</label>
            <input
              id='registrationNo'
              name='registrationNo'
              type='text'
              placeholder='사업자등록번호'
              onChange={(e) => {
                setRegistrationNo(e.target.value);
              }}
            />
          </div>
          <div className='account-password-container'>
            <label htmlFor='password'>비밀번호</label>
            <input
              id='password'
              name='password'
              type='text'
              placeholder='비밀번호 입력'
              onChange={(e) => {
                setAccountPW(e.target.value);
              }}
            />
            <input
              id='passwordCheck'
              name='passwordCheck'
              type='text'
              placeholder='비밀번호 다시 입력'
              onChange={(e) => {
                setRegistrationNo(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='account-number-container'>
          <label htmlFor='account-number'>입금 계좌번호</label>
          <div className='account-number-form'>
            <button
              type='button'
              className='select-bank-btn'
              onClick={selectBank}
            >
              {accountBank}
            </button>
            <input
              id='account-number'
              name='account-number'
              type='text'
              placeholder='‘-’빼고 숫자만 입력'
              onChange={(e) => {
                setAccountNum(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <input type='hidden' name='accountBank' value={accountBank} />
      <button
        type='submit'
        className='owner-info-submit-btn'
        disabled={!isValid}
      >
        {isSubmitting ? <BeatLoader /> : '다음'}
      </button>
    </Form>
  );
};

export default OwnerInfo;
