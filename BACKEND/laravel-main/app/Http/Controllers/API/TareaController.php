<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tarea;
use App\Models\Proyecto;

class TareaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Recupera todas las tareas
        $tareas = Tarea::all();
        return response()->json($tareas, 200);
    }

     public function indexByProyecto(Proyecto $proyecto)
    {
        $tareas = $proyecto->tareas()->get();

        return response()->json([
            'success'   => true,
            'proyecto_id' => $proyecto->id,
            'data'      => $tareas,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validación de los datos entrantes
        $validated = $request->validate([
            'titulo'               => 'required|string|max:255',
            'programacion_inicio'  => 'required|date',
            'programacion_fin'     => 'required|date|after_or_equal:programacion_inicio',
            'prioridad'            => 'required|string|max:50',
            'estatus'              => 'required|string|max:50',
            'proyectos_id'         => 'required|exists:proyectos,id',
        ]);

        // Creación del registro
        $tarea = Tarea::create($validated);

        return response()->json([
            'message' => 'Tarea creada exitosamente',
            'data'    => $tarea
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Busca o falla con 404
        $tarea = Tarea::findOrFail($id);
        return response()->json($tarea, 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tarea = Tarea::findOrFail($id);

        // Validación de los datos entrantes
        $validated = $request->validate([
            'titulo'               => 'sometimes|required|string|max:255',
            'programacion_inicio'  => 'sometimes|required|date',
            'programacion_fin'     => 'sometimes|required|date|after_or_equal:programacion_inicio',
            'prioridad'            => 'sometimes|required|string|max:50',
            'estatus'              => 'sometimes|required|string|max:50',
            'proyectos_id'         => 'sometimes|required|exists:proyectos,id',
        ]);

        // Actualiza el registro
        $tarea->update($validated);

        return response()->json([
            'message' => 'Tarea actualizada exitosamente',
            'data'    => $tarea
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tarea = Tarea::findOrFail($id);
        $tarea->delete();

        // 204 No Content
        return response()->json(null, 204);
    }
}
