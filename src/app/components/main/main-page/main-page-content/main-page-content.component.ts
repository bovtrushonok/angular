import { Component } from '@angular/core';
import { WishType } from 'src/app/interface';
import { WishViewStateService } from 'src/app/services/wishview-state.service';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent {
  public WishType = WishType;

  constructor(public viewState: WishViewStateService){}

  public toggleState(type: WishType): void {
    this.viewState.toggleState(type);
  }
}
