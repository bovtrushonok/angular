import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICredentials, IUserInfo } from '../interface';
import { InitService } from './init.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private users$: BehaviorSubject<IUserInfo[]>;
  public users: IUserInfo[];

  constructor(private initService: InitService) {}

  public async getUsers(): Promise<void> {
    const result = await fetch('../assets/userList.json');
    const data = await result.json();
    this.users$ = new BehaviorSubject<IUserInfo[]>(data);
    this.users = data;
  }

  private checkIfUsernameIsTaken(newUser: IUserInfo): boolean {
    let result: boolean;

    this.users$.pipe(map(users => users.find(user => user.userName === newUser.userName)))
      .subscribe(data => result = !data);

    return result;
  }

  public addNewUser(newUser: IUserInfo): void {
    if (this.checkIfUsernameIsTaken(newUser)) {
      const user = { ...this.users[this.users.length - 1], ...newUser };
      user.userId += 1;
      this.users.push(user);
      this.users$.next(this.users);
    }
  }

  public confirmCredentials(value: ICredentials): boolean {
    let checkResult: IUserInfo;

    const currentUser$ = this.users$.pipe(map(users => users.find((user) => user.userName === value.userName &&
      user.userPassword === value.userPassword)));

    currentUser$.subscribe(data => checkResult = data);

    if (checkResult) {
       this.initService.init(checkResult);
      return true;
    }

    return false;
  }

  public getUserById(userId: number): Observable<IUserInfo> {
    return this.users$.pipe(map(users => users.find((user) => user.userId === userId)));
  }
}
