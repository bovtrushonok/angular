import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  public control = new FormControl();
  public value$: Observable<string>;

  constructor(public wishesService: WishesService) {}

  public ngOnInit(): void {
    this.value$ = this.control.valueChanges;
    this.wishesService.filterWishes(this.value$);
  }
}
