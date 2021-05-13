import { Component, Input } from '@angular/core';
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

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalWindowComponent, {
      width: '370px',
      maxWidth: '80%',
      height: '200px',
    });
  }
}
