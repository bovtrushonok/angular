import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IWish } from '../interface';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishDetailsResolver implements Resolve<IWish> {

  constructor(private wishesService: WishesService){}

  public resolve(route: ActivatedRouteSnapshot): Observable<IWish> {
    return this.wishesService.getWishById(+route.paramMap.get('id')).pipe(take(1));
  }
}
