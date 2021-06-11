import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IWish, WishType } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent implements OnInit, OnChanges {
  @Input() state: WishType;
  public wishes: IWish[];

  constructor(public wishesService: WishesService) {}

  ngOnInit(): void {
    this.wishes = this.wishesService.wishes;
  }

  ngOnChanges(): void {
    this.wishes = (this.state===0) ? this.wishesService.wishes : this.wishesService.friendWishes;
  }

  public deleteWish(currentWish: IWish): void {
    this.wishesService.deleteWish(currentWish);
  }

  public updateWishes(currentWish: IWish): void {
    this.wishesService.updateWishes(currentWish);
  }
}
