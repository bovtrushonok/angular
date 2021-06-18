import { Component } from '@angular/core';
import { IWish } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent {

  constructor(public wishesService: WishesService) {}

}
