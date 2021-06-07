import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { IWish, WishType } from '../interface';
import { ProfileService } from '../services/profile.service';
import { WishesService } from '../services/wishes.service';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent implements OnInit {
  public searchText = '';
  @ViewChild(MatTabGroup) public matTab: MatTabGroup;

  constructor(public wishesService: WishesService, private profileService: ProfileService) {}

  ngOnInit(): void {
    // this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    // this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
     this.wishesService.getWishes(myWishesURL, WishType.myWishes, this.profileService.getUserUnfo().userId);
     this.wishesService.getWishes(friendWishesURL);
  }

  public deleteWish(currentWish: IWish): void {
    this.wishesService.deleteWish(currentWish);
  }

  public updateWishes(currentWish: IWish): void {
    this.wishesService.updateWishes(currentWish);
  }
}
