import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { IWish } from 'src/app/interface';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-wish-field',
  templateUrl: './wish-field.component.html',
  styleUrls: ['./wish-field.component.scss']
})
export class WishFieldComponent implements OnInit, OnDestroy {
  checkFilterBlock: TemplateRef<any>|null = null;
  private unsubscribe$ = new ReplaySubject();
  public wishes$: Observable<IWish[]>;

  constructor(public wishesService: WishesService, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.data.pipe(switchMap(wishes => this.wishes$ = of(wishes.wishes)),
      takeUntil(this.unsubscribe$)).subscribe();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  } 
}
