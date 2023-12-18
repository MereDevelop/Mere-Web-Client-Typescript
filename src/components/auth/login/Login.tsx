import { LOGIN_MODE } from '@constants/auth/login';
import { CustomError } from '@custom/types/response';
import '@styles/auth/login/Login.scss';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginNavigation from './LoginNavigation';
import ModeToggle from './ModeToggle';

const Login: React.FC<{
  errors: CustomError | undefined;
  mode: string;
  loggedId: string;
  isSubmitting: boolean;
}> = ({ errors, mode, loggedId, isSubmitting }) => {
  const loginView =
    mode === LOGIN_MODE.admin
      ? 'login-container admin-view'
      : 'login-container';

  return (
    <div className={loginView}>
      <LoginHeader mode={mode} />
      <ModeToggle mode={mode} />

      <LoginForm
        errors={errors}
        mode={mode}
        loggedId={loggedId}
        isSubmitting={isSubmitting}
      />
      {mode === LOGIN_MODE.owner && <LoginNavigation />}
    </div>
  );
};

export default Login;
