import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWish, WishType } from 'src/app/interface';
import { WishViewStateService } from './wishview-state.service';

@Injectable ({providedIn: 'root'})

export class WishesService {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];

  constructor (private http: HttpClient, private viewState: WishViewStateService) {}

  public async getWishes(path: string, type?: WishType, userId?: number ): Promise<void> {
    const result = await fetch(path);
    const data = await result.json();
    if (type === WishType.myWishes) this.wishes = data.filter(wish => wish.userId === userId);
    else this.friendWishes = data;
  }

  public getMyWishes(path: string): Observable<IWish[]> {
    return this.http.get<IWish[]>(path);
  }

  public getCurrentWishes(type?: WishType): IWish[] {
    return (type === WishType.myWishes) ? this.wishes : this.friendWishes;
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
    this.filteredWishes = (this.viewState.state === WishType.myWishes) ? 
      this.wishes.filter((wish: IWish) => wish.title === seacrhResult) :
      this.friendWishes.filter((wish: IWish) => wish.title === seacrhResult);
    if (!this.filteredWishes.length) this.filteredWishes[0] = null;
    if (!seacrhResult) this.filteredWishes = [];
  }

  public addNewWish(value: IWish): void {
    this.wishes.push(value);
  }

  public getWishById(id: number): IWish {
    return (this.viewState.state === WishType.myWishes) ? this.wishes.find(wish => wish.id === id) :
    this.friendWishes.find(wish => wish.id === id);
  }
}
