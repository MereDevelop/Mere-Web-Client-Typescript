import { useToggle } from 'react-use';
import { Form } from 'react-router-dom';

import SaveCheck from '@assets/svg/saveCheck.svg';
import { FORM_PLACEHOLDERS } from '@constants/auth/login';
import '@styles/auth/login/LoginForm.scss';

const LoginForm: React.FC<{ mode: string; loggedId: string }> = ({
  mode,
  loggedId,
}) => {
  const [isSave, isSaveToggle] = useToggle(!!loggedId);

  return (
    <Form className='login-form' method='post'>
      <div className='store-id-container'>
        <label className='label-invisible' htmlFor='storeID' />
        <input
          name='storeID'
          id='storeID'
          type='text'
          placeholder={FORM_PLACEHOLDERS[mode].id}
          defaultValue={loggedId}
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
          onClick={isSaveToggle}
        >
          {isSave && <SaveCheck />}
        </button>
        <p className='id-save-message'>{FORM_PLACEHOLDERS[mode].save}</p>
      </div>
      <button type='submit' className='login-submit-btn'>
        로그인
      </button>
    </Form>
  );
};

export default LoginForm;
