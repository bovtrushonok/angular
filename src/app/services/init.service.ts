import { Injectable } from '@angular/core';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { IUserInfo, WishType } from '../interface';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class InitService {

  constructor(private authService: AuthService, private profileService: ProfileService){}

  public init(checkResult: IUserInfo): void {
    this.initSavingUserInfo(checkResult);
    this.authService.logIn();
  }

  private initSavingUserInfo(checkResult: IUserInfo): void {
    this.profileService.saveUserInfo(checkResult);
  }
}
