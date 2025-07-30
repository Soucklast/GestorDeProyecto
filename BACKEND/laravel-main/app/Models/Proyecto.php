<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Proyecto extends Model
{
    use HasFactory;

    // Campos asignables
   protected $fillable = ['nombre', 'descripcion', 'equipos_id'];

public function equipo()
{
    return $this->belongsTo(Equipo::class, 'equipos_id');
}

public function tareas()
    {
        return $this->hasMany(Tarea::class, 'proyectos_id');
    }
}