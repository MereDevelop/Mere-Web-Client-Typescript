import { SignupInfo } from '@store/signup-dto';
import '@styles/auth/signup/CheckInfoForm.scss';
import { Form, Link } from 'react-router-dom';

interface CheckInfoFormProps {
  signupInfo: SignupInfo;
}
const CheckInfoForm: React.FC<CheckInfoFormProps> = ({ signupInfo }) => {
  const {
    storeName,
    storeTel,
    jibunAddress,
    detailAddress,
    representativeName,
    registrationNo,
    ownerName,
    ownerTel,
    accountBank,
    accountNum,
    accountPW,
  } = signupInfo;

  return (
    <Form className='check-info-form' method='post'>
      <div className='top-container'>
        <div className='top-left-container'>
          <label htmlFor='store-name-label' className='store-name-label'>
            매장명(상호명)
          </label>
          <input
            id='store-name'
            className='store-name'
            type='text'
            name='store-name'
            placeholder='매장명'
            value={storeName}
            readOnly
          />
          <label htmlFor='store-number-label' className='store-number-label'>
            매장 연락처
          </label>
          <input
            className='store-number'
            type='tel'
            name='store-number'
            placeholder="'-'빼고 숫자만 입력"
            value={storeTel}
            readOnly
          />
        </div>
        <div className='top-right-container'>
          <label htmlFor='store-address-label' className='store-address-label'>
            매장 주소
          </label>
          <div>
            <input
              id='store-address-label'
              className='store-address'
              type='text'
              name='store-address'
              placeholder='매장주소 입력'
              value={jibunAddress}
              readOnly
            />
          </div>
          <input
            className='store-detail-address-02'
            type='text'
            name='store-detail-address'
            placeholder='상세주소 입력'
            value={detailAddress}
            readOnly
          />
        </div>
      </div>
      <div className='bottom-container'>
        <div className='bottom-left-container'>
          <div className='store-name-container'>
            <div className='store-name-03'>
              <label htmlFor='store-name-label' className='store-name-label'>
                사장님 성명
              </label>
              <input
                className='president-name-03'
                type='text'
                name='president-name-02'
                placeholder='홍길동'
                value={ownerName}
                readOnly
              />
            </div>
            <div className='store-name-04'>
              <label htmlFor='store-name-label' className='store-name-label'>
                대표자 성명
              </label>
              <input
                className='representative-name-02'
                type='text'
                name='representative-name'
                placeholder='홍길동'
                value={representativeName}
                readOnly
              />
            </div>
          </div>
          <div className='business-registration-container'>
            <label htmlFor='store-name-label' className='store-name-label'>
              사업자등록번호
            </label>
            <input
              id='business-registration-number-02'
              className='business-registration-number-02'
              type='text'
              name='business-registration-number'
              placeholder="'-'빼고 숫자만 입력"
              value={registrationNo}
              readOnly
            />
          </div>
          <div>
            <label htmlFor='store-name-label' className='store-name-label'>
              입금 계좌번호
            </label>
            <div>
              <button type='button' className='bank-choice-btn-02'>
                {accountBank}
              </button>
              <input
                id='bank-account-number-02'
                className='bank-account-number-02'
                type='text'
                name='bank-account-number'
                placeholder="'-'빼고 숫자만 입력"
                value={accountNum}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className='bottom-right-container'>
          <div className='store-name-container'>
            <label htmlFor='store-name-label' className='store-name-label'>
              사장님 연락처
            </label>
            <input
              id='president-number-02'
              className='president-number-02'
              type='tel'
              name='president-number'
              placeholder="'-'빼고 숫자만 입력"
              value={ownerTel}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor='store-password-label'
              className='store-password-label'
            >
              비밀번호
            </label>
            <input
              id='password-02'
              className='password-02'
              type='password'
              name='password'
              placeholder='비밀번호 입력'
              value={accountPW}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className='signup-navigation-container-03'>
        <button type='submit' className='next-navigation-btn-03'>
          가입하기
        </button>
      </div>
    </Form>
  );
};

export default CheckInfoForm;
