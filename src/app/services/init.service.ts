import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from '../interface';
import { AuthService } from './auth.service';
import { ProfileService } from './profile.service';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class InitService {

  constructor(private authService: AuthService, private profileService: ProfileService,
              private wishesService: WishesService){}

  public init(currentUser$: Observable<IUserInfo>): void {
    this.profileService.saveUserInfo(currentUser$);
    this.wishesService.setWishes();
    this.authService.logIn();
  }
}
