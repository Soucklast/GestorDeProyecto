<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'email',
        'password',
        'rol',
        'imagen',
        'equipos_id',
    ];

    public function equipo()
    {
        return $this->belongsTo(Equipo::class, 'equipos_id');
    }

    /**
     * Tareas a las que está asignado este usuario.
     */
    public function tareas()
    {
        return $this->belongsToMany(
            Tarea::class,
            'asignaciones',
            'usuarios_id',
            'tareas_id'
        );
    }
}
