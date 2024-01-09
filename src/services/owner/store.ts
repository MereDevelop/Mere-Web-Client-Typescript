import { CustomError } from '@custom/types/response';
import axios from '@services/config';

export async function getStoreOperationStatus() {
  const response = await axios({
    method: 'get',
    url: '/owner/store/status',
  })
    .then((resData) => resData)
    .catch((error): CustomError => error);

  return response;
}

export async function requestOpenOperationStatus() {
  const response = await axios({
    method: 'post',
    url: '/owner/store/close',
  })
    .then((resData) => resData)
    .catch((error): CustomError => error);

  return response;
}

export async function requestCloseOperationStatus() {
  const response = await axios({
    method: 'post',
    url: '/owner/store/close',
  })
    .then((resData) => resData)
    .catch((error): CustomError => error);

  return response;
}
