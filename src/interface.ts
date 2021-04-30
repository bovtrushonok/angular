export interface IWish {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
}

export interface IAppComponent {
  wishes: Array<IWish>;
}
