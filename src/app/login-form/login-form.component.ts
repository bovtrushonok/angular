import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  constructor(private fb: FormBuilder) {}

  public LogInForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required,
      Validators.minLength(8)]]
  })

  public onSubmit(): void {
    return console.log(this.LogInForm.value);
  }

  get name() { return this.LogInForm.controls.name}
  get password() { return this.LogInForm.controls.password}
}
