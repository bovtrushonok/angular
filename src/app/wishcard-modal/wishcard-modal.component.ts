import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IWish } from 'src/interface';

@Component({
  selector: 'app-wishcard-modal',
  templateUrl: './wishcard-modal.component.html',
  styleUrls: ['./wishcard-modal.component.scss']
})

export class WishcardModalComponent implements OnInit {
  public wish: IWish = {
    title: '',
    description: '',
    id: 9,
    link: '',
    imgSrc: '',
    userId: '',
  };
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: IWish) {}

  ngOnInit() {
    if (this.data) this.wish = this.data;
  }
}
