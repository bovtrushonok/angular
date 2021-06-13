import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { myWishesURL } from '../constants/path';
import { IWish } from '../interface';
import { ProfileService } from './profile.service';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishesResolve { // implements Resolve<Observable<IWish[]>> 

  // constructor(private wishesService: WishesService, private profileService: ProfileService){}

  // public resolve() {
    // return this.wishesService.getMyWishes(myWishesURL, this.profileService.getUserUnfo().userId + '')
  // }
}
