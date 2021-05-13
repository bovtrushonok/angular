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
