import { Component, OnInit } from '@angular/core';
import { statusExample } from 'src/constants/messages';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.scss']
})
export class ProfileSidebarComponent implements OnInit {
  public statusExample = statusExample;

  constructor() { }

  ngOnInit(): void {
  }

}
