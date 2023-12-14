interface LoginPlaceHolders {
  [key: string]: string;
  id: string;
  save: string;
}

export interface FormPlaceHolders {
  [key: string]: LoginPlaceHolders;
  admin: LoginPlaceHolders;
  owner: LoginPlaceHolders;
}
