import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    //this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    //this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
    this.userService.getUsers();
   }
}
