import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public logOutEvent = new EventEmitter();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private router: Router) { }

  public editUserProfile(): void {
    this.router.navigateByUrl('main/edit-my-profile');
  }

  public logUserOut(): void {
    this.router.navigateByUrl('log-in');
  }
}
