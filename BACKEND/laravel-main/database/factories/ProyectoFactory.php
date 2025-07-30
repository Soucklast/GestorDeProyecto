<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use  App\Models\Proyecto;
use App\Models\Equipo;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyecto>
 */
class ProyectoFactory extends Factory
{
    // Modelo asociado
    protected $model = \App\Models\Proyecto::class;

    public function definition(): array
    {
        return [
            // Nombre aleatorio de proyecto (2–4 palabras)
            'Nombre'     => $this->faker->words(rand(2,4), true),

            // Relación: crea un equipo nuevo automáticamente
            'equipos_id' => Equipo::factory(),
        ];
    }
}
