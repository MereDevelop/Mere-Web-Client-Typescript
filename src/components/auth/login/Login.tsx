import { LOGIN_MODE } from '@constants/auth/login';
import '@styles/auth/login/Login.scss';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginNavigation from './LoginNavigation';

const Login: React.FC<{ mode: string }> = ({ mode }) => {
  const loginView =
    mode === LOGIN_MODE.admin
      ? 'login-container admin-view'
      : 'login-container';

  return (
    <div className={loginView}>
      <LoginHeader mode={mode} />
      <LoginForm mode={mode} />
      {mode === '' && <LoginNavigation />}
    </div>
  );
};

export default Login;
