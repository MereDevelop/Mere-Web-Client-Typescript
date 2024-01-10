export type UserType = 'owner' | 'admin';

interface UserPlaceHolders {
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  admin: UserPlaceHolders;
  owner: UserPlaceHolders;
}

interface BasicSignForm {
  password: FormDataEntryValue | null;
}

export interface LoginForm extends BasicSignForm {
  id: FormDataEntryValue | null;
}

export interface ChangePasswordForm extends BasicSignForm {
  id: string | undefined;
}
