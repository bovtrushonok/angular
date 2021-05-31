import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IWish } from '../interface';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { WishesService } from '../services/wishes.service';
import { WishcardModalComponent } from '../wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent implements OnChanges {
  @Input() public wish: IWish;
  @Input() public filteredWishes: IWish[];
  @Output() public wishCardDeleteEvent = new EventEmitter<IWish>();
  @Output() public wishCardEditEvent = new EventEmitter<IWish>();
  public isSelected: boolean = true;

  constructor(private dialog: MatDialog, public wishService: WishesService) {}

  private deleteWish(): void {
    this.wishService.deleteWish(this.wish);
  }

  public openModalToDelete(): void {
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

  public openModalToEdit():void {
    const modalRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '340px',
      data: this.wish,
    });

    modalRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.wish = result;
      this.wishService.updateWishes(this.wish)
    })
  }

  ngOnChanges(): void {
    if (this.filteredWishes.length === 0 || this.filteredWishes.includes(this.wish)) {
      this.isSelected = true;
    } else {
      this.isSelected = false;
    }
  }
}
