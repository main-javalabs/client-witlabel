import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as AuthActions from '../actions/auth.actions';
import { AuthService } from '../../modules/auth/service/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  // Efecto para solicitar un código de recuperación de contraseña
  requestPasswordReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.requestPasswordReset), // Se activa cuando se dispara la acción de solicitud de reinicio de contraseña
      mergeMap((action) =>
        this.authService.recoverPassword(action.email).pipe(
          map(() =>
            AuthActions.requestPasswordResetSuccess() // Acción para indicar que la solicitud de reinicio de contraseña fue exitosa
          ),
          catchError((error) =>
            of(AuthActions.requestPasswordResetFailure({ error: error.message })) // Acción para indicar un fallo en la solicitud de reinicio de contraseña
          )
        )
      )
    )
  );

  // Efecto para verificar el código de recuperación de contraseña
  verifyResetCode$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.verifyResetCode), // Se activa cuando se dispara la acción de verificación de código de reinicio de contraseña
      mergeMap((action) =>
        this.authService.verifyResetCode(action.email, action.code).pipe(
          map(() =>
            AuthActions.verifyResetCodeSuccess() // Acción para indicar que la verificación del código de reinicio de contraseña fue exitosa
          ),
          catchError((error) =>
            of(AuthActions.verifyResetCodeFailure({ error: error.message })) // Acción para indicar un fallo en la verificación del código de reinicio de contraseña
          )
        )
      )
    )
  );

  // Efecto para cambiar la contraseña
  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPassword), // Se activa cuando se dispara la acción de cambio de contraseña
      mergeMap((action) =>
        this.authService.resetPassword(action.email, action.password).pipe(
          map(() =>
            AuthActions.resetPasswordSuccess() // Acción para indicar que el cambio de contraseña fue exitoso
          ),
          catchError((error) =>
            of(AuthActions.resetPasswordFailure({ error: error.message })) // Acción para indicar un fallo en el cambio de contraseña
          )
        )
      )
    )
  );

  // Efecto para realizar el registro de un usuario
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerStart), // Se activa cuando se dispara la acción de registro
      mergeMap((action) =>
        this.authService.register(action.user).pipe(
          map((authResult) =>
            AuthActions.registerSuccess({ user: authResult })
          ),
          catchError((error) =>
            of(AuthActions.registerFailure({ error: error.message }))
          )
        )
      )
    )
  );

  // Efecto para realizar el inicio de sesión
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginStart), // Se activa cuando se dispara la acción de inicio de sesión
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  // Efecto para redirigir después de un registro exitoso
  registerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerSuccess), // Se activa cuando se completa exitosamente el registro
      tap(() => this.router.navigateByUrl('/register-success')) // Redirige a la ruta '/register-success'
    ),
    { dispatch: false } // No dispara ninguna acción después de este efecto
  );

  // Efecto para redirigir después de un inicio de sesión exitoso
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess), // Se activa cuando se completa exitosamente el inicio de sesión
      tap(({ user }) => {
        if (user.roles === 'admin') {
          // Si es administrador, redirige a la ruta '/admin'
          this.router.navigateByUrl('/admin/usuarios');
        } else {
          // Si es usuario normal, redirige a la ruta '/user'
          this.router.navigateByUrl('/User/proyecto');
        }
      })
    ),
    { dispatch: false } // No dispara ninguna acción después de este efecto
  );
}
