import { create } from 'zustand';
// 각각의 인터페이스 정의
interface StoreInfo {
  storeName: string;
  storeTel: string;
  city: string;
  jibunAddress: string;
  detailAddress: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
}

interface OwnerInfo {
  representativeName: string;
  registrationNo: string;
  ownerName: string;
  ownerTel: string;
  accountBank: number;
  accountNum: string;
  accountPW: string;
}

export type SignupInfo = StoreInfo & OwnerInfo;

// SignupFormState 인터페이스는 이제 StoreInfo와 OwnerInfo를 포함합니다.
interface SignupFormState {
  storeInfo: StoreInfo;
  ownerInfo: OwnerInfo;
  setStoreInfo: (storeInfo: StoreInfo) => void;
  setOwnerInfo: (ownerInfo: OwnerInfo) => void;
  getSignupInfo: () => SignupInfo;
}

// Zustand 스토어 생성
export const signupForm = create<SignupFormState>((set, get) => ({
  storeInfo: {
    storeName: '',
    storeTel: '',
    city: '',
    jibunAddress: '',
    detailAddress: '',
    roadAddress: '',
    latitude: 0,
    longitude: 0,
  },
  ownerInfo: {
    representativeName: '',
    registrationNo: '',
    ownerName: '',
    ownerTel: '',
    accountBank: 0,
    accountNum: '',
    accountPW: '',
  },
  setStoreInfo: (storeInfo: StoreInfo) => set({ storeInfo }),
  setOwnerInfo: (ownerInfo: OwnerInfo) => set({ ownerInfo }),
  getSignupInfo: () => ({
    ...get().storeInfo,
    ...get().ownerInfo,
  }),
}));
