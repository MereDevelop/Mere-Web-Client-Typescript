import { useLoaderData } from 'react-router-dom';
import { LoaderData } from 'react-router-typesafe';

import Login from '@components/auth/login/Login';
import { LOGIN_MODE } from '@constants/auth/login';
import { getDataInCookie } from '@utils/cookie';

const LoginPage = () => {
  const { mode, loggedId } = useLoaderData() as LoaderData<typeof loader>;

  return <Login mode={mode} loggedId={loggedId} />;
};

export default LoginPage;

export function loader({ request }: { request: Request }) {
  const params = new URL(request.url);
  const { searchParams } = params;
  const mode: string = searchParams.get('mode') || LOGIN_MODE.owner;
  const loggedId = getDataInCookie(`${mode}loggedId`);

  return { mode, loggedId };
}
