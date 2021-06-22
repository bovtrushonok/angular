import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUserInfo, IWish, WishType } from 'src/app/interface';
import { BirthdayService } from 'src/app/services/birthday.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-wish-details',
  templateUrl: './wish-details.component.html',
  styleUrls: ['./wish-details.component.scss']
})
export class WishDetailsComponent implements OnInit, OnDestroy {
  public wish: IWish;
  public user: IUserInfo;
  public daysToBirthdayLeft: number;
  public date: string;
  private unsubscribe$ = new Subject();

  constructor(private route: ActivatedRoute, private usersService: UsersService,
              private birthdayService: BirthdayService, private router: Router) {}

  ngOnInit(): void {
    this.route.snapshot.data.subscribe(data => this.wish = data.wish);
    this.usersService.getUserById(this.wish.userId).pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.user = data);
    this.daysToBirthdayLeft = this.birthdayService.getDaysToBirthday(this.user.birthdate);
    this.date = this.birthdayService.getMonthAndDay(this.user.birthdate);
  }

  public navigateToMain(): void {
    this.router.navigate(['main/wishes', WishType.myWishes]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
