import { Injectable } from '@angular/core';
import { WishType } from '../interface';

@Injectable({
  providedIn: 'root'
})

export class WishViewStateService {
  public state: WishType = WishType.myWishes;

  public toggleState(type: WishType): void {
    this.state = type;
  }
}
