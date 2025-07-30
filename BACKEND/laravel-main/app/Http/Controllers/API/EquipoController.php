<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Equipo;
use Illuminate\Support\Facades\Validator;

class EquipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Equipo::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|unique:equipos,nombre|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $equipo = Equipo::create($request->all());

        return response()->json([
            'success' => true,
            'data' => $equipo
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $equipo = Equipo::find($id);

        if (!$equipo) {
            return response()->json([
                'success' => false,
                'message' => 'Equipo no encontrado'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $equipo
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $equipo = Equipo::find($id);

        if (!$equipo) {
            return response()->json([
                'success' => false,
                'message' => 'Equipo no encontrado'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'required|string|unique:equipos,nombre,'.$id.'|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $equipo->update($request->all());

        return response()->json([
            'success' => true,
            'data' => $equipo
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $equipo = Equipo::find($id);

        if (!$equipo) {
            return response()->json([
                'success' => false,
                'message' => 'Equipo no encontrado'
            ], 404);
        }

        $equipo->delete();

        return response()->json([
            'success' => true,
            'message' => 'Equipo eliminado correctamente'
        ], 200);
    }
}