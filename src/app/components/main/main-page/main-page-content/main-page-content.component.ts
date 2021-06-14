import { Component, OnInit } from '@angular/core';
import { WishViewStateService } from 'src/app/services/wishview-state.service';
import { WishType } from '../../../../interface';

@Component({
  selector: 'app-main-page-content',
  templateUrl: './main-page-content.component.html',
  styleUrls: ['./main-page-content.component.scss']
})

export class MainPageContentComponent {

  constructor(public viewState: WishViewStateService){}

  public toggleState(type: WishType): void {
    this.viewState.toggleState(type);
  }
}
