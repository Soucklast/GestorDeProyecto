<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Asignacion;
use App\Models\Tarea;
use App\Models\Usuario;

class AsignacionFactory extends Factory
{
    // Indicar explícitamente el modelo
    protected $model = Asignacion::class;

    public function definition(): array
    {
        $tareaId = Tarea::pluck('id')->random() 
            ?? Tarea::factory()->create()->id;
        $usuarioId = Usuario::pluck('id')->random()
            ?? Usuario::factory()->create()->id;

        return [
            'tareas_id'   => $tareaId,
            'usuarios_id' => $usuarioId,
        ];
    }
}
