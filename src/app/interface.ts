export interface IWish {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  id: number;
  userId: number;
}

export interface IAppComponent {
  wishes: Array<IWish>;
  friendWishes: Array<IWish>;
}

export interface IUserInfo {
  userName: string;
  userPassword?: string;
  confirmPassword?: string;
  userId?: number;
  userDescription?: string;
  userPictureURL?: string;
  birthdate?: string;
}

export interface ICredentials {
  userName: string;
  userPassword: string;
}

export enum WishType {
  myWishes = "my-wishes",
  friendWishes = "friend-wishes",
}
