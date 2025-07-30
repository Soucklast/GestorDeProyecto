<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\Asignacion;
use App\Models\Usuario;
use App\Models\Tarea;


class AsignacionController extends Controller
{
    /**
     * Display a listing of all assignments.
     */
    public function index()
    {
        $asignaciones = Asignacion::with(['tarea', 'usuario'])->get();
        return response()->json($asignaciones, Response::HTTP_OK);
    }

    /**
     * Display the tasks assigned to a specific user.
     *
     * @param  int  $usuarioId
     */
    public function tareasPorUsuario($usuarioId)
    {
        $asignaciones = Asignacion::with('tarea')
            ->where('usuarios_id', $usuarioId)
            ->get();

        $tareas = $asignaciones->pluck('tarea');

        return response()->json($tareas, Response::HTTP_OK);
    }

    /**
     * Display the users assigned to a specific task.
     *
     * @param  int  $tareaId
     */
    public function usuariosPorTarea($tareaId)
    {
        $asignaciones = Asignacion::with('usuario')
            ->where('tareas_id', $tareaId)
            ->get();

        $usuarios = $asignaciones->pluck('usuario');

        return response()->json($usuarios, Response::HTTP_OK);
    }

    /**
     * Store a newly created assignment in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tareas_id'   => 'required|integer|exists:tareas,id',
            'usuarios_id' => 'required|integer|exists:usuarios,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $asignacion = Asignacion::create($request->only(['tareas_id', 'usuarios_id']));
        return response()->json($asignacion, Response::HTTP_CREATED);
    }

    /**
     * Display the specified assignment.
     */
    public function show($id)
    {
        $asignacion = Asignacion::with(['tarea', 'usuario'])->find($id);

        if (! $asignacion) {
            return response()->json(['message' => 'Asignación no encontrada.'], Response::HTTP_NOT_FOUND);
        }

        return response()->json($asignacion, Response::HTTP_OK);
    }

    /**
     * Update the specified assignment in storage.
     */
    public function update(Request $request, $id)
    {
        $asignacion = Asignacion::find($id);
        if (! $asignacion) {
            return response()->json(['message' => 'Asignación no encontrada.'], Response::HTTP_NOT_FOUND);
        }

        $validator = Validator::make($request->all(), [
            'tareas_id'   => 'sometimes|required|integer|exists:tareas,id',
            'usuarios_id' => 'sometimes|required|integer|exists:usuarios,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $asignacion->update($request->only(['tareas_id', 'usuarios_id']));
        return response()->json($asignacion, Response::HTTP_OK);
    }

    /**
     * Remove the specified assignment from storage.
     */
    public function destroy($id)
    {
        $asignacion = Asignacion::find($id);
        if (! $asignacion) {
            return response()->json(['message' => 'Asignación no encontrada.'], Response::HTTP_NOT_FOUND);
        }

        $asignacion->delete();
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
