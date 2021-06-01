import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWish, WishType } from 'src/app/interface';

@Injectable ({providedIn: 'root'})

export class WishesService {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];

  //constructor (private http: HttpClient) {}

  public async getWishes(path: string, type?: WishType ): Promise<void> {
    //return this.http.get<IWish[]>(path);
    const result = await fetch(path);
    const data = await result.json();
    if (type === WishType.myWishes) this.wishes = data;
    else this.friendWishes = data;
  }

  public getCurrentWishes() {
    return this.wishes;
  }

  private detectWishID(currentWish: IWish): number {
    return this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
  }

  public deleteWish(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes.splice(wishIdx, 1);
    this.filteredWishes.splice(wishIdx, 1);
  }

  public updateWishes(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes[wishIdx] = currentWish;
  }

  public filter(value: string): void {
    this.filteredWishes = this.wishes.filter(wish => wish.title === value);
    if (this.filteredWishes.length === 0) this.filteredWishes[0] = null;
    if (!value) this.filteredWishes.length = 0;
  }

  public addNewWish(value: IWish): void {
    this.wishes.push(value);
  }
}