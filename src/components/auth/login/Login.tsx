import { USER_TYPE } from '@constants/auth/login';
import '@styles/auth/login/Login.scss';

import LoginHeader from './LoginHeader';
import LoginForm, { LoginFormProps } from './LoginForm';
import LoginNavigation from './LoginNavigation';
import ModeToggle from './ModeToggle';

const Login: React.FC<LoginFormProps> = ({
  errors,
  userType,
  loggedId,
  isSubmitting,
}) => {
  const loginView =
    userType === USER_TYPE.admin
      ? 'login-container admin-view'
      : 'login-container';

  return (
    <div className={loginView}>
      <LoginHeader userType={userType} />
      <ModeToggle userType={userType} />

      <LoginForm
        errors={errors}
        userType={userType}
        loggedId={loggedId}
        isSubmitting={isSubmitting}
      />
      {userType === USER_TYPE.owner && <LoginNavigation />}
    </div>
  );
};

export default Login;
