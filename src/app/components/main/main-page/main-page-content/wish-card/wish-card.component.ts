import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IWish } from '../../../../../interface';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { WishesService } from 'src/app/services/wishes.service';
import { WishcardModalComponent } from './wishcard-modal/wishcard-modal.component';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent implements OnChanges {
  @Input() public wish: IWish;
  @Input() private filteredWishes: IWish[];
  public isSelected = true;
  private unsubscribe$ = new ReplaySubject();

  constructor(private dialog: MatDialog, public wishesService: WishesService, private router: Router) {}

  private deleteWish(): void {
    this.wishesService.deleteWish(this.wish);
  }

  private updateWish(): void {
    this.wishesService.updateWishes(this.wish);
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
    });
  }

  public openModalToEdit(): void {
    const modalRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '340px',
      data: this.wish,
    });

    modalRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.wish = result;
      this.updateWish();
    });
  }

  public ngOnChanges(): void {
    this.isSelected = !this.filteredWishes.length ||
      !!this.filteredWishes.find(wish => wish.id === this.wish.id)
  }

  public navigateToDetails(): void {
    this.router.navigate(['main/wish-details', this.wish.id]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  } 
}
