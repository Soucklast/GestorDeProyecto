import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class Perfil {
  usuario: any = null;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private router: Router) {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.http.get<any[]>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/usuarios').subscribe(
        (usuarios) => {
          const usuario = usuarios.find(u => u.id == userId);
          if (usuario) {
            this.usuario = usuario;
          }
          if (this.cdr && typeof this.cdr.detectChanges === 'function') {
            this.cdr.detectChanges();
          }
        },
        (error) => {
          // Manejo de error opcional
          this.usuario = null;
          if (this.cdr && typeof this.cdr.detectChanges === 'function') {
            this.cdr.detectChanges();
          }
        }
      );
    }
  }

  cerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
