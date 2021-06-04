import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WishesService } from '../services/wishes.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  public control = new FormControl();

<<<<<<< HEAD
  public updateText() {
    this.wishService.filterWishes(this.control.value);
=======
  constructor(public wishesService: WishesService) {}

  public updateText(): void {
    this.wishesService.filterWishes(this.control.value);
>>>>>>> routing
  }
}
