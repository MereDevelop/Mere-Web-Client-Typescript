import { LOGIN_MODE } from '@constants/auth/login';
import { ErrorType } from '@custom/types/global';
import '@styles/auth/login/Login.scss';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginNavigation from './LoginNavigation';

const Login: React.FC<{
  errors: ErrorType | undefined;
  mode: string;
  loggedId: string;
}> = ({ errors, mode, loggedId }) => {
  const loginView =
    mode === LOGIN_MODE.admin
      ? 'login-container admin-view'
      : 'login-container';

  return (
    <div className={loginView}>
      <LoginHeader mode={mode} />
      <LoginForm errors={errors} mode={mode} loggedId={loggedId} />
      {mode === LOGIN_MODE.owner && <LoginNavigation />}
    </div>
  );
};

export default Login;
