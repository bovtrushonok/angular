import { Component, OnInit } from '@angular/core';
import { IWish } from 'src/interface';
import { getWishes } from './shared/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public wishes: IWish[];
  public friendWishes: IWish[] | [] = [];

  constructor(private wishService: getWishes) {}

  ngOnInit() {
    this.wishService.getWishes('../assets/myWishes.json').subscribe(wishes => {
      this.wishes = wishes;
    });;
  }

  deleteWish(currentWish: IWish) {
    const wishIdx = this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
    this.wishes.splice(wishIdx, 1);
  }
}
