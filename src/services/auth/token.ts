import axios from 'axios';

import { SERVER_URL } from '@constants/api';
import { AccessTokenDTO } from '@custom/types/common/Token';
import {
  FailureResponse,
  SuccessResponse,
} from '@custom/types/common/Response';
import { getRefreshToken } from '@utils/token';

export async function reIssueAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) window.location.href = '/';

  const response = await axios
    .get<AccessTokenDTO>(`${SERVER_URL}/owner/update/access-token`, {
      headers: {
        'Authorization-Refresh': refreshToken,
      },
    })
    .then(
      (resData): SuccessResponse<AccessTokenDTO> => ({
        isSuccess: true,
        data: resData.data,
      }),
    )
    .catch((error): FailureResponse => error);

  return response;
}
