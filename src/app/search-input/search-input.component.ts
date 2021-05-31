import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IWish } from 'src/app/interface';
import { WishesService } from '../services/wishes.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Input() public wishes: IWish[];
  @Input() public search: string;
  @Output() updateSearchText = new EventEmitter<string>();
  public control = new FormControl();
  
  constructor(private wishService: WishesService) {}

  ngOnInit() {
    this.wishes = this.wishService.getCurrentWishes();
  }

  public updateText() {
    this.search = this.control.value;
    this.updateSearchText.emit(this.search);
  }
}
