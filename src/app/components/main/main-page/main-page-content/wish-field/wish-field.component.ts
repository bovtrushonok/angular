import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWish, WishType } from 'src/app/interface';
import { ProfileService } from 'src/app/services/profile.service';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent implements OnInit {
  public wishes: IWish[];

  constructor(public wishesService: WishesService, private route: ActivatedRoute,
              private profileService: ProfileService) {}

  ngOnInit(): void {
    const userId = this.profileService.getUserUnfo().userId;

    // if (this.wishes.length) return;
    this.route.data.subscribe(data => {
      this.wishes = data.wishes
        .filter((wish: IWish) => wish.userId === userId);
    });
  }

  public deleteWish(currentWish: IWish): void {
    this.wishesService.deleteWish(currentWish);
  }

  public updateWishes(currentWish: IWish): void {
    this.wishesService.updateWishes(currentWish);
  }
}
