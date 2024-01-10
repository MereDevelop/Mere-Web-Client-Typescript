import client from '@services/config';

export async function requestStoreOperationStatus() {
  const response = await client
    .get<boolean>('/owner/store/status')
    .then((resData) => resData);

  return response;
}

export async function requestChangeOperationStatus(isOpen: boolean) {
  console.log(`/owner/store/${isOpen ? 'close' : 'open'}`);
  const response = await client
    .post<boolean>(`/owner/store/${isOpen ? 'close' : 'open'}`)
    .then((resData) => resData);

  return response;
}
