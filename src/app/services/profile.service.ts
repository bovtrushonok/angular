import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { statusExample } from '../constants/messages';
import { IUserInfo } from '../interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  public userInfo: IUserInfo = {
    userName: '',
    userDescription: '' || statusExample,
    userPictureURL: '',
    userId: 0,
  };
  constructor() { }

  public saveUserInfo(userInfo: IUserInfo): void {
    this.userInfo = userInfo;
  }

  public updateUserInfo(userInfo: IUserInfo): void {
   this.userInfo.userName = userInfo.userName;
   this.userInfo.userPictureURL = userInfo.userPictureURL;
   this.userInfo.userDescription = userInfo.userDescription || statusExample;
  }

  public getUserUnfo(): IUserInfo {
    return this.userInfo;
  }
}
