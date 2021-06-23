import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IWish, WishType } from 'src/app/interface';
import { friendWishesURL, myWishesURL } from '../constants/path';
import { ProfileService } from './profile.service';

@Injectable ({providedIn: 'root'})

export class WishesService {
  public wishes$: Observable<IWish[]>;
  public filteredWishes$: Observable<IWish[]>;
  public friendWishes$: Observable<IWish[]>;

  constructor(private http: HttpClient, private profileService: ProfileService) {}

  public setWishes(): void {
    this.wishes$ = this.profileService.userInfo$ 
      .pipe(map(user => user.userId), switchMap(userId =>
        this.http.get<IWish[]>(myWishesURL)
          .pipe(map(wishes => wishes.filter(wish => wish.userId === userId)))));
    
    this.friendWishes$ = this.http.get<IWish[]>(friendWishesURL);
  }

  public getWishes(type: WishType): Observable<IWish[]> {
    return (type == WishType.myWishes) ? this.wishes$ : this.friendWishes$;
  }

  public deleteWish(currentWish: IWish): void {
    this.wishes$ = this.wishes$.pipe(map(wishes => {
      const idx = wishes.findIndex(wish => wish.id === currentWish.id);
      return [...wishes.slice(0, idx), ...wishes.slice(idx+1)]
    }));
     // if (this.filteredWishes.length) this.filteredWishes[0] = null;
  }

  public updateWishes(currentWish: IWish): void {
    this.wishes$ = this.wishes$.pipe(map((wishes => wishes.map(wish => {
      if (wish.id = currentWish.id) return currentWish;
      return wish;
    }))));
  }

  public filterWishes(seacrhResult: string): void {
    this.filteredWishes$ = this.wishes$
      .pipe(map(wishes => {
        if (!seacrhResult) return [];
        const filteredArr = wishes.filter(wish => wish.title === seacrhResult)
        return (filteredArr.length) ? filteredArr : [null];
      }));
  }

  public addNewWish(value: IWish): void {
    this.wishes$ = this.wishes$.pipe(map(wishes => wishes = [...wishes, value]));
  }

  public getWishById(id: number): Observable<IWish> {
    return this.wishes$
      .pipe(map(wishes => wishes.find((wish: IWish) => wish.id === id)));
  }
}
