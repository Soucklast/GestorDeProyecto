import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteProyectosComponent } from '../../componentes/componente-proyectos/componente-proyectos';
import { Perfil } from '../perfil/perfil';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule, 
    ComponenteProyectosComponent, 
    Perfil,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
  vista: 'perfil' | 'proyectos' = 'proyectos';

  cambiarVista(v: 'perfil' | 'proyectos') {
    this.vista = v;
  }
}