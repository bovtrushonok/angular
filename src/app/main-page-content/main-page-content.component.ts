import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTabGroup } from '@angular/material/tabs';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { IWish, WishType } from '../interface';
import { WishesService } from '../services/wishes.service';
import { WishcardModalComponent } from '../wishcard-modal/wishcard-modal.component';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent implements OnInit {
  public searchText: string = '';
  @ViewChild(MatTabGroup) public matTab: MatTabGroup;

  constructor(public wishService: WishesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    //this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    //this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
     this.wishService.getWishes(myWishesURL, WishType.myWishes);
     this.wishService.getWishes(friendWishesURL);
  }

  public deleteWish(currentWish: IWish): void {
    this.wishService.deleteWish(currentWish);
  }

  public updateWishes(currentWish: IWish): void {
    this.wishService.updateWishes(currentWish);
  }

  public filter(value: string): void {
    this.wishService.filter(value);
    this.matTab.realignInkBar();
  }

  public openWishCardModal():void {
    const dialogRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '370px',
      panelClass: 'wish-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.wishService.addNewWish(result);
    });
  }

}
