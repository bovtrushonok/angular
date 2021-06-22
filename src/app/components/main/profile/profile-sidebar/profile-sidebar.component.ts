import { Component, OnDestroy, OnInit } from '@angular/core';
import { statusExample } from 'src/app/constants/messages';
import { GoogleImageSearch } from 'simple-google-image-search';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../../../../services/profile.service';
import { IUserInfo } from 'src/app/interface';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit, OnDestroy {
  public userInfo: IUserInfo;
  public statusExample = statusExample;
  public imgSrc: string;
  public userName: string;
  private unsubscribe$ = new Subject();
  private imageSearch = new GoogleImageSearch(environment.API, environment.searchKey);
  private searchKeywords: Array<string> = ['applefruit', 'cat', 'elephant', 'flower', 'rain', 'vacation'];

  constructor(public profileService: ProfileService) { }

  ngOnInit(): void {
    this.imageSearch.getImageUrl(this.getRandomKeyword()).then((res) => {
      this.imgSrc = res;
    });
    this.profileService.userInfo$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.userInfo = data);
  }

  private getRandomKeyword(): string {
    return this.searchKeywords[Math.floor(Math.random() * this.searchKeywords.length)];
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
