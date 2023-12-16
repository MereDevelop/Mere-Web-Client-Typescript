import { redirect, useLoaderData, useNavigation } from 'react-router-dom';
import { LoaderData, useActionData } from 'react-router-typesafe';

import Login from '@components/auth/login/Login';
import { LOGIN_MODE } from '@constants/auth/login';
import { CustomError } from '@custom/types/response';
import { LoginFormData, LoginResponse } from '@custom/types/login/Login';
import { requestSignIn } from '@services/auth/sign';
import { isCustomError } from '@utils/check';
import { getDataInCookie } from '@utils/cookie';

const LoginPage = () => {
  const errors: CustomError | undefined = useActionData<typeof action>();
  const { mode, loggedId } = useLoaderData() as LoaderData<typeof loader>;
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Login
      errors={errors}
      mode={mode}
      loggedId={loggedId}
      isSubmitting={isSubmitting}
    />
  );
};

export default LoginPage;

export function loader({ request }: { request: Request }) {
  const params = new URL(request.url);
  const { searchParams } = params;
  const mode: string = searchParams.get('mode') || LOGIN_MODE.owner;
  const loggedId = getDataInCookie(`${mode}LoggedId`);

  return { mode, loggedId };
}

export async function action({
  request,
}: {
  request: Request;
}): Promise<CustomError | Response> {
  const data = await request.formData();

  const loginFormData: LoginFormData = {
    id: data.get('id'),
    password: data.get('password'),
  };

  const response: LoginResponse | CustomError = await requestSignIn(
    loginFormData,
  );

  if (isCustomError(response)) return response;
  return redirect('/');
}
