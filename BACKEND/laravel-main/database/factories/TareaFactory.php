<?php

namespace Database\Factories;

use App\Models\Tarea;
use App\Models\Proyecto;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tarea>
 */
class TareaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Tarea::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Generamos una fecha de inicio aleatoria en el último mes
        $inicio = $this->faker->dateTimeBetween('-1 month', 'now');
        // Y la fecha de fin la programamos hasta 1 mes después del inicio
        $fin = $this->faker->dateTimeBetween($inicio, $inicio->format('Y-m-d H:i:s') . ' +1 month');

        return [
            'titulo'               => $this->faker->sentence(3, true),
            'programacion_inicio'  => $inicio->format('Y-m-d'),
            'programacion_fin'     => $fin->format('Y-m-d'),
            'prioridad'            => $this->faker->randomElement(['baja', 'media', 'alta']),
            'estatus'              => $this->faker->randomElement(['pendiente', 'en progreso', 'completada']),
            // Crea o asocia un proyecto aleatorio
            'proyectos_id'         => Proyecto::factory(),
        ];
    }
}
