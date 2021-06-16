import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserInfo, IWish } from 'src/app/interface';
import { BirthdayService } from 'src/app/services/birthday.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-wish-details',
  templateUrl: './wish-details.component.html',
  styleUrls: ['./wish-details.component.scss']
})
export class WishDetailsComponent implements OnInit {
  public wish: IWish;
  public user: IUserInfo;
  public daysToBirthdayLeft: number;
  public date: string;

  constructor(private route: ActivatedRoute, private usersService: UsersService,
              private birthdayService: BirthdayService, private router: Router) {}

  ngOnInit(): void {
    this.wish = this.route.snapshot.data['wish'];
    this.user = this.usersService.getUserById(this.wish.userId);
    this.daysToBirthdayLeft = this.birthdayService.getDaysToBirthday(this.user.birthdate);
    this.date = this.birthdayService.getMonthAndDay(this.user.birthdate);
  }

  navigateToMain(): void {
    this.router.navigateByUrl('main/wishes');
  }

}
