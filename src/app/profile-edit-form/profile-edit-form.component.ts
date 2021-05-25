import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent {

  constructor(private userService: UsersService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public profileEditForm = this.fb.group({
    userName: [this.userService.userInfo.userName || '', Validators.required],
    userDescription: [this.userService.userInfo.userDescription || ''],
    userPictureURL: [this.userService.userInfo.userPictureURL || ''],
  })

  public onSubmit():void {
    return this.userService.saveUserInfo(this.profileEditForm.value);
  }
}
