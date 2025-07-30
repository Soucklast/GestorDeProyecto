<?php

namespace Database\Factories;

use App\Models\Usuario;
use App\Models\Equipo;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Usuario>
 */
class UsuarioFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Usuario::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre'     => $this->faker->name(),
            'email'      => $this->faker->unique()->safeEmail(),
            'password'   => bcrypt('password'),
            'rol'        => $this->faker->randomElement(['admin', 'cliente']),
            'imagen'     => $this->faker->optional()->imageUrl(400, 400, 'people'),
            'equipos_id' => Equipo::factory(),
        ];
    }
}
