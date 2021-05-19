import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { friendWishesURL, myWishesURL } from 'src/constants/path';
import { IWish } from 'src/interface';
import { WishesService } from './shared/get-data.service';
import { WishcardModalComponent } from './wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];
  public searchText: string = '';

  constructor(private wishService: WishesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    this.wishService.getWishes(friendWishesURL)
      .subscribe(wishes => this.friendWishes = wishes);
  }

  private detectWishID(currentWish: IWish): number {
    return this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
  }

  deleteWish(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes.splice(wishIdx, 1);
    this.filteredWishes.splice(wishIdx, 1);
  }

  updateWishes(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes[wishIdx] = currentWish;
  }

  filter(value: string): void {
    this.filteredWishes = this.wishes.filter(wish => wish.title === value);
  }

  openWishCardModal():void {
    const dialogRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '340px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.wishes.push(result);
    });
  }
}
