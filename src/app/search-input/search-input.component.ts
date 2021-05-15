import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWish } from 'src/interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  @Input() wishes: IWish[];
  @Input() search: string;
  @Output() updateSearchText = new EventEmitter<string>();
  control = new FormControl();
  constructor() { }

  updateText() {
    this.search = this.control.value;
    this.updateSearchText.emit(this.search);
  }
}
