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

<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/33dbf812-ee63-4352-a0e1-4a5729c754f5" />


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

En la sección **Proyectos** encontrarás un tablero donde puedes(es necesario tener un equipo asignado en seccion de equipos):

* **Crear** nuevos proyectos con nombre y descripción.
* **Visualizar** la lista de proyectos activos e inactivos.
* **Editar** los detalles básicos (nombre, descripción).
* **Eliminar** proyectos ya finalizados o cancelados.

<img width="1906" height="865" alt="image" src="https://github.com/user-attachments/assets/cdc30ff7-2833-4da3-b9f6-ecb25ca46959" />
<img width="1918" height="827" alt="image" src="https://github.com/user-attachments/assets/8626b57e-dd0b-4d4e-93fa-5f48bbbb92c3" />
<img width="1916" height="880" alt="image" src="https://github.com/user-attachments/assets/76fb2989-03fd-4d96-9fa5-0809a50e94c1" />
<img width="1916" height="881" alt="image" src="https://github.com/user-attachments/assets/a6e78bd3-a5bb-493f-b442-8d4fdaba8e79" />

---

## Panel de Tareas

El panel **Tareas** funciona como un CRUD ligero con los siguientes atributos se tiene que escoger un proyecto y en este podras agregar lo siguiente:

* **Nombre:** Identificador corto de la tarea.
* **Fecha Inicio y Fecha Fin:** Rango de ejecución aproximado.
* **Asignado a:** Miembro del equipo responsable.
* **Prioridad:** Alto, Medio, Bajo.
* **Estatus:** Pendiente, En curso, Completada.

Acciones disponibles:

1. **Crear:** Rellenas los campos sin validación de flujo.
3. **Actualizar:** Cambia cualquiera de los atributos.
4. **Eliminar:** Remueve la tarea del listado.
<img width="1433" height="780" alt="image" src="https://github.com/user-attachments/assets/f4bc61ca-aed0-42b9-86fb-545234d0f43e" />

---

## Sección de Perfil

Tu sección **Perfil** muestra información del usurio y podras cerrar sesion.

<img width="1908" height="879" alt="image" src="https://github.com/user-attachments/assets/45479552-f369-4e5a-95f7-6d11c4b99bc5" />

>

---

## Sección de Equipos

En **Equipos** puedes gestionar la lista de equipos y definir tu equipo activo:

* **CRUD de Equipos:** Nombre, descripción y miembros.
* **Seleccionar Equipo Activo:** Botón para marcar el equipo principal.
* El rol se actualiza según la configuración del equipo activo.

<img width="1912" height="883" alt="image" src="https://github.com/user-attachments/assets/724ba454-4cdc-48ec-b7b5-ca05a26ce130" />

---

## Sección de Calendario

El calendario muestra una vista mensual con las tareas asignadas:

* **Eventos:** Cada tarea aparece en su fecha de inicio.
* **Arrastrar y soltar:** Ajusta fechas sin confirmación extra.
* **Filtro por equipo:** Muestra solo tareas del equipo activo.


<img width="1893" height="897" alt="image" src="https://github.com/user-attachments/assets/7054d9da-6b36-46e8-bbf5-0d13cc03c42f" />


---


**# Laravel API Documentation**

**Repository:** [AXEL00000000/laravel](https://github.com/AXEL00000000/laravel.git)

---

## Índice

1. [Equipos](#equipos)
2. [Proyectos](#proyectos)
3. [Usuarios](#usuarios)
4. [Tareas](#tareas)
5. [Asignaciones](#asignaciones)
6. [Equipo–Usuario](#equipo–usuario)

---

## 1. Equipos

### 1.1 Listar equipos

* **Descripción:** Recupera el listado de todos los equipos.
* **Método:** `GET`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos
  ```
* **Headers:**

  ```http
  Accept: application/json
  ```
* **Respuesta (200 OK):**

  ```json
  {
    "success": true,
    "data": [
      { "id": 1, "nombre": "Equipo A", "created_at": "2025-01-10T12:34:56Z", "updated_at": "2025-06-15T09:20:30Z" },
      { "id": 2, "nombre": "Equipo B", "created_at": "2025-02-05T08:22:10Z", "updated_at": "2025-07-01T14:05:12Z" }
    ]
  }
  ```

### 1.2 Crear un equipo

* **Descripción:** Crea un nuevo equipo con el nombre proporcionado.
* **Método:** `POST`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos
  ```
* **Headers:**

  ```http
  Content-Type: application/json
  ```
* **Body:**

  ```json
  { "nombre": "Mi Equipo Nuevo" }
  ```
* **Respuesta (201 Created):**

  ```json
  {
    "success": true,
    "data": { "id": 3, "nombre": "Mi Equipo Nuevo", "created_at": "2025-07-30T02:00:00Z", "updated_at": "2025-07-30T02:00:00Z" }
  }
  ```

### 1.3 Ver un equipo

* **Descripción:** Obtiene los datos de un equipo específico por su ID.
* **Método:** `GET`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/{id}
  ```
* **Headers:**

  ```http
  Accept: application/json
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "data": { "id": 2, "nombre": "Equipo B", "created_at": "2025-02-05T08:22:10Z", "updated_at": "2025-07-01T14:05:12Z" } }
  ```

### 1.4 Actualizar un equipo

* **Descripción:** Modifica el nombre de un equipo existente.
* **Método:** `PUT`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/{id}
  ```
* **Headers:**

  ```http
  Content-Type: application/json
  ```
* **Body:**

  ```json
  { "nombre": "Nombre Actualizado" }
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "data": { "id": 2, "nombre": "Nombre Actualizado", "created_at": "2025-02-05T08:22:10Z", "updated_at": "2025-07-30T02:10:00Z" } }
  ```

### 1.5 Eliminar un equipo

* **Descripción:** Elimina el equipo indicado por su ID.
* **Método:** `DELETE`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/{id}
  ```
* **Headers:**

  ```http
  Accept: application/json
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "message": "Equipo eliminado correctamente" }
  ```

---

## 2. Proyectos

> **Nota:** Todas las rutas comienzan con `/api`.

### 2.1 Listar todos los proyectos

* **Método:** `GET`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "data": [ /* array de proyectos */ ] }
  ```

### 2.2 Listar proyectos de un equipo

* **Método:** `GET`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/equipos/{equipo}/proyectos
  ```
* **Parámetros:** `{equipo}` – ID del equipo.
* **Respuesta (200 OK):**

  ```json
  { "success": true, "equipo_id": <equipo>, "data": [ /* proyectos */ ] }
  ```

### 2.3 Crear un nuevo proyecto

* **Método:** `POST`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos
  ```
* **Headers:**

  ```http
  Content-Type: application/json
  ```
* **Body:**

  ```json
  { "nombre": "Nombre", "descripcion": "Descripción opcional", "equipo_id": <id_equipo> }
  ```
* **Respuesta (201 Created):**

  ```json
  { "success": true, "data": { /* proyecto creado */ } }
  ```

### 2.4 Ver un proyecto concreto

* **Método:** `GET`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos/{proyecto}
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "data": { /* proyecto */ } }
  ```

### 2.5 Actualizar un proyecto

* **Métodos:** `PUT` / `PATCH`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos/{proyecto}
  ```
* **Headers:**

  ```http
  Content-Type: application/json
  ```
* **Body (ejemplo):**

  ```json
  { "nombre": "Nuevo nombre", "descripcion": "Descripción", "equipo_id": <otro_id> }
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "data": { /* proyecto actualizado */ } }
  ```

### 2.6 Eliminar un proyecto

* **Método:** `DELETE`
* **Endpoint:**

  ```
  https://apigestiones.apkfmedekkmewlmewmde.shop/api/proyectos/{proyecto}
  ```
* **Respuesta (200 OK):**

  ```json
  { "success": true, "message": "Proyecto eliminado correctamente" }
  ```

---

## 3. Usuarios

> **Dominio base:** `https://apigestiones.apkfmedekkmewlmewmde.shop/api`

### 3.1 Listar todos los usuarios

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios
  ```
* **Headers:**

  ```http
  Content-Type: application/json
  ```
* **Respuesta (200 OK):** Array JSON con todos los usuarios.

### 3.2 Ver un usuario por ID

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{id}
  ```
* **Headers:** `Content-Type: application/json`
* **Respuesta (200 OK):** Objeto JSON del usuario.

### 3.3 Crear un nuevo usuario

* **Método:** `POST`
* **Endpoint:**

  ```
  /usuarios
  ```
* **Headers:** `Content-Type: application/json`
* **Body:**

  ```json
  {
    "nombre": "Juan Pérez",
    "email": "juan@example.com",
    "password": "secreto123",
    "rol": "cliente",
    "imagen": "https://ejemplo.com/avatar.jpg",
    "equipo_activo_id": 5
  }
  ```
* **Respuesta (201 Created):** Objeto JSON del usuario creado.

### 3.4 Actualizar un usuario

* **Método:** `PATCH`
* **Endpoint:**

  ```
  /usuarios/{id}
  ```
* **Headers:** `Content-Type: application/json`
* **Body (ejemplo):**

  ```json
  { "nombre": "Juan P.", "email": "juan.p@example.com", "password": "nuevoPass", "rol": "admin", "imagen": null, "equipo_activo_id": 2 }
  ```
* **Respuesta (200 OK):** Objeto JSON del usuario actualizado.

### 3.5 Cambiar solo el equipo activo

* **Método:** `PATCH`
* **Endpoint:**

  ```
  /usuarios/{id}/equipo-activo
  ```
* **Headers:** `Content-Type: application/json`
* **Body:**

  ```json
  { "equipo_activo_id": 3 }
  ```
* **Respuesta (200 OK):** Usuario con equipo activo actualizado.

### 3.6 Autenticación (login)

* **Método:** `POST`
* **Endpoint:**

  ```
  /login
  ```
* **Headers:** `Content-Type: application/json`
* **Body:**

  ```json
  { "email": "juan@example.com", "password": "secreto123" }
  ```
* **Respuesta:**

  * **200 OK:** Usuario autenticado
  * **401 Unauthorized:** `{ "message": "Credenciales inválidas" }`

---

## 4. Tareas

### 4.1 Listar todas las tareas

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas
  ```
* **Respuesta (200 OK):** Array JSON de tareas.

### 4.2 Listar tareas de un proyecto

* **Método:** `GET`
* **Endpoint:**

  ```
  /proyectos/{proyecto}/tareas
  ```
* **Respuesta (200 OK):** `{ "success": true, "proyecto_id": <proyecto>, "data": [/* tareas */] }`

### 4.3 Ver una tarea concreta

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON de la tarea.
* **Respuesta (404):** Si no existe la tarea.

### 4.4 Crear una nueva tarea

* **Método:** `POST`
* **Endpoint:**

  ```
  /tareas
  ```
* **Headers:** `Content-Type: application/json`
* **Body:**

  ```json
  {
    "titulo": "Título de la tarea",
    "programacion_inicio": "2025-07-28",
    "programacion_fin": "2025-08-05",
    "prioridad": "alta",
    "estatus": "pendiente",
    "proyectos_id": <id_proyecto>
  }
  ```
* **Respuesta (201 Created):** Mensaje y objeto tarea.

### 4.5 Actualizar una tarea

* **Métodos:** `PUT` / `PATCH`
* **Endpoint:**

  ```
  /tareas/{id}
  ```
* **Body (ejemplo):**

  ```json
  { "titulo": "Nuevo título", "programacion_inicio": "2025-07-30", "programacion_fin": "2025-08-10", "prioridad": "media", "estatus": "en progreso", "proyectos_id": <otro_id> }
  ```
* **Respuesta (200 OK):** Mensaje y objeto tarea actualizado.

### 4.6 Eliminar una tarea

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /tareas/{id}
  ```
* **Respuesta (204 No Content)**

---

## 5. Asignaciones

### 5.1 Listar todas las asignaciones

* **Método:** `GET`
* **Endpoint:**

  ```
  /Asignaciones
  ```
* **Respuesta (200 OK):** Array JSON.

### 5.2 Ver una asignación concreta

* **Método:** `GET`
* **Endpoint:**

  ```
  /Asignaciones/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON.

### 5.3 Crear una asignación

* **Método:** `POST`
* **Endpoint:**

  ```
  /Asignaciones
  ```
* **Body:**

  ```json
  { "tareas_id": <id_tarea>, "usuarios_id": <id_usuario> }
  ```
* **Respuesta (201 Created):** Objeto asignación.

### 5.4 Actualizar una asignación

* **Métodos:** `PUT` / `PATCH`
* **Endpoint:**

  ```
  /Asignaciones/{id}
  ```
* **Body:**

  ```json
  { "tareas_id": <nuevo_id>, "usuarios_id": <nuevo_id> }
  ```
* **Respuesta (200 OK):** Objeto asignación actualizado.

### 5.5 Eliminar una asignación

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /Asignaciones/{id}
  ```
* **Respuesta (204 No Content)**

### 5.6 Obtener tareas de un usuario

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{usuario}/tareas
  ```
* **Respuesta (200 OK):** Array JSON de tareas.

### 5.7 Obtener usuarios de una tarea

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas/{tarea}/usuarios
  ```
* **Respuesta (200 OK):** Array JSON de usuarios.

---

## 6. Equipo–Usuario

> **Dominio base:** `https://apigestiones.apkfmedekkmewlmewmde.shop/api`

### 6.1 Listar todas las relaciones

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipo-usuarios
  ```
* **Respuesta (200 OK):** Array de objetos con relaciones.

### 6.2 Ver una relación por ID

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipo-usuarios/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON con datos anidados.

### 6.3 Crear una nueva relación

* **Método:** `POST`
* **Endpoint:**

  ```
  /equipo-usuarios
  ```
* **Body:**

  ```json
  { "usuario_id": 10, "equipo_id": 5, "rol": "admin" }
  ```
* **Respuesta (201 Created):** Objeto JSON creado.

### 6.4 Actualizar solo el rol

* **Método:** `PATCH`
* **Endpoint:**

  ```
  /equipo-usuarios/{id}
  ```
* **Body:**

  ```json
  { "rol": "cliente" }
  ```
* **Respuesta (200 OK):** Objeto JSON actualizado.

### 6.5 Eliminar una relación

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /equipo-usuarios/{id}
  ```
* **Respuesta (200 OK):** `{ "message": "Asignación eliminada correctamente." }`

### 6.6 Obtener usuarios de un equipo

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipos/{equipo}/usuarios
  ```
* **Respuesta (200 OK):** Array JSON de usuarios.

### 6.7 Obtener equipos de un usuario

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{usuario}/equipos
  ```
* **Respuesta (200 OK):** Array JSON de equipos.

---

> **Importante:** Para todas las solicitudes con cuerpo (POST, PUT, PATCH), incluye siempre el encabezado `Content-Type: application/json`.
> En las rutas que devuelven recursos, sigue la estructura estándar:
>
> ```json
> { "success": true, "data": … }
> ```


1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Soucklast/GestorDeProyecto
   cd GestorDeProyecto

