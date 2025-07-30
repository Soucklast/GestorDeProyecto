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
    this.http.post<any>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/login', payload)
      .subscribe({
        next: (response) => {
          // Guardar token, userId, equipos_id y rol en localStorage si existen en la respuesta
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          if (response.id) {
            localStorage.setItem('userId', response.id.toString());
          }
          if (response.equipos_id) {
            localStorage.setItem('equipos_id', response.equipos_id.toString());
            localStorage.setItem('equipo_activo_id', response.equipos_id.toString());
          } else {
            // Si no viene equipo activo, limpiar cualquier valor previo
            localStorage.removeItem('equipos_id');
            localStorage.removeItem('equipo_activo_id');
          }
          if (response.rol) {
            localStorage.setItem('rol', response.rol);
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
    const payload: any = {
      nombre: this.signupName,
      email: this.signupEmail,
      password: this.signupPassword,
      rol: 'admin',
      imagen: null,
      equipo_activo_id: null
    };
    this.http.post<any>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/usuarios', payload).subscribe({
      next: (resp) => {
        if (resp.success) {
          if (resp.data && resp.data.rol) {
            localStorage.setItem('rol', resp.data.rol);
          }
          alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
          this.togglePanel(false);
        } else {
          this.signupError = 'No se pudo registrar el usuario.';
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 409) {
          this.signupError = 'El correo ya está registrado.';
        } else {
          this.signupError = 'Ocurrió un error al registrar. Inténtalo nuevamente.';
        }
      }
    });
  }
}
