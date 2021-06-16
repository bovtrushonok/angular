import { Component } from '@angular/core';
import { emptyFieldMsg } from 'src/app/constants/messages';

@Component({
  selector: 'app-empty-field',
  templateUrl: './empty-field.component.html',
  styleUrls: ['./empty-field.component.scss']
})
export class EmptyFieldComponent {
  public emptyFieldMsg = emptyFieldMsg;
}
