import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Tarea {
  id: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  assigned?: string;
  priority?: string;
  status?: string;
}

@Injectable({ providedIn: 'root' })
export class TareasService {
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  getTareas(): Tarea[] {
    return this.tareasSubject.value;
  }

  setTareas(tareas: Tarea[]) {
    this.tareasSubject.next(tareas);
  }

  addTarea(tarea: Tarea) {
    this.tareasSubject.next([...this.tareasSubject.value, tarea]);
  }

  updateTarea(tarea: Tarea) {
    const tareas = this.tareasSubject.value.map(t =>
      t.id === tarea.id ? tarea : t
    );
    this.tareasSubject.next(tareas);
  }
}