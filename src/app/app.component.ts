import { Component } from '@angular/core';
import { IWish } from 'src/interface';
import { friendWishes, wishes } from 'src/wishesList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public wishes: IWish[] | [] = wishes;
  public friendWishes: IWish[] | [] = friendWishes;
}
