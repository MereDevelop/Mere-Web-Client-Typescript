interface LoginPlaceHolders {
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  [key: string]: LoginPlaceHolders;
  admin: LoginPlaceHolders;
  owner: LoginPlaceHolders;
}

export interface LoginFormData {
  [key: string]: FormDataEntryValue | null;
  id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}
