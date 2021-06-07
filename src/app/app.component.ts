import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    // this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    // this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
    this.userService.getUsers();
    this.router.navigateByUrl('log-in');
  }
}
