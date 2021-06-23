import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { IUserInfo, IWish, WishType } from 'src/app/interface';
import { BirthdayService } from 'src/app/services/birthday.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-wish-details',
  templateUrl: './wish-details.component.html',
  styleUrls: ['./wish-details.component.scss']
})
export class WishDetailsComponent implements OnInit, OnDestroy {
  public wish$: Observable<IWish>;
  public user$: Observable<IUserInfo>;
  public daysToBirthdayLeft$: Observable<number>;
  private unsubscribe$ = new ReplaySubject();

  constructor(private route: ActivatedRoute, private usersService: UsersService,
              private birthdayService: BirthdayService, private router: Router) {}

  ngOnInit(): void {
    this.route.data.pipe(switchMap(data => this.wish$ = of(data.wish))).subscribe();
    this.user$ = this.wish$.pipe(map((wish: IWish) => wish.userId),
      switchMap((userId: number) => this.usersService.getUserById(userId).pipe(takeUntil(this.unsubscribe$))));
    this.user$.pipe(switchMap(user => this.daysToBirthdayLeft$ = of(this.birthdayService.getDaysToBirthday(user.birthdate))),
      takeUntil(this.unsubscribe$)).subscribe();
  }

  public navigateToMain(): void {
    this.router.navigate(['main/wishes', WishType.myWishes]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
