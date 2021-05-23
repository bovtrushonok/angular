import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) { }

  public openProfileModal(): void {
    this.dialog.open(ProfileModalComponent, {
      width: '30%',
      height: '370px',
    });
  }

}
