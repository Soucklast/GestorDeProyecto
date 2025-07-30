// componente-calendario.component.ts
import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface EventItem {
  id: number;
  title: string;
  start: Date;
  end: Date;
  details: string;
}

@Component({
  selector: 'app-componente-calendario',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,       // <-- aquí
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './componente-calendario.html',
  styleUrls: ['./componente-calendario.css']
})
export class ComponenteCalendarioComponent implements OnInit {
  today = new Date();
  viewDate: Date = this.today;
  weeks: Date[][] = [];
  events: EventItem[] = [];

  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private cdr: ChangeDetectorRef      // <-- inyectamos HttpClient
  ) {}
  equipoId: number | null = null;
  userId: number | null = null;
  token: string | null = null;

  equipos: Array<{ id: number; Nombre: string }> = [];


  ngOnInit() {
    const equipoIdStr = localStorage.getItem('equipos_id');
      this.equipoId = equipoIdStr ? parseInt(equipoIdStr, 10) : null;
      const userIdStr = localStorage.getItem('userId');
      this.token = localStorage.getItem('token');
      this.userId = userIdStr ? parseInt(userIdStr, 10) : null;
      // Cargar equipos para el select
      this.http.get<any[]>('https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos').subscribe({
        next: equipos => {
          this.equipos = equipos;
        },
        error: err => {
          this.equipos = [];
          console.error('Error al cargar equipos', err);
        }
      });
      console.log('[Depuración] Valor de equipos_id en localStorage:', equipoIdStr);
      if (this.equipoId) {
        console.log('[Depuración] Usando equipoId para cargar proyectos:', this.equipoId);
      this.loadEventsForTeam(this.equipoId);     
       this.cdr.detectChanges(); 
    } else {
        console.error('[Depuración] No se encontró equipos_id en localStorage.');
      }

    
  }

  private loadEventsForTeam(teamId: number) {
    // 1) Obtener proyectos del equipo
    this.http
      .get<{ success: boolean; equipo_id: number; data: any[] }>(
        `https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/${teamId}/proyectos`
      )
      .subscribe(projRes => {
        const proyectos = projRes.data;
        // 2) Por cada proyecto, pedimos sus tareas
        const tareas$ = proyectos.map(p =>
          this.http.get<{ success: boolean; proyecto_id: number; data: any[] }>(
            `https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos/${p.id}/tareas`
          )
        );
        // 3) Esperamos a que todas las peticiones terminen
        forkJoin(tareas$).subscribe(responses => {
          // Aplanamos todas las tareas en un solo array
          const allTareas = responses.flatMap(r => r.data);

          // 4) Mapeamos a EventItem
          this.events = allTareas.map(t => ({
            id: t.id,
            title: t.titulo,
            start: new Date(t.programacion_inicio),
            end: new Date(t.programacion_fin),
            details: `
              Proyecto ID: ${t.proyectos_id}
              Prioridad: ${t.prioridad}
              Estatus: ${t.estatus}
              Creado: ${new Date(t.created_at).toLocaleString()}
              Actualizado: ${new Date(t.updated_at).toLocaleString()}
            `.trim()
          }));

          // 5) Reconstruimos calendario con los eventos cargados
          this.buildCalendar();
        });
      });
  }

  private buildCalendar() {
    this.weeks = [];
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);

    let dt = new Date(start);
    while (dt.getDay() !== 0) {
      dt.setDate(dt.getDate() - 1);
    }

    while (dt <= end || dt.getDay() !== 0) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  getEventsForDate(date: Date): EventItem[] {
    return this.events.filter(ev => ev.start <= date && ev.end >= date);
  }

  prevMonth() {
    const y = this.viewDate.getFullYear();
    const m = this.viewDate.getMonth();
    this.viewDate = new Date(y, m - 1, 1);
    this.buildCalendar();
  }

  nextMonth() {
    const y = this.viewDate.getFullYear();
    const m = this.viewDate.getMonth();
    this.viewDate = new Date(y, m + 1, 1);
    this.buildCalendar();
  }

  goToday() {
    this.viewDate = this.today;
    this.buildCalendar();
  }

  openEvent(event: EventItem) {
    this.dialog.open(EventDialogComponent, {
      data: event,
      width: '300px'
    });
  }
}

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <div mat-dialog-content>
      <p><strong>Inicio:</strong> {{ data.start | date:'dd/MM/yyyy' }}</p>
      <p><strong>Fin:</strong> {{ data.end | date:'dd/MM/yyyy' }}</p>
      <pre>{{ data.details }}</pre>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cerrar</button>
    </div>
  `
})
export class EventDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EventItem) {}
}
