import { Component, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { IWish } from '../interface';
import { WishesService } from '../services/wishes.service';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent {
  public searchText = '';
  @ViewChild(MatTabGroup) public matTab: MatTabGroup;

  constructor(public wishesService: WishesService) {}

  public deleteWish(currentWish: IWish): void {
    this.wishesService.deleteWish(currentWish);
  }

  public updateWishes(currentWish: IWish): void {
    this.wishesService.updateWishes(currentWish);
  }
}
