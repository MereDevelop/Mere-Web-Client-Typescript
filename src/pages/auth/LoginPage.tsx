import { redirect, useNavigation } from 'react-router-dom';
import { useLoaderData, useActionData } from 'react-router-typesafe';

import Login from '@components/auth/login/Login';
import { USER_TYPE } from '@constants/auth/login';
import { FailureResponse } from '@services/crud';
import {
  UserType,
  LoginForm,
  LoginResponse,
  TokenResponse,
} from '@custom/types/login/Login';
import { requestSignIn } from '@services/auth/sign';
import { setAccessToken } from '@store/auth-store';
import { isFailureResponse } from '@utils/check';
import { getDataInCookie, setDataInCookie } from '@utils/cookie';

const LoginPage = () => {
  const errors: FailureResponse | undefined =
    useActionData<typeof loginAction>();
  const { userType, loggedId } = useLoaderData<typeof loadUserLoginData>();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Login
      errors={errors}
      userType={userType}
      loggedId={loggedId}
      isSubmitting={isSubmitting}
    />
  );
};

export default LoginPage;

export function loadUserLoginData({ request }: { request: Request }) {
  const params = new URL(request.url);
  const { searchParams } = params;
  const userType: string = searchParams.get('type') || USER_TYPE.owner;

  if (assertionUserType(userType)) {
    const loggedId = getDataInCookie(`${userType}LoggedId`);
    return { userType, loggedId };
  }

  // 해당 모드를 임의로 조작하는 경우 / 이동
  return redirect('/');
}

function assertionUserType(userType: string): userType is UserType {
  return userType === 'owner' || userType === 'admin';
}

export async function loginAction({
  request,
}: {
  request: Request;
}): Promise<FailureResponse | Response> {
  const data = await request.formData();

  const userType = data.get('userType') as string;
  const loginFormData: LoginForm = {
    id: data.get('id'),
    password: data.get('password'),
  };

  const response: LoginResponse | FailureResponse = await requestSignIn(
    userType,
    loginFormData,
  );

  if (isFailureResponse(response)) return response;
  await login(response.data);

  return redirect(`/${userType}`);
}

async function login(data: TokenResponse) {
  const { accessTokenDto, refreshTokenDto } = data;
  const { accessToken } = accessTokenDto;
  const { refreshToken } = refreshTokenDto;

  setAccessToken(accessToken);
  setDataInCookie('refreshToken', refreshToken);
}
