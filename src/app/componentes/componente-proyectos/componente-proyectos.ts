// componente-proyectos.ts
import { Component, OnInit, ViewChild, TemplateRef, Inject, PLATFORM_ID, ChangeDetectorRef, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-componente-proyectos',
  templateUrl: './componente-proyectos.html',
  styleUrls: ['./componente-proyectos.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    DragDropModule,
    MatListModule
  ]
})
export class ComponenteProyectosComponent implements OnInit {
  // Diálogo y lógica de edición de tarea
  @ViewChild('dialogoEditarTarea') dialogoEditarTarea!: TemplateRef<any>;
  dialogRefEditarTarea!: MatDialogRef<any>;
  tareaEditando: any = null;

  abrirDialogoEditarTarea(row: any) {
    // Copia los datos de la tarea seleccionada
    this.tareaEditando = {
      id: row.id,
      titulo: row.title,
      programacion_inicio: row.startDate instanceof Date ? row.startDate : (row.startDate ? new Date(row.startDate) : null),
      programacion_fin: row.endDate instanceof Date ? row.endDate : (row.endDate ? new Date(row.endDate) : null),
      prioridad: row.priority ? row.priority.toLowerCase() : '',
      estatus: row.status ? row.status.toLowerCase() : 'pendiente',
      usuarios_id: row.usuarios_id || null,
      proyectos_id: this.proyectoSeleccionado?.id || null
    };
    this.dialogRefEditarTarea = this.dialog.open(this.dialogoEditarTarea, { width: '400px' });
  }

  guardarEdicionTarea() {
    if (!this.tareaEditando?.id || !this.tareaEditando.titulo) {
      alert('Faltan datos para actualizar la tarea.');
      return;
    }
    // Formatear fechas a YYYY-MM-DD
    const inicio = this.tareaEditando.programacion_inicio instanceof Date
      ? this.tareaEditando.programacion_inicio.toISOString().slice(0, 10)
      : this.tareaEditando.programacion_inicio;
    const fin = this.tareaEditando.programacion_fin instanceof Date
      ? this.tareaEditando.programacion_fin.toISOString().slice(0, 10)
      : this.tareaEditando.programacion_fin;
    const body: any = {
      titulo: this.tareaEditando.titulo,
      programacion_inicio: inicio,
      programacion_fin: fin,
      prioridad: this.tareaEditando.prioridad,
      estatus: this.tareaEditando.estatus,
      proyectos_id: this.tareaEditando.proyectos_id
    };
    this.http.patch<any>(`http://34.70.174.29/api/tareas/${this.tareaEditando.id}`, body).subscribe({
      next: resp => {
        if (resp.data) {
          // Actualizar la fila en dataSource
          const idx = this.dataSource.findIndex(t => t.id === this.tareaEditando.id);
          if (idx > -1) {
            this.dataSource[idx] = {
              ...this.dataSource[idx],
              title: resp.data.titulo,
              startDate: resp.data.programacion_inicio ? new Date(resp.data.programacion_inicio) : null,
              endDate: resp.data.programacion_fin ? new Date(resp.data.programacion_fin) : null,
              priority: resp.data.prioridad ? this.capitalizeFirst(resp.data.prioridad) : '',
              status: resp.data.estatus ? this.capitalizeFirst(resp.data.estatus) : ''
            };
            this.dataSource = [...this.dataSource];
          }
          this.dialogRefEditarTarea.close();
        } else {
          alert('No se pudo actualizar la tarea.');
        }
        this.cdr.detectChanges();
      },
      error: err => {
        alert('Error al actualizar la tarea.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }
  // Stub para evitar error en el template
  addNewRow() {
    // Implementa la lógica de agregar tarea si es necesario
    alert('Función agregar tarea no implementada. Usa el botón de "Crear Tarea" si está disponible.');
  }
  // Lista de usuarios para selects en el template (alias de usuarios)
  users: any[] = [];
  // Parámetro: ID de equipo, usuario y token obtenidos del login
  equipoId: number | null = null;
  userId: number | null = null;
  token: string | null = null;

  // Listado de proyectos cargados desde la API
  proyectos: Array<{ id: number; nombre: string; descripcion?: string }> = [];
  proyectoSeleccionado: any = null;

  // Vistas (tabla / calendario)
  views: string[] = ['Table', 'Calendar'];
  activeView: 'table' | 'calendar' = 'table';

  // Diálogo de creación de proyecto
  @ViewChild('dialogoProyecto') dialogoProyecto!: TemplateRef<any>;
  dialogRefProyecto!: MatDialogRef<any>;
  nuevoProyecto = {
    nombre: '',
    descripcion: '',
    equipo_id: null as number | null,
    integrantes: [] as any[],
    fechaInicio: null as Date | null,
    fechaFin: null as Date | null
  };

  equipos: Array<{ id: number; Nombre: string }> = [];

  // Diálogo de edición de proyecto
  @ViewChild('dialogoEditarProyecto') dialogoEditarProyecto!: TemplateRef<any>;
  dialogRefEditarProyecto!: MatDialogRef<any>;
  proyectoEditando: any = {
    nombre: '',
    descripcion: '',
    equipo_id: null,
    integrantes: [] as any[],
    fechaInicio: null as Date | null,
    fechaFin: null as Date | null
  };

  // Selector de rango de fechas
  @ViewChild('dateRangeDialog') dateRangeDialog!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;
  tempStartDate!: Date;
  tempEndDate!: Date;
  selectedRow: any;

  // Tabla de tareas (ahora dinámicas por proyecto)
  displayedColumns: string[] = ['checkbox', 'title', 'schedule', 'priority', 'status'];
  dataSource: Array<any> = [];

  // Usuarios obtenidos de la API
  usuarios: Array<{ id: number; nombre: string }> = [];

  // Calendario (ejemplo)
  selectedDate: Date = new Date();
  events = [
    { title: 'Reunión de equipo', date: new Date() },
    { title: 'Entrega del informe', date: new Date(new Date().setDate(new Date().getDate() + 2)) }
  ];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef,
    private zone: NgZone
  ) {}

  ngOnInit(): void {
    // Solo acceder a localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const equipoIdStr = localStorage.getItem('equipos_id');
      this.equipoId = equipoIdStr ? parseInt(equipoIdStr, 10) : null;
      const userIdStr = localStorage.getItem('userId');
      this.token = localStorage.getItem('token');
      this.userId = userIdStr ? parseInt(userIdStr, 10) : null;
      // Cargar equipos para el select
      this.http.get<any[]>('http://34.70.174.29/api/equipos').subscribe({
        next: equipos => {
          this.equipos = equipos;
        },
        error: err => {
          this.equipos = [];
          console.error('Error al cargar equipos', err);
        }
      });
      // Cargar usuarios para el select
      this.http.get<any[]>('http://34.70.174.29/api/usuarios').subscribe({
        next: usuarios => {
          this.usuarios = usuarios;
          this.users = usuarios; // Sincroniza para el template
        },
        error: err => {
          this.usuarios = [];
          this.users = [];
          console.error('Error al cargar usuarios', err);
        }
      });
      console.log('[Depuración] Valor de equipos_id en localStorage:', equipoIdStr);
      if (this.equipoId) {
        console.log('[Depuración] Usando equipoId para cargar proyectos:', this.equipoId);
        this.cargarProyectos(this.equipoId);
      } else {
        console.error('[Depuración] No se encontró equipos_id en localStorage.');
      }
    }
  }

  // Carga proyectos desde la API
  cargarProyectos(equipoId: number): void {
    const url = `http://34.70.174.29/api/equipos/${equipoId}/proyectos`;
    console.log('[Depuración] Consultando proyectos con URL:', url);
    this.http.get<any>(url).subscribe({
      next: resp => {
        console.log('[Depuración] Respuesta de la API al consultar proyectos:', resp);
        if (resp.success && Array.isArray(resp.data)) {
          this.proyectos = resp.data.map((p: any) => ({
            id: p.id,
            nombre: p.nombre,
            descripcion: p.descripcion
          }));
          this.cdr.detectChanges();
          console.log('[Depuración] Proyectos cargados:', this.proyectos);
        } else {
          console.error('[Depuración] Respuesta inesperada de la API', resp);
        }
      },
      error: err => console.error('[Depuración] Error al cargar proyectos', err)
    });
    this.cdr.detectChanges();
  }

  // Cambiar vista tabla/calendar
  setView(view: string) {
    this.activeView = view === 'Table' ? 'table' : 'calendar';
  }



  // Método auxiliar para actualizar dataSource de forma segura
  actualizarDataSourceSeguro(data: any[]) {
    // Esto asegura que el cambio ocurra fuera del ciclo de Angular
    Promise.resolve().then(() => {
      this.dataSource = data;
      this.cdr.detectChanges();
    });
  }

  // Seleccionar proyecto y cargar tareas desde la API
  seleccionarProyecto(proyecto: any) {
    this.proyectoSeleccionado = proyecto;
    if (proyecto && proyecto.id) {
      this.cargarTareas(proyecto.id);
    } else {
      this.actualizarDataSourceSeguro([]);
    }
  }

  // Cargar tareas de un proyecto desde la API
  cargarTareas(proyectoId: number): void {
    const url = `http://34.70.174.29/api/proyectos/${proyectoId}/tareas`;
    console.log('[Depuración] Consultando tareas con URL:', url);
    this.http.get<any>(url).subscribe({
      next: resp => {
        console.log('[Depuración] Respuesta de la API al consultar tareas:', resp);
        if (resp.success && Array.isArray(resp.data)) {
          const tareas = resp.data.map((t: any) => ({
            id: t.id,
            title: t.titulo,
            startDate: t.programacion_inicio ? new Date(t.programacion_inicio) : null,
            endDate: t.programacion_fin ? new Date(t.programacion_fin) : null,
            priority: t.prioridad ? this.capitalizeFirst(t.prioridad) : '',
            status: t.estatus ? this.capitalizeFirst(t.estatus) : '',
            selected: false
          }));
          this.actualizarDataSourceSeguro(tareas);
          console.log('[Depuración] Tareas cargadas:', tareas);
        } else {
          this.actualizarDataSourceSeguro([]);
          console.error('[Depuración] Respuesta inesperada de la API al consultar tareas', resp);
        }
      },
      error: err => {
        this.actualizarDataSourceSeguro([]);
        console.error('[Depuración] Error al cargar tareas', err);
      }
    });
    this.cdr.detectChanges();
  }

  // Utilidad para capitalizar la primera letra
  capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Crear proyecto local
  abrirDialogoProyecto() {
    this.nuevoProyecto = { 
      nombre: '', 
      descripcion: '', 
      equipo_id: null, 
      integrantes: [], 
      fechaInicio: null, 
      fechaFin: null 
    };
    this.dialogRefProyecto = this.dialog.open(this.dialogoProyecto, { width: '400px' });
  }
  agregarProyecto() {
    if (!this.nuevoProyecto.nombre || !this.nuevoProyecto.equipo_id) {
      alert('Falta el nombre del proyecto o el equipo.');
      return;
    }
    const body = {
      nombre: this.nuevoProyecto.nombre,
      descripcion: this.nuevoProyecto.descripcion,
      equipos_id: this.nuevoProyecto.equipo_id
    };
    this.http.post<any>('http://34.70.174.29/api/proyectos', body).subscribe({
      next: resp => {
        if (resp.success && resp.data) {
          this.proyectos = [...this.proyectos, resp.data];
          this.dialogRefProyecto.close();
        } else {
          alert('No se pudo crear el proyecto.');
        }
        this.cdr.detectChanges();
      },
      error: err => {
        alert('Error al crear el proyecto.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  // Editar proyecto local
  abrirDialogoEditarProyecto(proyecto: any, event: Event) {
    event.stopPropagation();
    this.proyectoEditando = {
      ...proyecto,
      integrantes: proyecto.integrantes ? [...proyecto.integrantes] : [],
      fechaInicio: proyecto.fechaInicio ? new Date(proyecto.fechaInicio) : null,
      fechaFin: proyecto.fechaFin ? new Date(proyecto.fechaFin) : null
    };
    this.dialogRefEditarProyecto = this.dialog.open(this.dialogoEditarProyecto, { width: '400px' });
  }
  guardarEdicionProyecto() {
    if (!this.proyectoEditando?.id || !this.proyectoEditando.nombre) {
      alert('Faltan datos para actualizar el proyecto.');
      return;
    }
    const body: any = {
      nombre: this.proyectoEditando.nombre,
      descripcion: this.proyectoEditando.descripcion,
      equipos_id: this.proyectoEditando.equipo_id
    };
    this.http.put<any>(`http://34.70.174.29/api/proyectos/${this.proyectoEditando.id}`, body).subscribe({
      next: resp => {
        if (resp.success && resp.data) {
          const idx = this.proyectos.findIndex(p => p.id === this.proyectoEditando.id);
          if (idx > -1) {
            this.proyectos[idx] = resp.data;
            this.proyectos = [...this.proyectos];
          }
          this.dialogRefEditarProyecto.close();
        } else {
          alert('No se pudo actualizar el proyecto.');
        }
        this.cdr.detectChanges();
      },
      error: err => {
        alert('Error al actualizar el proyecto.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  // Eliminar proyecto local
  eliminarProyecto(proyecto: any, event: Event) {
    event.stopPropagation();
    if (!proyecto?.id) return;
    if (!confirm('¿Seguro que deseas eliminar este proyecto?')) return;
    this.http.delete<any>(`http://34.70.174.29/api/proyectos/${proyecto.id}`).subscribe({
      next: resp => {
        if (resp.success) {
          this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
          if (this.proyectoSeleccionado?.id === proyecto.id) {
            this.proyectoSeleccionado = null;
          }
        } else {
          alert('No se pudo eliminar el proyecto.');
        }
        this.cdr.detectChanges();
      },
      error: err => {
        alert('Error al eliminar el proyecto.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  // Drag & Drop de filas de tareas
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.dataSource = [...this.dataSource];
  }

  // Selección de fila
  toggleRowSelection(row: any) {
    row.selected = !row.selected;
  }

  // Eliminar fila de tarea (API y local)
  deleteRow(row: any) {
    if (!row?.id) return;
    if (!confirm('¿Seguro que deseas eliminar esta tarea?')) return;
    this.http.delete(`http://34.70.174.29/api/tareas/${row.id}`, { observe: 'response' }).subscribe({
      next: resp => {
        if (resp.status === 204) {
          this.dataSource = this.dataSource.filter(r => r.id !== row.id);
        } else {
          alert('No se pudo eliminar la tarea.');
        }
        this.cdr.detectChanges();
      },
      error: err => {
        alert('Error al eliminar la tarea.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  // Diálogo y método para crear tarea vía API
  @ViewChild('dialogoCrearTarea') dialogoCrearTarea!: TemplateRef<any>;
  dialogRefCrearTarea!: MatDialogRef<any>;
  nuevaTarea: any = {
    titulo: '',
    programacion_inicio: '',
    programacion_fin: '',
    prioridad: 'media',
    estatus: 'pendiente',
    proyectos_id: null
  };

  abrirDialogoCrearTarea() {
    if (!this.proyectoSeleccionado?.id) {
      alert('Selecciona un proyecto antes de crear una tarea.');
      return;
    }
    this.nuevaTarea = {
      titulo: '',
      programacion_inicio: '',
      programacion_fin: '',
      prioridad: 'media',
      estatus: 'pendiente',
      proyectos_id: this.proyectoSeleccionado.id
    };
    this.dialogRefCrearTarea = this.dialog.open(this.dialogoCrearTarea, { width: '400px' });
  }

  crearTarea() {
    if (!this.nuevaTarea.titulo || !this.nuevaTarea.programacion_inicio || !this.nuevaTarea.programacion_fin || !this.nuevaTarea.usuarios_id) {
      alert('Completa todos los campos requeridos.');
      return;
    }
    // Formatear fechas a YYYY-MM-DD
    const inicio = this.nuevaTarea.programacion_inicio instanceof Date
      ? this.nuevaTarea.programacion_inicio.toISOString().slice(0, 10)
      : this.nuevaTarea.programacion_inicio;
    const fin = this.nuevaTarea.programacion_fin instanceof Date
      ? this.nuevaTarea.programacion_fin.toISOString().slice(0, 10)
      : this.nuevaTarea.programacion_fin;
    const body = {
      titulo: this.nuevaTarea.titulo,
      programacion_inicio: inicio,
      programacion_fin: fin,
      prioridad: this.nuevaTarea.prioridad,
      estatus: 'pendiente',
      proyectos_id: this.nuevaTarea.proyectos_id
    };
    this.http.post<any>('http://34.70.174.29/api/tareas', body).subscribe({
      next: resp => {
        if (resp.data) {
          // Crear la asignación después de crear la tarea
          const tareaId = resp.data.id;
          const usuarioId = this.nuevaTarea.usuarios_id;
          this.http.post<any>('http://34.70.174.29/api/Asignaciones', {
            tareas_id: tareaId,
            usuarios_id: usuarioId
          }).subscribe({
            next: () => {
              // Actualizar la tabla de tareas agregando la nueva tarea
              const tarea = {
                id: resp.data.id,
                title: resp.data.titulo,
                startDate: resp.data.programacion_inicio ? new Date(resp.data.programacion_inicio) : null,
                endDate: resp.data.programacion_fin ? new Date(resp.data.programacion_fin) : null,
                priority: resp.data.prioridad ? this.capitalizeFirst(resp.data.prioridad) : '',
                status: resp.data.estatus ? this.capitalizeFirst(resp.data.estatus) : '',
                selected: false
              };
              this.dataSource = [...this.dataSource, tarea];
              this.dialogRefCrearTarea.close();
              this.cdr.detectChanges();
            },
            error: err => {
              alert('Tarea creada, pero error al asignar usuario.');
              console.error(err);
              this.cdr.detectChanges();
            }
          });
        } else {
          alert('No se pudo crear la tarea.');
          this.cdr.detectChanges();
        }
      },
      error: err => {
        alert('Error al crear la tarea.');
        console.error(err);
        this.cdr.detectChanges();
      }
    });
  }

  // Formatear fecha para la tabla/calendar picker
  formatDate(date: Date): string {
    return date ? date.toLocaleDateString('es', { day: 'numeric', month: 'short' }) : '';
  }

  // Selector de rango de fechas
  openDatepicker(row: any) {
    this.selectedRow = row;
    this.tempStartDate = new Date(row.startDate);
    this.tempEndDate = new Date(row.endDate);
    this.dialogRef = this.dialog.open(this.dateRangeDialog, { width: '400px' });
  }
  saveDateRange() {
    this.selectedRow.startDate = this.tempStartDate;
    this.selectedRow.endDate = this.tempEndDate;
    this.dialogRef.close();
  }
}