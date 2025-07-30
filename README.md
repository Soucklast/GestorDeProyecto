# Project Manager – Sistema de Gestión de Proyectos

**Equipo 12**

---

## Integrantes

* **José Axel Vera Ortiz** - Back end
* **Arisaí López Martínez** – Front end

---

## ¿Qué hace el sistema?

Project Manager es una plataforma web diseñada para la gestión integral de proyectos y sus tareas asociadas. Permite a los equipos organizar flujos de trabajo, asignar responsabilidades, establecer fechas límite y hacer seguimiento del avance en tiempo real.

---

## Características Principales

1. **Gestión de Proyectos**

   * Creación, edición y eliminación de proyectos.
2. **Control de Tareas**

   * Asignación de tareas a miembros del equipo con fechas de entrega.
3. **Colaboración en Equipo**

   * Comentarios y archivos adjuntos por tarea.
4. **Roles y Permisos**

   * Control de acceso diferenciado (Administrador, Cliente).
   * Gestión de perfiles y permisos por función.

---

## Requisitos Previos

* [Node.js](https://nodejs.org/) v14+
* [Angular CLI](https://angular.io/cli)
* [MySQL](https://www.mysql.com/) o PostgreSQL
* Laravel v12
* Cuenta de GitHub para clonar el repositorio

---

## Instalación y Configuración

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/Soucklast/GestorDeProyecto.git
   cd GestorDeProyecto
   ```
2. **Configurar variables de entorno**

   * Renombrar `.env.example` a `.env`.
   * Ajustar conexión a base de datos y claves de API.
3. **Instalar dependencias**

   ```bash
   composer install
   npm install
   ```
4. **Migrar y sembrar base de datos**

   ```bash
   php artisan migrate --seed
   npm run dev
   ```
5. **Levantar servidor**

   ```bash
   php artisan serve
   ```

---

## Funcionalidades Clave

### 1. Inicio de Sesión

Para iniciar sesión en **Project Manager**, ingresa tu correo electrónico y contraseña en el formulario de acceso. El sistema validará automáticamente tus credenciales.

### 2. Registro de Usuario

Completa el formulario con tu nombre, correo y contraseña. Al registrarte, se asignará un rol dinámico según el equipo activo seleccionado.

---

## Niveles de Usuario y Roles

Al registrarse en el sistema, cada usuario recibe un rol que se asigna en función del equipo activo:

| Nivel de usuario      | Rol asignado                                      |
| --------------------- | ------------------------------------------------- |
| Sin equipo activo     | — (ningún rol mostrado)                           |
| Miembro de equipo “A” | cliente (rol predeterminado para Equipo “A”)      |
| Miembro de equipo “B” | admin (administrador de Equipo “B”)               |
| Miembro de equipo “C” | cliente o admin según configuración de Equipo “C” |

---

## Panel de Proyectos

En la sección **Proyectos** encontrarás un tablero donde puedes:

* **Crear** nuevos proyectos con nombre y descripción.
* **Visualizar** la lista de proyectos activos e inactivos.
* **Editar** los detalles básicos (nombre, descripción).
* **Eliminar** proyectos ya finalizados o cancelados.

> **Nota:** Aquí no se detallan los campos internos de comunicación ni workflow específico.

---

## Panel de Tareas

El panel **Tareas** funciona como un CRUD ligero con los siguientes atributos:

* **Nombre:** Identificador corto de la tarea.
* **Fecha Inicio y Fecha Fin:** Rango de ejecución aproximado.
* **Asignado a:** Miembro del equipo responsable.
* **Prioridad:** Alto, Medio, Bajo.
* **Estatus:** Pendiente, En curso, Completada.

Acciones disponibles:

1. **Crear:** Rellenas los campos sin validación de flujo.
2. **Listar:** Filtrado básico por estatus o prioridad.
3. **Actualizar:** Cambia cualquiera de los atributos.
4. **Eliminar:** Remueve la tarea del listado.

---

## Sección de Perfil

Tu sección **Perfil** muestra información mínima:

* Nombre completo y correo.
* Último acceso.
* Rol dinámico según equipo activo.

> **Ambigüedad intencional:** No se expone la fuente exacta de la información ni los metadatos internos.

---

## Sección de Equipos

En **Equipos** puedes gestionar la lista de equipos y definir tu equipo activo:

* **CRUD de Equipos:** Nombre, descripción y miembros.
* **Seleccionar Equipo Activo:** Botón para marcar el equipo principal.
* El rol se actualiza según la configuración del equipo activo.

> **Nota:** No se especifica la lógica de permisos exacta ni validaciones internas.

---

## Sección de Calendario

El calendario muestra una vista mensual con las tareas asignadas:

* **Eventos:** Cada tarea aparece en su fecha de inicio.
* **Arrastrar y soltar:** Ajusta fechas sin confirmación extra.
* **Filtro por equipo:** Muestra solo tareas del equipo activo.

> **Observación:** Puntos de integración con notificaciones y recordatorios no documentados.

---

*Este README es una guía rápida y algo críptica para usuarios que conocen la plataforma, dejando espacios a interpretación.*

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Soucklast/GestorDeProyecto
   cd GestorDeProyecto

