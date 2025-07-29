import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username: string = '';
  password: string = '';
  error: string = '';

  signupName: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  signupError: string = '';

  isSignUp: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  togglePanel(signUp: boolean) {
    this.isSignUp = signUp;
    this.error = '';
    this.signupError = '';
  }

  login() {
    if (!this.username || !this.password) {
      this.error = 'Por favor, completa todos los campos.';
      return;
    }
    this.error = '';
    const payload = { email: this.username, password: this.password };
    this.http.post<any>('http://34.70.174.29/api/login', payload)
      .subscribe({
        next: (response) => {
          // Guardar token, userId y equipos_id en localStorage si existen en la respuesta
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          if (response.id) {
            localStorage.setItem('userId', response.id.toString());
          }
          if (response.equipos_id) {
            localStorage.setItem('equipos_id', response.equipos_id.toString());
          }
          // Si la autenticación es exitosa, navega a /inicio
          this.router.navigate(['/inicio']);
        },
        error: (error: HttpErrorResponse) => {
          // Mensaje de error para credenciales inválidas u otros problemas
          if (error.status === 401) {
            this.error = 'Usuario o contraseña incorrectos.';
          } else {
            this.error = 'Ocurrió un error al iniciar sesión. Inténtalo nuevamente.';
          }
        }
      });
  }

  register() {
    if (!this.signupName || !this.signupEmail || !this.signupPassword) {
      this.signupError = 'Por favor, completa todos los campos.';
      return;
    }
    if (!/\S+@\S+\.\S+/.test(this.signupEmail)) {
      this.signupError = 'Dirección de correo electrónico no válida.';
      return;
    }
    if (this.signupPassword.length < 5) {
      this.signupError = 'La contraseña debe tener al menos 5 caracteres.';
      return;
    }
    this.signupError = '';
    // TODO: Replace with real registration logic
    alert(`Registrado como ${this.signupName} (${this.signupEmail})`);
    this.togglePanel(false);
  }
}
