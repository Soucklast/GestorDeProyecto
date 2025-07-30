<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EquipoController;
use App\Http\Controllers\API\ProyectoController;
use App\Http\Controllers\API\TareaController;
use App\Http\Controllers\API\UsuarioController;
use App\Http\Controllers\API\AsignacionController;




Route::middleware('api')->group(function () {
    
    Route::apiResource('tareas', TareaController::class);

    Route::apiResource('equipos', EquipoController::class);

    Route::apiResource('proyectos', ProyectoController::class);

    Route::apiResource('usuarios', UsuarioController::class);

    Route::apiResource('Asignaciones', AsignacionController::class);

    Route::post('login', [UsuarioController::class, 'login']);

    Route::get('usuarios/{usuario}/tareas', [AsignacionController::class, 'tareasPorUsuario']);

    Route::get('tareas/{tarea}/usuarios', [AsignacionController::class, 'usuariosPorTarea']);

    Route::get(
        'equipos/{equipo}/usuarios',
        [UsuarioController::class, 'indexByEquipo']
    )->name('equipos.usuarios.index');

    Route::get(
        'proyectos/{proyecto}/tareas',
        [TareaController::class, 'indexByProyecto']
    )->name('proyectos.tareas.index');

    Route::get(
        'equipos/{equipo}/proyectos',
        [ProyectoController::class, 'indexByEquipo']
    )->name('equipos.proyectos.index');
});
