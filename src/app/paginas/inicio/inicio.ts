import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteProyectosComponent } from '../../componentes/componente-proyectos/componente-proyectos';
import { Perfil } from '../perfil/perfil';
import { AdminUsuariosComponent } from '../usuarios/admin-usuarios.component';
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
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
  vista: 'perfil' | 'proyectos' | 'usuarios' = 'proyectos';

  cambiarVista(v: 'perfil' | 'proyectos' | 'usuarios') {
    this.vista = v;
  }
}