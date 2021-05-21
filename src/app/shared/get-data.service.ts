import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWish } from 'src/interface';

@Injectable ({providedIn: 'root'})

export class WishesService {
  //constructor (private http: HttpClient) {}

  public async getWishes(path: string): Promise<IWish[]> {
    //return this.http.get<IWish[]>(path);
    const result = await fetch(path);
    const data = await result.json();
    return data;
  }
}