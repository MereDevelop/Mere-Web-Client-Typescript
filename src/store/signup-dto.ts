import { create } from 'zustand';

interface StoreInfo {
  storeName: FormDataEntryValue | null;
  storeTel: FormDataEntryValue | null;
  jibunAddress: FormDataEntryValue | null;
  detailAddress: FormDataEntryValue | null;
}

interface OwnerInfo {
  ownerName: string | undefined;
  ownerTel: string | undefined;
  representativeName: string | undefined;
  registrationNo: string | undefined;
  accountPW: string | undefined;
  accountNum: string | undefined;
  accountBank: number | undefined;
}

interface SignupFormState {
  storeName: FormDataEntryValue | null;
  storeTel: FormDataEntryValue | null;
  city: string;
  jibunAddress: FormDataEntryValue | null;
  detailAddress: FormDataEntryValue | null;
  latitude: number;
  longitude: number;
  representativeName: string;
  registrationNo: string;
  ownerName: string;
  ownerTel: string;
  accountBank: number;
  accountNum: string;
  accountPW: string;
  setStoreInfo: (storeInfo: StoreInfo) => void;
  setOwnerInfo: (ownerInfo: OwnerInfo) => void;
}

export const signupForm = create<SignupFormState>((set) => ({
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
