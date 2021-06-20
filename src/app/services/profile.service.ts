import { Injectable } from '@angular/core';
import { statusExample } from '../constants/messages';
import { IUserInfo } from '../interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  public userInfo: IUserInfo = {
    userName: '',
    userDescription: statusExample,
    userPictureURL: '',
    userId: 0,
  };
  constructor() { }

  public saveUserInfo(userInfo: IUserInfo): void {
    this.userInfo = {...this.userInfo, ...userInfo};
  }

  public getUserUnfo(): IUserInfo {
    return this.userInfo;
  }
}
