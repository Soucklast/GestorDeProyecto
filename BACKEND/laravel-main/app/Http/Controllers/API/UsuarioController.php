<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Equipo;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = Usuario::all();
        return response()->json($usuarios);
    }

    public function indexByEquipo(Equipo $equipo)
    {
        $usuarios = $equipo->usuarios()->get();

        return response()->json([
            'success'   => true,
            'equipo_id' => $equipo->id,
            'data'      => $usuarios,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'nombre'      => ['required', 'string', 'max:255'],
            'email'       => ['required', 'email', 'max:255', 'unique:usuarios'],
            'password'    => ['required', 'string', 'min:6'],
            'rol'         => ['required', Rule::in(['admin', 'cliente'])],
            'imagen'      => ['nullable', 'string', 'max:255'],
            'equipos_id'  => ['required', 'exists:equipos,id'],
        ]);

        $data['password'] = Hash::make($data['password']);

        $usuario = Usuario::create($data);

        return response()->json($usuario, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        return response()->json($usuario);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $usuario = Usuario::findOrFail($id);

        $data = $request->validate([
            'nombre'      => ['sometimes', 'string', 'max:255'],
            'email'       => ['sometimes', 'email', 'max:255', Rule::unique('usuarios')->ignore($usuario->id)],
            'password'    => ['sometimes', 'string', 'min:6'],
            'rol'         => ['sometimes', Rule::in(['admin', 'cliente'])],
            'imagen'      => ['nullable', 'string', 'max:255'],
            'equipos_id'  => ['sometimes', 'exists:equipos,id'],
        ]);

        if (isset($data['password'])) {
            $data['password'] = Hash::make($data['password']);
        }

        $usuario->update($data);

        return response()->json($usuario);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $usuario = Usuario::findOrFail($id);
        $usuario->delete();
        return response()->json(null, 204);
    }

    public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => ['required', 'email'],
        'password' => ['required', 'string']
    ]);

    $usuario = Usuario::where('email', $credentials['email'])->first();

    if (!$usuario || !Hash::check($credentials['password'], $usuario->password)) {
        return response()->json(['message' => 'Credenciales inválidas'], 401);
    }

    return response()->json($usuario); // Aquí podrías generar token si quisieras
}
}
