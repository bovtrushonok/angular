import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public isLoggedIn = false;

  constructor(private router: Router){}

  public logIn(): void {
    this.isLoggedIn = true;
  }

  public logOut(): void {
    this.isLoggedIn = false;
    this.router.navigateByUrl('log-in');
  }
}
