import { Component, OnInit } from '@angular/core';
import { statusExample } from 'src/app/constants/messages';
import { GoogleImageSearch } from 'simple-google-image-search';
import { environment } from 'src/environments/environment';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  public statusExample = statusExample;
  public imgSrc: string;
  public userName: string;
  private imageSearch = new GoogleImageSearch(environment.API, environment.searchKey);
  private searchKeywords: Array<string> = ['applefruit', 'cat', 'elephant', 'flower', 'rain', 'vacation']
  
  constructor(public userService: ProfileService) { }

  ngOnInit(): void {
    this.imageSearch.getImageUrl(this.getRandomKeyword()).then((res) => {
      this.imgSrc = res;
    })
  }

  private getRandomKeyword():string {
    return this.searchKeywords[Math.floor(Math.random() * this.searchKeywords.length)];
  }
}
