import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IWish } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent implements OnInit /* , OnDestroy */ {
  private unsubscribe$ = new Subject();
  public wishes$: Observable<IWish[]>;

  constructor(public wishesService: WishesService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.pipe(switchMap(wishes => this.wishes$ = of(wishes.wishes)), takeUntil(this.unsubscribe$)).subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  } 
}
