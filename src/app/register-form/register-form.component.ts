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
    name: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required], Validators.minLength(8)],
    birthDate: ['', [Validators.required]],
  }, { validators: PasswordMatchValidator })

  public onSubmit() {
    this.usersService.users.push(this.registerUserForm.value);
    this.usersService.confirmCredentials(this.registerUserForm.value);
    this.router.navigateByUrl('main');
  }

  public cancel(): void {
    this.router.navigateByUrl('');
  }

  public get name(): AbstractControl { return this.registerUserForm.controls.name };
  public get password(): AbstractControl { return this.registerUserForm.controls.password };
  public get confirmPassword(): AbstractControl { return this.registerUserForm.controls
    .confirmPassword };
  public get birthDate(): AbstractControl { return this.registerUserForm.controls.birthDate };
}
