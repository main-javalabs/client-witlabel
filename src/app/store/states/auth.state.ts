

export interface AuthState {
  auth: any;
  user: any | null;
  token: string | null;

  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  auth: undefined
};

