import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  public userInfo$: BehaviorSubject<IUserInfo> = new BehaviorSubject(this.userInfo);

  constructor() { }

  public saveUserInfo(userInfo: IUserInfo): void {
    this.userInfo = {...this.userInfo, ...userInfo};
    this.userInfo$.next(this.userInfo);
  }

  public getUserUnfo(): BehaviorSubject<IUserInfo> {
    return this.userInfo$;
  }
}
