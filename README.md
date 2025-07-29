# Project Manager – Sistema de Gestión de Proyectos

**Equipo 12**

---

## Integrantes

- **José Axel Vera Ortiz** – Desarrollador Full‑Stack y Coordinador de Equipo  
- **Arisaí López Martínez** – Diseñadora de Interfaz y Gestora de Calidad  

---

## ¿Qué hace el sistema?

Project Manager es una plataforma web diseñada para la gestión integral de proyectos y sus tareas asociadas.  
Permite a los equipos organizar flujos de trabajo, asignar responsabilidades, establecer fechas límite y hacer seguimiento del avance en tiempo real.  
Ofrece informes detallados, visualizaciones de progreso y notificaciones automáticas para asegurar que cada entregable se complete según lo previsto.

---

## Características Principales

1. **Gestión de Proyectos**  
   - Creación, edición y eliminación de proyectos.  
   - Cronogramas y diagramas de Gantt interactivos.  
2. **Control de Tareas**  
   - Asignación de tareas a miembros del equipo con fechas de entrega.  
   - Estado de tarea (Pendiente, En Progreso, Completada).  
3. **Colaboración en Equipo**  
   - Comentarios y archivos adjuntos por tarea.  
   - Notificaciones por correo y dentro de la plataforma.  
4. **Reportes y Métricas**  
   - Tableros de indicadores (KPIs) de rendimiento.  
   - Exportación de reportes en PDF y CSV.  
5. **Roles y Permisos**  
   - Control de acceso diferenciado (Administrador, Gestor, Colaborador).  
   - Gestión de perfiles y permisos por función.

## Requisitos Previos

- [Node.js](https://nodejs.org/) v14+  
- [Angular CLI](https://angular.io/cli)  
- [PostgreSQL](https://www.postgresql.org/)  
- Cuenta de GitHub para clonar el repositorio  

---
¡Entendido! Aquí tienes solo la sección que me pediste, con el formato adecuado para tu `README.md`:

---

## Funcionalidades Clave

### 1. **Inicio de sesión**

Para iniciar sesión en **Project Manager**, simplemente ingresa tu correo electrónico y contraseña en el formulario de acceso. El sistema validará automáticamente tus credenciales.

![Formulario de inicio de sesión](https://github.com/user-attachments/assets/6cd633a9-cfd7-430c-943a-e3cc869920e9)

### 2. **Página de Inicio**

En la página de inicio encontrarás:

#### **Tabla Principal de Proyectos y Tareas**

En el área central, se muestra una tabla interactiva que te permite gestionar el ciclo completo de tus proyectos y tareas. Desde aquí puedes:

* **Agregar** un nuevo proyecto o tarea con un solo clic.
* **Editar** títulos, fechas, responsables y estados directamente en línea.
* **Eliminar** elementos que ya no sean necesarios.
* **Filtrar y ordenar** por nombre, fecha de entrega, estado o prioridad para enfocarte en lo más urgente.

#### **Panel Lateral Izquierdo**

* **Perfil**: Aquí verás tu foto de usuario, nombre y rol. También tienes acceso rápido a la configuración de tu cuenta (cambiar contraseña, actualizar información personal, etc.).
* **Usuarios del Equipo**: Debajo del perfil, aparece una lista de los integrantes de tu equipo. Desde este panel puedes:

  * Consultar rápidamente quién está activo.
  * Ver el rol de cada miembro (Desarrollador, Gestor, Revisor, etc.).
  * Hacer clic sobre un usuario para ver su historial de tareas y proyectos asignados.

![Panel lateral izquierdo](https://github.com/user-attachments/assets/0899569d-4d66-4c6a-854d-5fd5aac118dd)

---


## Instalación y Configuración

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Soucklast/GestorDeProyecto
   cd GestorDeProyecto

