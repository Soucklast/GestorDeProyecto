
import { Routes } from '@angular/router';
import { Login } from './paginas/login/login'; // Ajusta el nombre si es LoginComponent
import { ComponenteProyectosComponent } from './componentes/componente-proyectos/componente-proyectos';
import { InicioComponent } from './paginas/inicio/inicio';
import { Perfil } from './paginas/perfil/perfil';

export const routes: Routes = [
  { path: '', component: Login }, // Ruta raíz muestra el login
  { path: 'login', component: Login },
  { path: 'proyectos', component: ComponenteProyectosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: Perfil }, // Ruta para el perfil
];
