import { AccessTokenDTO } from '@custom/types/common/Token';
import client from '@services/client';
import { getRefreshToken } from '@utils/token';

export async function reIssueAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) window.location.href = '/';

  const response = await client
    .get<AccessTokenDTO>('/owner/update/access-token', {
      headers: {
        'Authorization-Refresh': refreshToken,
      },
    })
    .then((resData) => resData);

  return response;
}
