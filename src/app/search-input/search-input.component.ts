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
  
  constructor(public wishService: WishesService) {}

  public updateText() {
    this.wishService.filter(this.control.value);
  }
}
