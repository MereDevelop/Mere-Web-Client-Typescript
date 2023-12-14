import { useEffect } from 'react';
import { useToggle } from 'react-use';
import { Form } from 'react-router-dom';

import SaveCheck from '@assets/svg/saveCheck.svg';
import '@styles/auth/login/LoginForm.scss';

const LoginForm: React.FC<{ mode: string }> = ({ mode }) => {
  const [isSave, toggle] = useToggle(false);

  useEffect(() => {
    toggle(false);
  }, [mode, toggle]);

  return (
    <Form className='login-form' method='post'>
      <div className='store-id-container'>
        <label className='label-invisible' htmlFor='storeID' />
        <input
          name='storeID'
          id='storeID'
          type='text'
          placeholder={`${mode === 'admin' ? '관리자번호' : '아이디'}`}
        />
      </div>
      <div className='store-password-container'>
        <label className='label-invisible' htmlFor='password' />
        <input
          name='password'
          id='password'
          type='password'
          placeholder='비밀번호'
        />
      </div>
      <div className='id-save-container'>
        <button
          type='button'
          className={`id-save-btn ${isSave && 'id-save-btn__active'}`}
          onClick={toggle}
        >
          {isSave && <SaveCheck />}
        </button>
        <p className='id-save-message'>
          {mode === 'admin' ? '관리자번호 저장' : '아이디 저장'}
        </p>
      </div>
      <button type='submit' className='login-submit-btn'>
        로그인
      </button>
    </Form>
  );
};

export default LoginForm;
