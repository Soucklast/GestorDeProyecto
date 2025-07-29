import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProyectosTareasService {
  private apiUrl = 'http://34.70.174.29/api';

  constructor(private http: HttpClient) {}

  // PROYECTOS
  getProyectos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/proyectos`);
  }
  getProyecto(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/proyectos/${id}`);
  }
  crearProyecto(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/proyectos`, data);
  }
  actualizarProyecto(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/proyectos/${id}`, data);
  }
  eliminarProyecto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/proyectos/${id}`);
  }
  // TAREAS
  getTareas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/tareas`);
  }
  getTareasDeProyecto(proyectoId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/proyectos/${proyectoId}/tareas`);
  }
  getTarea(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tareas/${id}`);
  }
  crearTarea(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/tareas`, data);
  }
  actualizarTarea(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/tareas/${id}`, data);
  }
  eliminarTarea(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/tareas/${id}`);
  }
  // ASIGNACIONES
  getAsignaciones(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Asignaciones`);
  }
  getAsignacion(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Asignaciones/${id}`);
  }
  crearAsignacion(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Asignaciones`, data);
  }
  actualizarAsignacion(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/Asignaciones/${id}`, data);
  }
  eliminarAsignacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Asignaciones/${id}`);
  }
  getTareasDeUsuario(usuarioId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios/${usuarioId}/tareas`);
  }
  getUsuariosDeTarea(tareaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/tareas/${tareaId}/usuarios`);
  }
}
