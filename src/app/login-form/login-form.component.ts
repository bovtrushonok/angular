import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import * as m from '../constants/messages';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  public constants = m;
  public submitError = false;
  @Output() logInEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UsersService, private router: Router) {}

  public LogInForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required,
      Validators.minLength(8)]]
  });

  public onSubmit(): void {
    if (this.userService.confirmCredentials(this.LogInForm.value)) {
      this.router.navigateByUrl('main');
    } else this.submitError = true;
  }

  public signUp(): void {
    this.router.navigateByUrl('sign-up');
  }

  public get name(): AbstractControl { return this.LogInForm.controls.name };
  public get password(): AbstractControl { return this.LogInForm.controls.password };
}
