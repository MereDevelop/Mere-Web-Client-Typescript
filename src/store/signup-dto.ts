import { create } from 'zustand';

interface StoreInfo {
  storeName: FormDataEntryValue | null;
  storeTel: FormDataEntryValue | null;
  jibunAddress: FormDataEntryValue | null;
  detailAddress: FormDataEntryValue | null;
}

interface OwnerInfo {
  ownerName: FormDataEntryValue | null;
  ownerTel: FormDataEntryValue | null;
  representativeName: FormDataEntryValue | null;
  registrationNo: FormDataEntryValue | null;
  accountPW: FormDataEntryValue | null;
  accountNum: FormDataEntryValue | null;
  accountBank: FormDataEntryValue | null;
}

interface SignupFormState {
  storeName: FormDataEntryValue | null;
  storeTel: FormDataEntryValue | null;
  city: string;
  jibunAddress: FormDataEntryValue | null;
  detailAddress: FormDataEntryValue | null;
  latitude: number;
  longitude: number;
  representativeName: FormDataEntryValue | null;
  registrationNo: FormDataEntryValue | null;
  ownerName: FormDataEntryValue | null;
  ownerTel: FormDataEntryValue | null;
  accountBank: FormDataEntryValue | number | null;
  accountNum: FormDataEntryValue | null;
  accountPW: FormDataEntryValue | null;
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
