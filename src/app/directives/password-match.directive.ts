import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

export const PasswordMatchValidator: ValidatorFn = (control: AbstractControl): null | ValidationErrors => {
  const password = control.get('userPassword');
  const confirmPassword = control.get('confirmPassword');

  return (password && confirmPassword && password.value === confirmPassword.value) ?
    null : { passwordMismatch: true }
};

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    { provide: NG_VALIDATORS,
      useExisting: PasswordMatchValidatorDirective,
      multi: true
    }
  ]
})

export class PasswordMatchValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return PasswordMatchValidator(control);
  }
}
