import { Injectable } from '@angular/core';
import { ICredentials, IUserInfo, WishType } from '../interface';
import { InitService } from './init.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: IUserInfo[];
  constructor(private initService: InitService) {}

  public async getUsers(): Promise<void> {
    const result = await fetch('../assets/userList.json');
    const data = await result.json();
    this.users = data;
  }

  public addNewUser(newUser: IUserInfo): void {
    if (!this.users.find(user => user.userName === newUser.userName)) {
      const user = { ...this.users[this.users.length - 1], ...newUser };
      user.userId += 1;
      this.users.push(user);
    }
  }

  public confirmCredentials(value: ICredentials): boolean {
    const checkResult = this.users.find((user) => user.userName === value.userName
      && user.userPassword === value.userPassword);

    if (checkResult) {
      this.initService.init(checkResult);
      return true;
    }

    return false;
  }

  public getUserById(userId: number): IUserInfo {
    return this.users.find((user) => user.userId === +userId);
  }
}
