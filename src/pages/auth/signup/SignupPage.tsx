import { Outlet, useNavigation } from 'react-router-dom';
import { useLoaderData } from 'react-router-typesafe';
import SignupStatus from '@components/auth/signup/SignupStatus';
import { SignupStatusType } from '@custom/types/signup/Signup';
import '@styles/auth/signup/SignupStatus.scss';

const SignupPage = () => {
  const currentStatus = useLoaderData<typeof loadCurrentStatus>(); // 현재 마지막 경로 반환
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className='signup-container'>
      <SignupStatus currentStatus={currentStatus} />
      <Outlet context={{ isSubmitting }} />
    </div>
  );
};

export default SignupPage;

export async function loadCurrentStatus({ request }: { request: Request }) {
  const { pathname } = new URL(request.url);
  const currentStatus = pathname.split('/').slice(-1)[0] as SignupStatusType;

  return currentStatus;
}
