import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../../../../store/states/auth.state';
import * as AuthActions from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  passwordRecoveryForm!: FormGroup;
  requestingCode: boolean = false;
  verifyingCode: boolean = false;
  resetPasswordError$: Observable<string | null>; // Observable para manejar errores

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AuthState>
  ) {
    this.resetPasswordError$ = this.store.select(state => state.auth.error);
  }

  ngOnInit(): void {
    this.passwordRecoveryForm = this.formBuilder.group({
      username: ['', Validators.required],
      verificationCode: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  handleRequestCode(): void {
    if (this.passwordRecoveryForm.controls['username'].invalid) {
      this.passwordRecoveryForm.controls['username'].markAsTouched(); // Marca el campo como "tocado" para mostrar los mensajes de error
      return;
    }
    this.requestingCode = true;
    // Dispara la acción para solicitar el código de verificación
    const email = this.passwordRecoveryForm.controls['username'].value;
    this.store.dispatch(AuthActions.resetPassword({
      email,
      newPassword: '',
      password: ''
    }));

  }

  handleVerifyCode(): void {
    if (this.passwordRecoveryForm.controls['verificationCode'].invalid) {
      this.passwordRecoveryForm.controls['verificationCode'].markAsTouched();
      return;
    }
    this.verifyingCode = true;
    // Lógica para verificar el código de verificación
  }

  handleChangePassword(): void {
    const newPasswordControl = this.passwordRecoveryForm.controls['newPassword'];
    const confirmPasswordControl = this.passwordRecoveryForm.controls['confirmPassword'];

    if (newPasswordControl.invalid || confirmPasswordControl.invalid || newPasswordControl.value !== confirmPasswordControl.value) {
      newPasswordControl.markAsTouched();
      confirmPasswordControl.markAsTouched();
      return;
    }
    // Lógica para cambiar la contraseña
    const email = this.passwordRecoveryForm.controls['username'].value;
    const newPassword = newPasswordControl.value;
    this.store.dispatch(AuthActions.resetPassword({
      email, newPassword,
      password: ''
    }));
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('/login');
  }
}
