import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() public isLoggedIn: boolean;
  @Output() public logOutEvent = new EventEmitter<boolean>();
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(private dialog: MatDialog) { }

  public openProfileModal(): void {
    const dialogRef = this.dialog.open(ProfileModalComponent, {
      width: '30%',
      height: '370px',
      restoreFocus: false,
    });

    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  public logUserOut(): void {
    this.isLoggedIn = !this.isLoggedIn;
    console.log(this.isLoggedIn);
    this.logOutEvent.emit(this.isLoggedIn);
  }
}
