import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class AdminUsuariosComponent implements OnInit {
  @Input() proyectos: any[] = [];
  @Input() proyectoSeleccionado: any = null;

  equipos: any[] = [];
  loadingEquipos: boolean = false;
  errorEquipos: string = '';

  allUsuarios: any[] = [];
  usuarioAAgregar: { [equipoId: number]: string } = {};
  agregandoUsuario: { [equipoId: number]: boolean } = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarEquiposUsuario();
  }

  cargarEquiposUsuario() {
    this.loadingEquipos = true;
    this.errorEquipos = '';
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.errorEquipos = 'No hay usuario autenticado.';
      this.loadingEquipos = false;
      return;
    }
    // Obtener todos los usuarios para encontrar los equipos del usuario actual
    this.http.get<any[]>('http://34.70.174.29/api/usuarios').subscribe(
      usuarios => {
        this.allUsuarios = usuarios;
        const usuario = usuarios.find(u => u.id == userId);
        if (!usuario || !usuario.equipos_id) {
          this.errorEquipos = 'No se encontraron equipos para este usuario.';
          this.loadingEquipos = false;
          return;
        }
        // equipos_id puede ser un array o un solo id
        let equiposIds: number[] = [];
        if (Array.isArray(usuario.equipos_id)) {
          equiposIds = usuario.equipos_id;
        } else if (usuario.equipos_id) {
          equiposIds = [usuario.equipos_id];
        }
        if (equiposIds.length === 0) {
          this.errorEquipos = 'No se encontraron equipos para este usuario.';
          this.loadingEquipos = false;
          return;
        }
        // Obtener los datos de cada equipo y sus integrantes
        const peticiones = equiposIds.map(id =>
          Promise.all([
            this.http.get<any>(`http://34.70.174.29/api/equipos/${id}`).toPromise(),
            this.http.get<any>(`http://34.70.174.29/api/equipos/${id}/usuarios`).toPromise()
          ]).then(([equipoRes, usuariosRes]) => {
            if (equipoRes && equipoRes.success && equipoRes.data) {
              return {
                ...equipoRes.data,
                integrantes: (usuariosRes && usuariosRes.success && Array.isArray(usuariosRes.data)) ? usuariosRes.data : []
              };
            }
            return null;
          })
        );
        Promise.all(peticiones)
          .then(equiposCompletos => {
            this.equipos = equiposCompletos.filter(e => !!e);
            this.loadingEquipos = false;
          })
          .catch(() => {
            this.errorEquipos = 'Error al cargar los equipos.';
            this.loadingEquipos = false;
          });
      },
      () => {
        this.errorEquipos = 'Error al obtener usuario.';
        this.loadingEquipos = false;
      }
    );
  }

  getUsuariosNoIntegrantes(equipo: any): any[] {
    if (!equipo || !this.allUsuarios) return [];
    const integrantesIds = (equipo.integrantes || []).map((u: any) => u.id);
    return this.allUsuarios.filter(u => !integrantesIds.includes(u.id));
  }

  agregarUsuarioAEquipo(equipo: any) {
    const usuarioId = this.usuarioAAgregar[equipo.id];
    if (!usuarioId) return;
    this.agregandoUsuario[equipo.id] = true;
    // Buscar el usuario y actualizar su equipos_id
    const usuario = this.allUsuarios.find(u => u.id == usuarioId);
    if (!usuario) {
      this.agregandoUsuario[equipo.id] = false;
      return;
    }
    // Si equipos_id es array, agregamos el id; si es número, lo convertimos a array
    let nuevosEquiposId: any;
    if (Array.isArray(usuario.equipos_id)) {
      nuevosEquiposId = [...usuario.equipos_id, equipo.id];
    } else if (usuario.equipos_id) {
      nuevosEquiposId = [usuario.equipos_id, equipo.id];
    } else {
      nuevosEquiposId = [equipo.id];
    }
    // Construir el body con todos los campos del usuario
    const body: any = {
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      imagen: usuario.imagen,
      equipos_id: nuevosEquiposId
    };
    // Solo incluir password si existe (no sobrescribir si no se cambia)
    if (usuario.password) {
      body.password = usuario.password;
    }
    this.http.put(`http://34.70.174.29/api/usuarios/${usuario.id}`, body).subscribe(
      () => {
        this.usuarioAAgregar[equipo.id] = '';
        this.agregandoUsuario[equipo.id] = false;
        this.cargarEquiposUsuario();
      },
      () => {
        this.agregandoUsuario[equipo.id] = false;
        alert('Error al agregar usuario al equipo');
      }
    );
  }
}
