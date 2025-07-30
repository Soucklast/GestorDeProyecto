<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;

    protected $table = 'tareas';

    protected $fillable = [
        'titulo',
        'programacion_inicio',
        'programacion_fin',
        'prioridad',
        'estatus',
        'proyectos_id',
    ];
    
    public function proyecto()
    {
        return $this->belongsTo(Proyecto::class, 'proyectos_id');
    }

    /**
     * Usuarios asignados a esta tarea.
     */
    public function usuarios()
    {
        return $this->belongsToMany(
            Usuario::class,
            'asignaciones',
            'tareas_id',
            'usuarios_id'
        );
    }
}
