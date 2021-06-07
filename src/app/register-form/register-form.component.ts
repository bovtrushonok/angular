import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as m from '../constants/messages';
import { PasswordMatchValidator } from '../directives/password-match.directive';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  public constants = m;
  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService){}

  public registerUserForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    userPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), PasswordMatchValidator]],
    birthDate: ['', [Validators.required,
      Validators.pattern(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)]],
  });

  public onSubmit(): void {
    this.usersService.addNewUser(this.registerUserForm.value);
    if (this.usersService.confirmCredentials(this.registerUserForm.value)) {
      this.router.navigateByUrl('main');
    }
  }

  public cancel(): void {
    this.router.navigateByUrl('log-in');
  }

  public get userName(): AbstractControl { return this.registerUserForm.controls.userName; }
  public get userPassword(): AbstractControl { return this.registerUserForm.controls.userPassword; }
  public get confirmPassword(): AbstractControl { return this.registerUserForm.controls
    .confirmPassword; }
  public get birthDate(): AbstractControl { return this.registerUserForm.controls.birthDate; }
}
