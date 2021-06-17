import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWish, WishType } from 'src/app/interface';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { ProfileService } from './profile.service';

@Injectable ({providedIn: 'root'})

export class WishesService {
  public wishes: IWish[] = [];
  public wishes$: Observable<IWish[]>;
  public filteredWishes: IWish[] = [];
  public filteredWishes$: Observable<IWish[]>;
  public friendWishes: IWish[] | [] = [];

  constructor(private http: HttpClient, private profileService: ProfileService) {}

  /* public async getAllWishes(path: string, type?: WishType, userId?: number ): Promise<void> {
    const result = await fetch(path);
    const data = await result.json();
    if (type === WishType.myWishes) this.wishes = data.filter(wish => wish.userId === userId);
    else this.friendWishes = data;
  } */

  public getWishes(type: string): Observable<IWish[]> {
    const userId = this.profileService.getUserUnfo().userId;
 
    this.wishes$ = (type === 'my-wishes') ? 
      this.http.get<IWish[]>(myWishesURL)
        .pipe(map(wishes => wishes.filter(wish => wish.userId === userId))) :
      this.http.get<IWish[]>(friendWishesURL);
  
    return this.wishes$;
  }

  private detectWishID(currentWish: IWish): number {
    return this.wishes.findIndex((wish: IWish) => currentWish.id === wish.id);
  }

  public deleteWish(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes.splice(wishIdx, 1);
    if (this.filteredWishes.length) this.filteredWishes[0] = null;
  }

  public updateWishes(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes[wishIdx] = currentWish;
  }

  public filterWishes(seacrhResult: string): void {
    this.filteredWishes$ = this.wishes$
      .pipe(map(wishes => wishes.filter(wish => wish.title === seacrhResult)));
  }

  public addNewWish(value: IWish): void {
    this.wishes.push(value);
  }

  public getWishById(id: number): Observable<IWish> {
    return this.wishes$
      .pipe(map(wishes => wishes.find((wish: IWish) => wish.id === id)));
  }
}
