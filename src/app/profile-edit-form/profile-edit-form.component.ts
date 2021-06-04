import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent {

  constructor(private userService: ProfileService, private fb: FormBuilder, private router: Router) {}

  public profileEditForm = this.fb.group({
    userName: [this.userService.userInfo.userName || '', Validators.required],
    userDescription: [this.userService.userInfo.userDescription || ''],
    userPictureURL: [this.userService.userInfo.userPictureURL || ''],
  });

  public onSubmit():void {
    this.router.navigateByUrl('main');
    this.userService.saveUserInfo(this.profileEditForm.value);
  }
}
