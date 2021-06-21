import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public logOutEvent = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private router: Router, private authService: AuthService) { }

  public editUserProfile(): void {
    this.router.navigateByUrl('main/edit-my-profile');
  }

  public logUserOut(): void {
    this.authService.logOut();
  }
}
