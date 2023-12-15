import { useState } from 'react';
import { useToggle } from 'react-use';
import { useSubmit } from 'react-router-dom';

import SaveCheck from '@assets/svg/saveCheck.svg';
import { FORM_PLACEHOLDERS } from '@constants/auth/login';
import { ErrorType } from '@custom/types/global';
import { removeDataInCookie, setDataInCookie } from '@utils/cookie';
import '@styles/auth/login/LoginForm.scss';

const LoginForm: React.FC<{
  errors: ErrorType | undefined;
  mode: string;
  loggedId: string;
}> = ({ errors, mode, loggedId }) => {
  const [id, setId] = useState(loggedId);
  const [isSave, isSaveToggle] = useToggle(!!loggedId);
  const submit = useSubmit();

  const onLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (isSave) setDataInCookie(`${mode}LoggedId`, id);
    else removeDataInCookie(`${mode}LoggedId`);

    submit(event.currentTarget);
  };

  return (
    <form className='login-form' method='post' onSubmit={onLogin}>
      <input type='hidden' name='mode' defaultValue={mode} />
      <div className='store-id-container'>
        <label className='label-invisible' htmlFor='id' />
        <input
          name='id'
          id='id'
          type='text'
          placeholder={FORM_PLACEHOLDERS[mode].id}
          value={id}
          onChange={(e) => setId(e.target.value)}
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
      <p className='login-error-message'>{errors?.message}</p>
      <button type='submit' className='login-submit-btn'>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
