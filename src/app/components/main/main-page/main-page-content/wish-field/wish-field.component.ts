import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { IWish } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent implements OnInit /* , OnDestroy */ {
  // private unsubscribe$ = new Subject();
  // private wishes: IWish[];
  public wishes$: Observable<IWish[]>;

  constructor(public wishesService: WishesService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.wishes$ = this.wishesService.getWishes(this.route.snapshot.params.type);
    // this.wishes$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.wishes = data);
  }

  /* public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  } */
}
