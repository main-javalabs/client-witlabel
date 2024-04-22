import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { apiBaseUrl } from 'src/app/config/envs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = apiBaseUrl;

  constructor(private http: HttpClient) { }

  // Método para iniciar sesión
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      map(response => {
        // Guardar token de acceso en el almacenamiento local
        localStorage.setItem('token', response.token);
        return response.user;
      }),
      catchError(error => throwError(error))
    );
  }

  // Método para registrar un nuevo usuario
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user).pipe(
      catchError(error => throwError(error))
    );
  }

  // Método para cerrar sesión
  logout(): void {
    // Eliminar el token de acceso del almacenamiento local
    localStorage.removeItem('token');
  }

  // Método para recuperar contraseña
  recoverPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/recover-password`, { email }).pipe(
      catchError(error => throwError(error))
    );
  }

  // Método para actualizar el perfil del usuario
  updateProfile(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profile`, user).pipe(
      catchError(error => throwError(error))
    );
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    // Comprobar si existe un token de acceso en el almacenamiento local
    return !!localStorage.getItem('token');
  }

  // Método para obtener el token de acceso actual
  getAccessToken(): string | null {
    return localStorage.getItem('token');
  }

  // Método para verificar el código de reseteo de contraseña
  verifyResetCode(email: string, code: string): Observable<any> {
    // Implementación para verificar el código de reseteo de contraseña
    return this.http.post<any>(`${this.apiUrl}/verify-reset-code`, { email, code }).pipe(
      catchError(error => throwError(error))
    );
  }

  // Método para restablecer la contraseña
  resetPassword(email: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { email, newPassword }).pipe(
      catchError(error => throwError(error))
    );
  }
}
