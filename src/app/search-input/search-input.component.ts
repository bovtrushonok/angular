import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWish } from 'src/app/interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent  {
  @Input() public wishes: IWish[];
  @Input() public search: string;
  @Output() updateSearchText = new EventEmitter<string>();
  public control = new FormControl();
  constructor() { }

  public updateText() {
    this.search = this.control.value;
    this.updateSearchText.emit(this.search);
  }
}
