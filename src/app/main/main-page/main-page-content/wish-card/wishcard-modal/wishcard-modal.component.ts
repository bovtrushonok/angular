import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { wishFormMsg } from 'src/app/constants/messages';
import { IWish } from 'src/app/interface';

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

  public wishFormMsg: string = wishFormMsg;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IWish) {}

  ngOnInit(): void {
    if (this.data) this.wish = this.data;
  }
}
