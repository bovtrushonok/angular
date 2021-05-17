import { Component, OnInit } from '@angular/core';
import { statusExample } from 'src/constants/messages';
import { GoogleImageSearch } from 'simple-google-image-search';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  public statusExample = statusExample;
  public imgSrc: string;
  private imageSearch = new GoogleImageSearch(environment.API, environment.searchKey);
  private searchKeywords: Array<string> = ['applefruit', 'cat', 'elephant', 'flower', 'rain', 'vacation']
  constructor() { }

  ngOnInit(): void {
    this.imageSearch.getImageUrl(this.getRandomKeyword()).then((res) => {
      this.imgSrc = res;
    })
  }

  getRandomKeyword():string {
    return this.searchKeywords[Math.floor(Math.random() * this.searchKeywords.length)];
  }
}
