import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IWish } from '../../interface';
import { ModalWindowComponent } from '../modal-window/modal-window.component';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent implements OnChanges {
  @Input() public wish: IWish;
  @Input() public filteredWishes: IWish[];
  @Output() public wishCardEvent = new EventEmitter<IWish>();
  public isSelected: boolean = true;

  constructor(public dialog: MatDialog) {}

  deleteWish(): void {
    this.wishCardEvent.emit(this.wish);
  }

  openDialog(): void {
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

  ngOnChanges(): void {
    console.log('on changes', this.filteredWishes);
    if (this.filteredWishes.length === 0 || this.filteredWishes.includes(this.wish)) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }

}
