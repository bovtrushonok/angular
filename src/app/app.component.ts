import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { friendWishesURL, myWishesURL } from './constants/path';
import { IWish } from 'src/app/interface';
import { WishesService } from './shared/wishes.service';
import { WishcardModalComponent } from './wishcard-modal/wishcard-modal.component';
import { UsersService } from './shared/users.service';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public wishes: IWish[] = [];
  public filteredWishes: IWish[] = [];
  public friendWishes: IWish[] | [] = [];
  public searchText: string = '';
  public isLoggedIn: boolean = false;
  @ViewChild(MatTabGroup) public matTab: MatTabGroup;

  constructor(private wishService: WishesService,
    private dialog: MatDialog, private userService: UsersService) {}

  ngOnInit(): void {
    //this.wishService.getWishes(myWishesURL).subscribe(wishes => this.wishes = wishes);
    //this.wishService.getWishes(friendWishesURL)
     // .subscribe(wishes => this.friendWishes = wishes);
    this.userService.getUsers();
    this.wishService.getWishes(myWishesURL).then(json => this.wishes = json);
    this.wishService.getWishes(friendWishesURL).then(json => this.friendWishes = json)
  }

  private detectWishID(currentWish: IWish): number {
    return this.wishes.findIndex((wish:IWish) => currentWish.id === wish.id);
  }

  public deleteWish(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes.splice(wishIdx, 1);
    this.filteredWishes.splice(wishIdx, 1);
  }

  public updateWishes(currentWish: IWish): void {
    const wishIdx = this.detectWishID(currentWish);
    this.wishes[wishIdx] = currentWish;
  }

  public filter(value: string): void {
    this.filteredWishes = this.wishes.filter(wish => wish.title === value);
    if (this.filteredWishes.length === 0) this.filteredWishes[0] = null;
    if (!value) this.filteredWishes.length = 0;
    this.matTab.realignInkBar();
  }

  public openWishCardModal():void {
    const dialogRef = this.dialog.open(WishcardModalComponent, {
      width: '30%',
      height: '370px',
      panelClass: 'wish-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.wishes.push(result);
    });
  }

  public logOut(): void {
    this.isLoggedIn = false;
  }

  public logIn(): void {
    this.isLoggedIn = true;
  }
}


