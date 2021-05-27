import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as m from '../constants/messages';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  public constants = m;
  @Output() logInEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private userService: UsersService) {}

  public LogInForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required,
      Validators.minLength(8)]]
  })

  public onSubmit(): void {
    if (this.userService.confirmCredentials(this.LogInForm.value)) {
      this.logInEvent.emit(true);
    };
  }

  public get name() { return this.LogInForm.controls.name }
  public get password() { return this.LogInForm.controls.password }
}
