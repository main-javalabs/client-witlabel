import { createAction, props } from '@ngrx/store';

// Acciones relacionadas con la autenticación normal
export const verifyToken = createAction(
  '[Auth] Verify Token',
  props<{ token: string }>()
);

export const register = createAction(
  '[Auth] Register',
  props<{ username: string; email: string; password: string }>()
);

export const fetchCurrentUser = createAction('[Auth] Fetch Current User');

export const fetchCurrentUserSuccess = createAction(
  '[Auth] Fetch Current User Success',
  props<{ user: any }>()
);

export const fetchCurrentUserFailure = createAction(
  '[Auth] Fetch Current User Failure',
  props<{ error: any }>()
);

export const loginStart = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth API] Login Success',
  props<{ user: any }>()
);

export const loginFailure = createAction(
  '[Auth API] Login Failure',
  props<{ error: string }>()
);

export const loadCurrentUser = createAction('[Auth] Load Current User');

export const loadCurrentUserSuccess = createAction(
  '[Auth] Load Current User Success',
  props<{ user: any; token: string }>()
);

export const loadCurrentUserFailure = createAction(
  '[Auth] Load Current User Failure',
  props<{ error: any }>()
);

export const registerStart = createAction(
  '[Register Page] Register Start',
  props<{ user: any }>()
);

export const registerSuccess = createAction(
  '[Auth API] Register Success',
  props<{ user: any }>()
);

export const registerFailure = createAction(
  '[Auth API] Register Failure',
  props<{ error: string }>()
);

export const navigateToRegister = createAction(
  '[Auth] Navigate To Register'
);

// Acciones relacionadas con la recuperación de contraseña
export const requestPasswordReset = createAction(
  '[Auth] Request Password Reset',
  props<{ email: string }>()
);

export const requestPasswordResetSuccess = createAction(
  '[Auth] Request Password Reset Success'
);

export const requestPasswordResetFailure = createAction(
  '[Auth] Request Password Reset Failure',
  props<{ error: any }>()
);

export const verifyResetCode = createAction(
  '[Auth] Verify Reset Code',
  props<{ email: string; code: string }>()
);

export const verifyResetCodeSuccess = createAction(
  '[Auth] Verify Reset Code Success'
);

export const verifyResetCodeFailure = createAction(
  '[Auth] Verify Reset Code Failure',
  props<{ error: any }>()
);

export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ email: string; newPassword: string ;password:string}>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success'
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: any }>()
);
