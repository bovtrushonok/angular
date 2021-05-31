import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { IWish } from '../interface';
import { WishesService } from '../services/wishes.service';
import { WishcardModalComponent } from '../wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent implements OnInit {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];
  public searchText: string = '';
  @ViewChild(MatTabGroup) public matTab: MatTabGroup;

  constructor(private wishService: WishesService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    //this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    //this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
    this.wishService.getWishes(myWishesURL).then(json => this.wishes = json);
    this.wishService.getWishes(friendWishesURL).then(json => this.friendWishes = json)
  }

  private detectWishID(currentWish: IWish): number {
    return this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
  }

  public deleteWish(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes.splice(wishIdx, 1);
    this.filteredWishes.splice(wishIdx, 1);
  }

  public updateWishes(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes[wishIdx] = currentWish;
  }

  public filter(value: string): void {
    this.filteredWishes = this.wishes.filter(wish => wish.title === value);
    if (this.filteredWishes.length === 0) this.filteredWishes[0] = null;
    if (!value) this.filteredWishes.length = 0;
    this.matTab.realignInkBar();
  }

  public openWishCardModal():void {
    const dialogRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '370px',
      panelClass: 'wish-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.wishes.push(result);
    });
  }

}
