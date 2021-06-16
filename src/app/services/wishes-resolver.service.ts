import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { myWishesURL } from '../constants/path';
import { IWish } from '../interface';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishesResolve implements Resolve<IWish[]> {
  constructor(private wishesService: WishesService){}

  public resolve(): Observable<IWish[]> {
    return this.wishesService.getMyWishes(myWishesURL);
  }
}
