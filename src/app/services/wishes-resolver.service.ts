import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil, tap } from 'rxjs/operators';
import { IWish } from '../interface';
import { WishesService } from './wishes.service';

@Injectable({
  providedIn: 'root'
})

export class WishesResolver implements Resolve<IWish[]> {

  constructor(private wishesService: WishesService){}

  public resolve(route: ActivatedRouteSnapshot): Observable<IWish[]>{
    return this.wishesService.getWishes(route.params.type).pipe(take(1));
  }
}
