import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WishType } from 'src/app/interface';
import * as m from '../../constants/messages';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  public constants = m;
  public submitError = false;

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {}

  public logInForm = this.fb.group({
    userName: ['', Validators.required],
    userPassword: ['', [Validators.required,
      Validators.minLength(8)]]
  });

  public onSubmit(): void {
    if (this.userService.confirmCredentials(this.logInForm.value)) {
      this.router.navigate(['main/wishes', WishType.myWishes]);
    } else this.submitError = true;
  }

  public signUp(): void {
    this.router.navigateByUrl('sign-up');
  }

  public get name(): AbstractControl { return this.logInForm.controls.userName; }
  public get password(): AbstractControl { return this.logInForm.controls.userPassword; }
}
