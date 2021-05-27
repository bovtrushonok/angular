import { Injectable } from '@angular/core';
import { ICredentials, IUserInfo } from '../interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public users: IUserInfo[];
  constructor() { }

  public async getUsers() {
    const result = await fetch('../assets/userList.json');
    const data = await result.json();
    this.users = data;
  }

  public confirmCredentials(value: ICredentials): boolean {
    const checkResult = this.users.filter((user) => user.userName === value.name && user.userPassword === value.password);
    if (checkResult.length > 0) return true;
    return false;
  }
}
