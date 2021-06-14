import { Component, OnInit } from '@angular/core';
import { WishType } from '../../../../interface';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent implements OnInit {
  public state: WishType;

  ngOnInit() {
    this.state = WishType.myWishes;
  }

  public toggleState(type: WishType): void {
    this.state = type;
  }
}
