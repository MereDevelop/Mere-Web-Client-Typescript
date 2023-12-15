import { json, redirect, useLoaderData } from 'react-router-dom';
import { LoaderData, useActionData } from 'react-router-typesafe';

import Login from '@components/auth/login/Login';
import { LOGIN_MODE } from '@constants/auth/login';
import { LoginForm } from '@custom/types/login/Login';
import { getDataInCookie } from '@utils/cookie';
import { EMPTY_DATA } from '@constants/global';
import { ErrorType } from '@custom/types/global';

const LoginPage = () => {
  const errors: ErrorType | undefined = useActionData<typeof action>();
  const { mode, loggedId } = useLoaderData() as LoaderData<typeof loader>;

  return <Login errors={errors} mode={mode} loggedId={loggedId} />;
};

export default LoginPage;

export function loader({ request }: { request: Request }) {
  const params = new URL(request.url);
  const { searchParams } = params;
  const mode: string = searchParams.get('mode') || LOGIN_MODE.owner;
  const loggedId = getDataInCookie(`${mode}LoggedId`);

  return { mode, loggedId };
}

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  const authForm: LoginForm = {
    id: data.get('id'),
    password: data.get('password'),
  };

  if (isEmptyForm(authForm)) {
    return {
      status: 400,
      message: '아이디 또는 비밀번호를 다시 확인해 주세요.',
    };
  }

  return redirect('/');
}

function isEmptyForm(authForm: LoginForm): boolean {
  return Object.values(authForm).every((authData) => authData === EMPTY_DATA);
}
