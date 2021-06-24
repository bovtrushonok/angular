import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { statusExample } from '../constants/messages';
import { IUserInfo } from '../interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private userInfo: IUserInfo = {
    userName: '',
    userDescription: statusExample,
    userPictureURL: '',
    userId: 0,
  };

  public userInfo$: BehaviorSubject<IUserInfo> = new BehaviorSubject(this.userInfo);

  constructor() { }

  public saveUserInfo(userInfo$: Observable<IUserInfo>): void {
    userInfo$.subscribe(this.userInfo$);
  }

  public updateUserInfo(userInfo: IUserInfo): void {
    this.userInfo$.pipe(map(user => user = {...user, ...userInfo}));
  }
}
