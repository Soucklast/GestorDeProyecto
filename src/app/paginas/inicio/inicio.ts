import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteProyectosComponent } from '../../componentes/componente-proyectos/componente-proyectos';
import { Perfil } from '../perfil/perfil';
import { AdminUsuariosComponent } from '../usuarios/admin-usuarios.component';
import { ComponenteCalendarioComponent } from '../../componentes/componente-calendario/componente-calendario';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    ComponenteProyectosComponent,
    Perfil,
    AdminUsuariosComponent,
    ComponenteCalendarioComponent,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
  vista: 'perfil' | 'proyectos' | 'equipos' | 'calendario' = 'proyectos';

  rol: 'admin' | 'cliente' = 'cliente';

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const rolGuardado = localStorage.getItem('rol');
      if (rolGuardado === 'admin' || rolGuardado === 'cliente') {
        this.rol = rolGuardado;
      }
    }
  }

  cambiarVista(v: 'perfil' | 'proyectos' | 'equipos' | 'calendario') {
    this.vista = v;
  }


}