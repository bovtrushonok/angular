import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { filter } from 'rxjs/operators';
import { myWishesURL } from '../constants/path';
import { IWish } from '../interface';
import { ProfileService } from './profile.service';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishesResolve implements Resolve<IWish[]> { 

  constructor(private wishesService: WishesService){}
  
  public resolve() {
    return this.wishesService.getMyWishes(myWishesURL);
  }
}
