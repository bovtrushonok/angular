import { Injectable } from '@angular/core';
import { IUserInfo } from '../interface';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';

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
