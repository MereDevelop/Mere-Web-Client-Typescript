import { create } from 'zustand';

interface StoreInfo {
  storeName: string | undefined;
  storeTel: string | undefined;
  jibunAddress: string | undefined;
  detailAddress: string | undefined;
}

interface OwnerInfo {
  ownerName: string | undefined;
  ownerTel: string | undefined;
  representativeName: string | undefined;
  registrationNo: string | undefined;
  accountPW: string | undefined;
  accountNum: string | undefined;
  accountBank: string | undefined;
}

// city, latitude, longitude 추가해야함
export const signupForm = create((set) => ({
  storeName: '',
  storeTel: '',
  city: '',
  detailAddress: '',
  jibunAddress: '',
  latitude: 0,
  longitude: 0,
  representativeName: '',
  registrationNo: '',
  ownerName: '',
  ownerTel: '',
  accountBank: 0,
  accountNum: '',
  accountPW: '',
  setStoreInfo: (storeInfo: StoreInfo) =>
    set({
      storeName: storeInfo.storeName,
      storeTel: storeInfo.storeTel,
      jibunAddress: storeInfo.jibunAddress,
      detailAddress: storeInfo.detailAddress,
    }),
  setOwnerInfo: (ownerInfo: OwnerInfo) =>
    set({
      ownerName: ownerInfo.ownerName,
      ownerTel: ownerInfo.ownerTel,
      representativeName: ownerInfo.representativeName,
      registrationNo: ownerInfo.registrationNo,
      accountPW: ownerInfo.accountPW,
      accountNum: ownerInfo.accountNum,
      accountBank: ownerInfo.accountBank,
    }),
}));
