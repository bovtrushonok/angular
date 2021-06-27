import { Component } from '@angular/core';
import { WishType } from 'src/app/interface';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent {
  public WishType = WishType;
}
