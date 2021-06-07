import { Injectable } from '@angular/core';
import { ICredentials, IUserInfo } from '../interface';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: IUserInfo[];
  constructor(private profileService: ProfileService) {}

  public async getUsers(): Promise<void> {
    const result = await fetch('../assets/userList.json');
    const data = await result.json();
    this.users = data;
  }

  public confirmCredentials(value: ICredentials): boolean {
    const checkResult = this.users.find((user) => user.userName === value.name
      && user.userPassword === value.password);
    if (checkResult) {
      this.profileService.saveUserInfo(checkResult);
      return true;
    }
    return false;
  }
}
