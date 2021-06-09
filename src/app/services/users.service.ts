import { Injectable } from '@angular/core';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { ICredentials, IUserInfo, WishType } from '../interface';
import { ProfileService } from './profile.service';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: IUserInfo[];
  constructor(private profileService: ProfileService, private wishesService: WishesService) {}

  public async getUsers(): Promise<void> {
    const result = await fetch('../assets/userList.json');
    const data = await result.json();
    this.users = data;
  }

  public addNewUser(newUser: IUserInfo): void {
    if (!this.users.find(user => user.userName === newUser.userName)) {
      const user = {...this.users[this.users.length -1], ...newUser };
      user.userId += 1;
      this.users.push(user);
    }
  }

  public confirmCredentials(value: ICredentials): boolean {
    const checkResult = this.users.find((user) => user.userName === value.userName
      && user.userPassword === value.userPassword);

    if (checkResult) {
      this.profileService.saveUserInfo(checkResult);
      this.wishesService.getWishes(myWishesURL, WishType.myWishes,
        this.profileService.getUserUnfo().userId);
      this.wishesService.getWishes(friendWishesURL);
      return true;
    }
  
    return false;
  }
}
