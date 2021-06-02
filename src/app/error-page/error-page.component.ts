import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error404Msg } from '../constants/messages';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  public errorMsg = error404Msg;
  constructor(private router: Router) {}

  public routeToMain(): void {
    this.router.navigateByUrl('main');
  }
}
