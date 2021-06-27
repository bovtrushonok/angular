import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUserInfo, WishType } from 'src/app/interface';
import { statusExample } from '../../../../constants/messages';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  private userInfo: IUserInfo;
  public profileEditForm: FormGroup;

  constructor(public profileService: ProfileService, private fb: FormBuilder, private router: Router) {}

  public ngOnInit(): void {
    this.profileService.userInfo$.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.userInfo = data);

    this.profileEditForm = this.fb.group({
      userName: [this.userInfo.userName || '', Validators.required],
      userDescription: [this.userInfo.userDescription || statusExample],
      userPictureURL: [this.userInfo.userPictureURL || ''],
    });
  }

  public onSubmit(): void {
    this.profileService.updateUserInfo(this.profileEditForm.value);
    this.router.navigate(['main/wishes', WishType.myWishes]);
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
