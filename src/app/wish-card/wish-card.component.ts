import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IWish } from '../../interface';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent {
  @Input() wish: IWish;
  @Output() wishCardEvent = new EventEmitter<IWish>();

  constructor(public dialog: MatDialog) {}

  deleteWish() {
    this.wishCardEvent.emit(this.wish);
  }

  openDialog() {
    const modalRef = this.dialog.open(ModalWindowComponent, {
      width: '370px',
      maxWidth: '80%',
      height: '200px',
    });

    modalRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.deleteWish();
    })
  }
}
