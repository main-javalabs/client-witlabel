import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import * as AuthActions from '../../../../store/actions/auth.actions';
import { AuthState } from '../../../../store/states/auth.state'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  error$ = of(null); // Observable para manejar errores
  showPasswordFields = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<{ auth: AuthState }>
  ) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  handleRegister(): void {
    this.showPasswordFields = true;
  }

  handleSubmit(): void {
    if (this.registrationForm.valid) {
      const password = this.registrationForm.get('password')!.value;
      const confirmPassword = this.registrationForm.get('confirmPassword')!.value;

      if (password !== confirmPassword) {
        this.error$ = of('Las contraseñas no coinciden.') as any; // Actualiza el observable de error
        return;
      }

      const name = this.registrationForm.get('name')!.value;
      const phone = this.registrationForm.get('phone')!.value;
      const email = this.registrationForm.get('email')!.value;

      // Despacha la acción registerStart con un objeto que contiene una propiedad 'user'
      this.store.dispatch(AuthActions.registerStart({ user: { name, phone, email, password } }));
    }
  }
}
