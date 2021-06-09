import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IWish } from '../interface';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishDetailsResolve implements Resolve<IWish> {
  public isLoggedIn = false;

  constructor(private wishesService: WishesService){}

  public resolve(route: ActivatedRouteSnapshot) {
    return this.wishesService.getWishById(+route.paramMap.get('id'));
  }
}
