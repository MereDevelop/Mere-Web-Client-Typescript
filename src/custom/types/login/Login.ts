export type UserType = 'owner' | 'admin';

interface UserPlaceHolders {
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  admin: UserPlaceHolders;
  owner: UserPlaceHolders;
}
