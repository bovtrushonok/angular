import { Component, OnInit } from '@angular/core';
import { friendWishesURL, myWishesURL } from 'src/constants/path';
import { IWish } from 'src/interface';
import { getWishes } from './shared/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [getWishes]
})

export class AppComponent implements OnInit {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];
  public searchText: string = '';

  constructor(private wishService: getWishes) {}

  ngOnInit(): void {
    this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    this.wishService.getWishes(friendWishesURL)
      .subscribe(wishes => this.friendWishes = wishes);
  }

  deleteWish(currentWish: IWish): void {
    const wishIdx = this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
    this.wishes.splice(wishIdx, 1);
    this.filteredWishes.splice(wishIdx, 1);
  }

  filter(value: string): void {
    this.filteredWishes = this.wishes.filter(wish => wish.title === value);
  }
}
