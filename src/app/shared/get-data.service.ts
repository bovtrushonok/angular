import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWish } from 'src/interface';

@Injectable ()

export class getWishes {
  constructor (private http: HttpClient) {}

  public getWishes(path: string): Observable<IWish[]> {
    return this.http.get<IWish[]>(path);
  }
}