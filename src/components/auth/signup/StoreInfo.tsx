import { Form } from 'react-router-dom';
import BeatLoader from '@commons/BeatLoader';
import '@styles/auth/account/Verification.scss';
import { StoreInfoProps } from '@custom/types/signup/Signup';
import { useEffect, useState } from 'react';
import '@styles/auth/signup/StoreInfoForm.scss';

const StoreInfo: React.FC<StoreInfoProps> = ({ isSubmitting }) => {
  const [storeName, setStoreName] = useState<string | undefined>();
  const [storePhone, setStorePhone] = useState<string | undefined>();
  const [storeAddress, setStoreAddress] = useState<string | undefined>();
  const [storeAddressDetail, setStoreAddressDetail] = useState<
    string | undefined
  >();
  const [isValid, setIsVaild] = useState<boolean>(false);

  useEffect(() => {
    const isAllFilled = () => {
      if (storeName && storePhone && storeAddress && storeAddressDetail) {
        setIsVaild(true);
      } else setIsVaild(false);
    };
    isAllFilled();
  });

  return (
    <Form className='store-info-form' method='post' action='/signup'>
      <div className='store-info-input-container'>
        <div className='store-name-container'>
          <label htmlFor='storeName'>매장명(상호명)</label>
          <input
            id='storeName'
            name='storeName'
            type='text'
            placeholder='매장명'
            onChange={(e) => {
              setStoreName(e.target.value);
            }}
          />
        </div>
        <div className='store-phone-container'>
          <label htmlFor='storePhone'>사장님 전화번호</label>
          <input
            id='storePhone'
            name='storePhone'
            type='number'
            placeholder='‘-’빼고 숫자만 입력'
            onChange={(e) => {
              setStorePhone(e.target.value);
            }}
          />
        </div>
        <div className='store-address-container'>
          <label htmlFor='store-address'>매장주소</label>
          <div className='store-address-search-container'>
            <input
              id='storeAddress'
              name='storeAddress'
              type='text'
              placeholder='매장주소 입력'
              onChange={(e) => {
                setStoreAddress(e.target.value);
              }}
            />
            <button type='button' className='store-address-search-btn'>
              검색
            </button>
          </div>
          <input
            id='storeAddressDetail'
            name='storeAddressDetail'
            type='text'
            placeholder='상세주소 입력'
            onChange={(e) => {
              setStoreAddressDetail(e.target.value);
            }}
          />
        </div>
      </div>
      <button
        type='submit'
        className='store-info-submit-btn'
        disabled={!isValid}
      >
        {isSubmitting ? <BeatLoader /> : '다음'}
      </button>
    </Form>
  );
};

export default StoreInfo;
