import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class AdminUsuariosComponent {
  @Input() proyectos: any[] = [];
  @Input() proyectoSeleccionado: any = null;

  get usuariosDelProyecto(): string[] {
    if (!this.proyectoSeleccionado || !this.proyectoSeleccionado.integrantes) return [];
    return this.proyectoSeleccionado.integrantes;
  }
}
