import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { statusExample } from '../constants/messages';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent {

  constructor(public profileService: ProfileService, private fb: FormBuilder, private router: Router) {}

  public profileEditForm = this.fb.group({
    userName: [this.profileService.userInfo.userName || '', Validators.required],
    userDescription: [this.profileService.userInfo.userDescription || statusExample],
    userPictureURL: [this.profileService.userInfo.userPictureURL || ''],
  });

  public onSubmit(): void {
    this.profileService.saveUserInfo(this.profileEditForm.value);
    this.router.navigateByUrl('main');
  }
}
