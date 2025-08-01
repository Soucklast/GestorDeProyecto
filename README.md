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
* [MySQL](https://www.mysql.com/) 
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

<img width="1917" height="898" alt="image" src="https://github.com/user-attachments/assets/ee64c0d5-5dca-4bad-add8-2101e4fc784e" />

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

<img width="1903" height="908" alt="image" src="https://github.com/user-attachments/assets/fec00eb1-7b14-455f-9eae-2e1415b6571e" />


---

## Sección de Perfil

Tu sección **Perfil** muestra información del usurio y podras cerrar sesion.

<img width="1905" height="897" alt="image" src="https://github.com/user-attachments/assets/f88db208-bc05-4a80-9e7a-5f41544d1ea4" />


>

---

## Sección de Equipos

En **Equipos** puedes gestionar la lista de equipos y definir tu equipo activo:

* **CRUD de Equipos:** Nombre, descripción y miembros.
* **Seleccionar Equipo Activo:** Botón para marcar el equipo principal.
* El rol se actualiza según la configuración del equipo activo.

<img width="1912" height="883" alt="image" src="https://github.com/user-attachments/assets/724ba454-4cdc-48ec-b7b5-ca05a26ce130" />

<img width="1894" height="914" alt="image" src="https://github.com/user-attachments/assets/9fde883d-4c0f-49b8-9807-12d200a30a5b" />


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

 Dominio base:https://apigestiones.apkfmedekkmewlmewmde.shop


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
<img width="1733" height="866" alt="image" src="https://github.com/user-attachments/assets/c48df01a-fb4d-41f9-b350-4dab6c01556f" />

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
<img width="1743" height="675" alt="image" src="https://github.com/user-attachments/assets/54329627-aae1-44ae-91b1-2a724f99d0af" />

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

<img width="1752" height="786" alt="image" src="https://github.com/user-attachments/assets/517752ed-85eb-49d2-a87d-171500e78f5a" />

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
<img width="1736" height="737" alt="image" src="https://github.com/user-attachments/assets/a761a982-5495-49dc-bacf-1c806d55a900" />

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
<img width="1740" height="661" alt="image" src="https://github.com/user-attachments/assets/327aec56-2b4b-48cb-b46f-9cb97b689219" />

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
<img width="1742" height="893" alt="image" src="https://github.com/user-attachments/assets/f3af9dd0-7834-4a0d-8a57-93f241c63b21" />

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
<img width="1753" height="827" alt="image" src="https://github.com/user-attachments/assets/d8bcfb61-4c25-4aef-b03a-f4ba3df117ac" />

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
<img width="1763" height="881" alt="image" src="https://github.com/user-attachments/assets/58fee734-e3c3-4e2e-9b05-998b57937ba6" />


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
<img width="1768" height="869" alt="image" src="https://github.com/user-attachments/assets/9d6b363a-40d6-4689-8355-adddc534045a" />

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
<img width="1903" height="944" alt="image" src="https://github.com/user-attachments/assets/54986303-8789-4182-9b66-c4fad7e0e839" />

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
<img width="1761" height="586" alt="image" src="https://github.com/user-attachments/assets/6564852d-257d-4516-b736-7a8a0591394e" />

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

<img width="1706" height="851" alt="image" src="https://github.com/user-attachments/assets/08dc01ec-b57a-43d6-b590-aa10a053cb5c" />


### 3.2 Ver un usuario por ID

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{id}
  ```
* **Headers:** `Content-Type: application/json`
* **Respuesta (200 OK):** Objeto JSON del usuario.

  <img width="1753" height="862" alt="image" src="https://github.com/user-attachments/assets/8c009a81-92ba-432f-b308-9785ba239d37" />


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

<img width="1738" height="817" alt="image" src="https://github.com/user-attachments/assets/bd24b0e3-9ae6-4663-bb0d-a15b78801981" />


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

<img width="1768" height="877" alt="image" src="https://github.com/user-attachments/assets/0dc33916-f292-436b-94ed-2b026c872ce2" />

### 3.5 Cambiar solo el equipo activo

* **Descripción:** cambia el equipo activo de un uasuario tiene que ser un equipo que se le encuentre asignado al usuario


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
  <img width="1762" height="894" alt="image" src="https://github.com/user-attachments/assets/7b7e7dee-0340-4ddd-9d93-46522024b34d" />

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

<img width="1766" height="845" alt="image" src="https://github.com/user-attachments/assets/2531a95a-179f-4a4f-81cb-07104c24cf9c" />


## 4. Tareas

### 4.1 Listar todas las tareas

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas
  ```
  <img width="1761" height="920" alt="image" src="https://github.com/user-attachments/assets/f2c0e319-a599-41ce-9a71-411304a657b7" />

* **Respuesta (200 OK):** Array JSON de tareas.

### 4.2 Listar tareas de un proyecto

* **Método:** `GET`
* **Endpoint:**

  ```
  /proyectos/{proyecto}/tareas
  ```
* **Respuesta (200 OK):** `{ "success": true, "proyecto_id": <proyecto>, "data": [/* tareas */] }`

<img width="1769" height="920" alt="image" src="https://github.com/user-attachments/assets/1f1deca8-ca15-4795-b5f7-b0210f1915c9" />


### 4.3 Ver una tarea concreta

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON de la tarea.
* **Respuesta (404):** Si no existe la tarea.

 <img width="1745" height="868" alt="image" src="https://github.com/user-attachments/assets/9aae8454-a069-4c3b-a2f7-a4c23d564fbe" />


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

<img width="1759" height="912" alt="image" src="https://github.com/user-attachments/assets/0f2caf76-38ea-4165-a87f-67993b97979c" />


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

<img width="1773" height="913" alt="image" src="https://github.com/user-attachments/assets/7e734b22-14b5-4b98-b3c4-018b4d55a44a" />


### 4.6 Eliminar una tarea

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /tareas/{id}
  ```
* **Respuesta (204 No Content)**

---

<img width="1758" height="411" alt="image" src="https://github.com/user-attachments/assets/81477079-7c78-4ded-a006-e4b16cec969e" />


## 5. Asignaciones

### 5.1 Listar todas las asignaciones

* **Método:** `GET`
* **Endpoint:**

  ```
  /Asignaciones
  ```
* **Respuesta (200 OK):** Array JSON.

<img width="1739" height="850" alt="image" src="https://github.com/user-attachments/assets/0a85dd29-3391-47df-a7db-ed4191e3f343" />


### 5.2 Ver una asignación concreta

* **Método:** `GET`
* **Endpoint:**

  ```
  /Asignaciones/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON.

<img width="1767" height="863" alt="image" src="https://github.com/user-attachments/assets/82c6ab0e-f94e-407b-bb83-f5bbb517a909" />


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

  <img width="1758" height="851" alt="image" src="https://github.com/user-attachments/assets/b70d5379-fa91-46f4-9875-4468a287e540" />


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

<img width="1763" height="859" alt="image" src="https://github.com/user-attachments/assets/b6dd6a55-f393-4db5-aaf1-dad9fef5e587" />


### 5.5 Eliminar una asignación

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /Asignaciones/{id}
  ```
* **Respuesta (204 No Content)**

<img width="1751" height="177" alt="image" src="https://github.com/user-attachments/assets/18af64ca-59b3-4f96-b4b2-b4db8fba7a2f" />


### 5.6 Obtener tareas de un usuario

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{usuario}/tareas
  ```
* **Respuesta (200 OK):** Array JSON de tareas.

<img width="1767" height="691" alt="image" src="https://github.com/user-attachments/assets/06e2190d-59de-4534-91fe-e0e50fd07062" />


### 5.7 Obtener usuarios de una tarea

* **Método:** `GET`
* **Endpoint:**

  ```
  /tareas/{tarea}/usuarios
  ```
* **Respuesta (200 OK):** Array JSON de usuarios.

---

<img width="1750" height="664" alt="image" src="https://github.com/user-attachments/assets/ef2885a4-a613-40c3-80eb-d063a5ac6efd" />


## 6. Equipo–Usuario

> **Dominio base:** `https://apigestiones.apkfmedekkmewlmewmde.shop/api`

### 6.1 Listar todas las relaciones

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipo-usuarios
  ```
* **Respuesta (200 OK):** Array de objetos con relaciones.

  <img width="1759" height="900" alt="image" src="https://github.com/user-attachments/assets/0422ecaf-c271-403e-bb4e-60cb1d349428" />


### 6.2 Ver una relación por ID

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipo-usuarios/{id}
  ```
* **Respuesta (200 OK):** Objeto JSON con datos anidados.

  <img width="1765" height="843" alt="image" src="https://github.com/user-attachments/assets/9572fdfc-2f63-486a-b9ad-5123e6d7a2c2" />


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
<img width="1750" height="876" alt="image" src="https://github.com/user-attachments/assets/d9f5dcf0-1b14-4452-a915-811bd7573208" />

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

  <img width="1759" height="840" alt="image" src="https://github.com/user-attachments/assets/73b1ced6-43b0-4d19-83f3-7e085e3e15bd" />


### 6.5 Eliminar una relación

* **Método:** `DELETE`
* **Endpoint:**

  ```
  /equipo-usuarios/{id}
  ```
* **Respuesta (200 OK):** `{ "message": "Asignación eliminada correctamente." }`

  <img width="1776" height="721" alt="image" src="https://github.com/user-attachments/assets/fcb81971-d9f6-4ec7-930f-604a66219cd1" />


### 6.6 Obtener usuarios de un equipo

* **Método:** `GET`
* **Endpoint:**

  ```
  /equipos/{equipo}/usuarios
  ```
* **Respuesta (200 OK):** Array JSON de usuarios.

  <img width="1745" height="759" alt="image" src="https://github.com/user-attachments/assets/55d9670a-e519-4b6c-bf56-cee2324e4e13" />


### 6.7 Obtener equipos de un usuario

* **Método:** `GET`
* **Endpoint:**

  ```
  /usuarios/{usuario}/equipos
  ```
* **Respuesta (200 OK):** Array JSON de equipos.

---

<img width="1776" height="666" alt="image" src="https://github.com/user-attachments/assets/f74114ec-c436-4bae-95e6-0d021cee1c9c" />


> **Importante:** Para todas las solicitudes con cuerpo (POST, PUT, PATCH), incluye siempre el encabezado `Content-Type: application/json`.
> En las rutas que devuelven recursos, sigue la estructura estándar:
>
> ```json
> { "success": true, "data": … }
> ```



