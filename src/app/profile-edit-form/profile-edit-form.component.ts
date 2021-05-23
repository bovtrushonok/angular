import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  public profileEditForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userDescription: new FormControl(''),
    userPictureURL: new FormControl(''),
  })

  public onSubmit():void {
    return this.userService.saveUserInfo(this.profileEditForm.value);
  }
}
