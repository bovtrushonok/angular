import { Component, Input } from '@angular/core';
import { IWish } from '../../interface';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss']
})
export class WishCardComponent {
  @Input() wish: IWish;
}
