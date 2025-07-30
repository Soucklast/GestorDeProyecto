<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    /** @use HasFactory<\Database\Factories\EquipoFactory> */
    use HasFactory;
    public function proyectos()
    {
        return $this->hasMany(Proyecto::class, 'equipos_id');
    }

    public function usuarios()
    {
    return $this->hasMany(Usuario::class, 'equipos_id');
    }

}
