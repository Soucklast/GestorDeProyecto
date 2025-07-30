<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Equipo;
use App\Models\Proyecto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ProyectoController extends Controller
{
    /**
     * 1) Lista **todos** los proyectos (GET /api/proyectos).
     */
    public function index()
    {
        $proyectos = Proyecto::all();

        return response()->json([
            'success' => true,
            'data'    => $proyectos,
        ], 200);
    }

    /**
     * 2) Lista los proyectos **de un equipo** (GET /api/equipos/{equipo}/proyectos).
     */
      public function indexByEquipo(Equipo $equipo)
    {
        $proyectos = $equipo->proyectos()->get();

        return response()->json([
            'success'   => true,
            'equipo_id' => $equipo->id,
            'data'      => $proyectos,
        ], 200);
    }

    /**
     * 3) Crea un nuevo proyecto (POST /api/proyectos).
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre'     => 'required|string|max:255',
            'descripcion'=> 'nullable|string',
            'equipo_id'  => 'required|exists:equipos,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $proyecto = Proyecto::create($request->only('nombre','descripcion','equipo_id'));

        return response()->json([
            'success'=> true,
            'data'   => $proyecto,
        ], 201);
    }

    /**
     * 4) Muestra un proyecto concreto (GET /api/proyectos/{proyecto}).
     */
    public function show(Proyecto $proyecto)
    {
        return response()->json([
            'success'=> true,
            'data'   => $proyecto,
        ], 200);
    }

    /**
     * 5) Actualiza un proyecto (PUT/PATCH /api/proyectos/{proyecto}).
     */
    public function update(Request $request, Proyecto $proyecto)
    {
        $validator = Validator::make($request->all(), [
            'nombre'     => 'sometimes|required|string|max:255',
            'descripcion'=> 'sometimes|nullable|string',
            'equipo_id'  => 'sometimes|required|exists:equipos,id',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success'=> false,
                'errors' => $validator->errors(),
            ], 422);
        }

        $proyecto->update($request->only('nombre','descripcion','equipo_id'));

        return response()->json([
            'success'=> true,
            'data'   => $proyecto,
        ], 200);
    }

    /**
     * 6) Elimina un proyecto (DELETE /api/proyectos/{proyecto}).
     */
    public function destroy(Proyecto $proyecto)
    {
        $proyecto->delete();

        return response()->json([
            'success' => true,
            'message' => 'Proyecto eliminado correctamente',
        ], 200);
    }
}
