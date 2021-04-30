import { Component } from '@angular/core';
import { IAppComponent } from 'src/interface';
import { wishes } from 'src/wishesList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements IAppComponent {
  wishes = wishes;
}
