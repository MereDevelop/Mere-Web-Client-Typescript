import { useLoaderData } from 'react-router-dom';
import { LoaderData } from 'react-router-typesafe';

import Login from '@components/auth/login/Login';
import { LOGIN_MODE } from '@constants/auth/login';

const LoginPage = () => {
  const mode = useLoaderData() as LoaderData<typeof loader>;

  return <Login mode={mode} />;
};

export default LoginPage;

export function loader({ request }: { request: Request }): string {
  const params = new URL(request.url);
  const { searchParams } = params;
  const mode = searchParams.get('mode') || LOGIN_MODE.owner;

  return mode;
}
