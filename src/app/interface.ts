export interface IWish {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  id: number;
  userId: string;
}

export interface IAppComponent {
  wishes: Array<IWish>;
  friendWishes: Array<IWish>;
}

export interface IUserInfo {
  userName: string;
  userPassword?: string;
  userId?: number;
  userDescription?: string;
  userPictureURL?: string;
}

export interface ICredentials {
  name: string;
  password: string;
}

export const enum WishType {
  myWishes,
  friendWishes,
}
