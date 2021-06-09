import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IWish } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-wish-details',
  templateUrl: './wish-details.component.html',
  styleUrls: ['./wish-details.component.scss']
})
export class WishDetailsComponent implements OnInit {
  public wish: IWish

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.wish = this.route.snapshot.data['wish'];
  }

}
