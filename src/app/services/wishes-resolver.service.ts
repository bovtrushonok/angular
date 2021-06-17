import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IWish } from '../interface';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishesResolve implements Resolve<IWish[]> {
  constructor(private wishesService: WishesService){}

  public resolve(route: ActivatedRouteSnapshot): Observable<IWish[]> {
    return this.wishesService.getWishes(route.paramMap.get('type'));
  }
}
