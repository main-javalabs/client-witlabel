import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../../../../store/states/auth.state';
import * as AuthActions from '../../../../store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  modalActive: boolean = false;
  user: any;
  token: string | null = null; // Inicializamos token como null
  error$: Observable<string | null>;

  constructor(private formBuilder: FormBuilder, private store: Store<AuthState>) { 
    this.error$ = this.store.pipe(select(state => state.error));
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Suscribimos a la acción loginSuccess para obtener los detalles del usuario
    this.store.pipe(select(state => state.user)).subscribe(user => {
      this.user = user;
    });

    // Suscribimos a la acción loginSuccess para obtener el token de acceso
    this.store.pipe(select(state => state.token)).subscribe(token => {
      this.token = token;
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;
      this.store.dispatch(AuthActions.loginStart({ username, password }));
    }
  }

  redirectUser(): void {
    window.location.href = '/User/proyecto';
  }

  redirectAdmin(): void {
    window.location.href = '/admin/usuarios';
  }

  closeModal(): void {
    this.modalActive = false;
  }
}
