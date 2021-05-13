import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IWish } from 'src/interface';
import { friendWishes, wishes } from 'src/wishesList';
import { ModalWindowComponent } from './modal-window/modal-window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public wishes: IWish[] | [] = wishes;
  public friendWishes: IWish[] | [] = friendWishes;

  constructor(public dialog: MatDialog) {}

  openDialog(currentWish: IWish) {
    const modalRef = this.dialog.open(ModalWindowComponent, {
      width: '370px',
      maxWidth: '80%',
      height: '200px',
    });

    modalRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.deleteWish(currentWish);
    })
  }

  deleteWish(currentWish: IWish) {
    const wishIdx = this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
    wishes.splice(wishIdx, 1);
  }
}
