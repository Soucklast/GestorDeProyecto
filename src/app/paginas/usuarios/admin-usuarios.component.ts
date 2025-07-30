

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatSelectModule, MatIconModule]
})
export class AdminUsuariosComponent implements OnInit {
  equipoActivoId: number|null = null;
  // Para el diálogo de editar equipo
  showEditarEquipo: boolean = false;
  editandoEquipo: boolean = false;
  equipoEditando: any = null;
  abrirDialogoEditarEquipo(equipo: any) {
    this.equipoEditando = equipo;
    this.nuevoEquipoNombre = equipo.nombre;
    this.usuariosSeleccionados = (equipo.usuarios || []).map((u: any) => u.id);
    this.showEditarEquipo = true;
    this.showCrearEquipo = false;
  }

  cerrarDialogoEquipo() {
    this.showEditarEquipo = false;
    this.showCrearEquipo = false;
    this.nuevoEquipoNombre = '';
    this.usuariosSeleccionados = [];
    this.equipoEditando = null;
  }

  guardarEdicionEquipo() {
    if (!this.equipoEditando || !this.nuevoEquipoNombre.trim()) {
      alert('Debes ingresar un nombre.');
      return;
    }
    this.editandoEquipo = true;
    // 1. Actualizar nombre del equipo
    this.http.put<any>(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/${this.equipoEditando.id}`, { nombre: this.nuevoEquipoNombre }).subscribe({
      next: () => {
        // 2. Actualizar asignaciones: agregar nuevas y eliminar las que ya no estén
        const equipoId = this.equipoEditando.id;
        const asignacionesEquipo = this.asignaciones.filter(a => a.equipo_id === equipoId);
        const usuariosActuales = asignacionesEquipo.map(a => a.usuario_id);
        const usuariosAAgregar = this.usuariosSeleccionados.filter(id => !usuariosActuales.includes(id));
        const asignacionesAEliminar = asignacionesEquipo.filter(a => !this.usuariosSeleccionados.includes(a.usuario_id));
        const peticiones: Promise<any>[] = [];
        for (const usuarioId of usuariosAAgregar) {
          peticiones.push(this.http.post('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios', {
            usuario_id: usuarioId,
            equipo_id: equipoId,
            rol: 'cliente'
          }).toPromise());
        }
        for (const asignacion of asignacionesAEliminar) {
          peticiones.push(this.http.delete(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios/${asignacion.id}`).toPromise());
        }
        Promise.all(peticiones).then(() => {
          this.cerrarDialogoEquipo();
          this.cargarAsignacionesYEquipos();
          this.editandoEquipo = false;
        }).catch(() => {
          alert('Error al actualizar integrantes del equipo.');
          this.editandoEquipo = false;
        });
      },
      error: () => {
        alert('Error al actualizar el equipo.');
        this.editandoEquipo = false;
      }
    });
  }

  eliminarEquipo(equipo: any) {
    if (!confirm('¿Seguro que deseas eliminar este equipo?')) return;
    this.loading = true;
    // 1. Eliminar todas las asignaciones del equipo
    const asignacionesEquipo = this.asignaciones.filter(a => a.equipo_id === equipo.id);
    const peticiones = asignacionesEquipo.map(a => this.http.delete(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios/${a.id}`).toPromise());
    Promise.all(peticiones)
      .then(() => {
        // 2. Eliminar el equipo
        this.http.delete(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/${equipo.id}`).subscribe({
          next: () => {
            this.cargarAsignacionesYEquipos();
            this.loading = false;
          },
          error: () => {
            alert('Error al eliminar el equipo.');
            this.loading = false;
          }
        });
      })
      .catch(() => {
        alert('Error al eliminar asignaciones del equipo.');
        this.loading = false;
      });
  }


  equipos: any[] = [];
  equiposUsuario: any[] = [];
  asignaciones: any[] = [];
  allUsuarios: any[] = [];
  loading: boolean = false;
  userId: number|null = null;
  error: string = '';

  getRolEnEquipo(equipoId: number): string | null {
    const asignacion = this.asignaciones.find((a: any) => a.equipo_id === equipoId && a.usuario_id === this.userId);
    return asignacion ? asignacion.rol : null;
  }

  cambiarEquipoActivo(equipoId: number) {
    if (!this.userId) {
      alert('No se encontró el usuario actual.');
      return;
    }
    this.loading = true;
    // 1. Cambiar equipo activo en el backend
    this.http.patch<any>(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/usuarios/${this.userId}/equipo-activo`, { equipo_activo_id: equipoId }).subscribe({
      next: (resp: any) => {
        if (resp && resp.success) {
          // 2. Buscar la asignación del usuario autenticado en el equipo seleccionado
          // Primero, obtener todas las asignaciones del equipo
          this.http.get<any[]>(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios?equipo_id=${equipoId}`).subscribe({
            next: (asignacionesEquipo) => {
              // Buscar la asignación correspondiente al usuario autenticado
              const asignacionUsuario = asignacionesEquipo.find((a: any) => a.usuario_id === this.userId);
              if (asignacionUsuario && asignacionUsuario.id) {
                // Obtener la asignación específica con datos anidados
                this.http.get<any>(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios/${asignacionUsuario.id}`).subscribe({
                  next: (asignacionDetallada) => {
                    const nuevoRol = asignacionDetallada && asignacionDetallada.rol ? asignacionDetallada.rol : null;
                    localStorage.setItem('equipo_activo_id', equipoId.toString());
                    localStorage.setItem('equipos_id', equipoId.toString());
                    this.equipoActivoId = equipoId;
                    if (nuevoRol) {
                      localStorage.setItem('rol', nuevoRol);
                      alert('Equipo activo y rol actualizados.');
                    } else {
                      alert('Equipo activo actualizado, pero no se encontró rol.');
                    }
                    this.loading = false;
                  },
                  error: () => {
                    alert('Error al consultar la asignación detallada del usuario.');
                    this.loading = false;
                  }
                });
              } else {
                alert('No se encontró asignación para el usuario en el equipo seleccionado.');
                this.loading = false;
              }
            },
            error: () => {
              alert('Error al consultar las asignaciones del equipo.');
              this.loading = false;
            }
          });
        } else {
          alert('No se pudo actualizar el equipo activo.');
          this.loading = false;
        }
      },
      error: () => {
        alert('Error al actualizar el equipo activo.');
        this.loading = false;
      }
    });
  }

  // Para el diálogo de crear equipo
  showCrearEquipo: boolean = false;
  nuevoEquipoNombre: string = '';
  usuariosSeleccionados: number[] = [];
  creandoEquipo: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const userIdStr = localStorage.getItem('userId');
    this.userId = userIdStr ? Number(userIdStr) : null;
    const equipoActivoStr = localStorage.getItem('equipo_activo_id');
    this.equipoActivoId = equipoActivoStr ? Number(equipoActivoStr) : null;
    this.cargarUsuarios();
    this.cargarAsignacionesYEquipos();
  }
  cargarAsignacionesYEquipos() {
    this.loading = true;
    this.error = '';
    // 1. Obtener todas las asignaciones
    this.http.get<any[]>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios').subscribe({
      next: asignaciones => {
        this.asignaciones = asignaciones;
        // 2. Filtrar asignaciones del usuario actual
        const misAsignaciones = this.userId ? asignaciones.filter(a => a.usuario_id == this.userId) : [];
        // 3. Obtener los equipos únicos de esas asignaciones
        const equipoIds = [...new Set(misAsignaciones.map(a => a.equipo_id))];
        if (equipoIds.length === 0) {
          this.equiposUsuario = [];
          this.loading = false;
          return;
        }
        // 4. Obtener los datos de cada equipo y sus integrantes usando las asignaciones
        const peticiones = equipoIds.map(eqId =>
          this.http.get<any>(`https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/${eqId}`).toPromise()
            .then(equipoRes => {
              // Buscar asignaciones de este equipo
              const integrantes = this.asignaciones
                .filter(a => a.equipo_id === eqId && a.usuario)
                .map(a => a.usuario);
              return {
                ...((equipoRes && equipoRes.data) ? equipoRes.data : {}),
                usuarios: integrantes
              };
            })
        );
        Promise.all(peticiones).then(equiposConUsuarios => {
          this.equiposUsuario = equiposConUsuarios;
          this.loading = false;
        }).catch(() => {
          this.error = 'Error al cargar los equipos.';
          this.loading = false;
        });
      },
      error: () => {
        this.error = 'Error al cargar asignaciones.';
        this.loading = false;
      }
    });
  }

  // cargarEquipos() ya no es necesario, la lógica está en cargarAsignacionesYEquipos

  cargarUsuarios() {
    this.http.get<any[]>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/usuarios').subscribe({
      next: usuarios => {
        this.allUsuarios = usuarios;
      },
      error: () => {
        this.error = 'Error al cargar usuarios.';
      }
    });
  }

  abrirDialogoCrearEquipo() {
    this.nuevoEquipoNombre = '';
    this.usuariosSeleccionados = [];
    this.showCrearEquipo = true;
  }

  cerrarDialogoCrearEquipo() {
    this.showCrearEquipo = false;
    this.nuevoEquipoNombre = '';
    this.usuariosSeleccionados = [];
  }

  crearEquipo() {
    if (!this.nuevoEquipoNombre.trim() || this.usuariosSeleccionados.length === 0) {
      alert('Debes ingresar un nombre y seleccionar al menos un usuario.');
      return;
    }
    this.creandoEquipo = true;
    this.http.post<any>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos', { nombre: this.nuevoEquipoNombre }).subscribe({
      next: equipoResp => {
        const equipoId = equipoResp?.data?.id || equipoResp?.id;
        if (!equipoId) {
          alert('No se pudo crear el equipo.');
          this.creandoEquipo = false;
          return;
        }
        // 2. Crear asignación para el admin (usuario actual)
        const userId = localStorage.getItem('userId');
        const asignaciones: any[] = [];
        let usuariosSoloClientes = [...this.usuariosSeleccionados];
        if (userId) {
          asignaciones.push(this.http.post('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios', {
            usuario_id: Number(userId),
            equipo_id: equipoId,
            rol: 'admin'
          }).toPromise());
          // Eliminar el usuario actual de la lista de clientes si está
          usuariosSoloClientes = usuariosSoloClientes.filter(id => id !== Number(userId));
        }
        // 3. Crear asignaciones para los usuarios seleccionados (rol cliente)
        for (const usuarioId of usuariosSoloClientes) {
          asignaciones.push(this.http.post('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipo-usuarios', {
            usuario_id: usuarioId,
            equipo_id: equipoId,
            rol: 'cliente'
          }).toPromise());
        }
        Promise.all(asignaciones).then(() => {
          this.cerrarDialogoCrearEquipo();
          this.cargarAsignacionesYEquipos();
          this.creandoEquipo = false;
        }).catch(() => {
          alert('Error al asignar usuarios al equipo.');
          this.creandoEquipo = false;
        });
      },
      error: () => {
        alert('Error al crear el equipo.');
        this.creandoEquipo = false;
      }
    });
  }
}
