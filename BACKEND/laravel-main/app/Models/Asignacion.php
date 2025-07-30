<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asignacion extends Model
{
    use HasFactory;

    // Nombre exacto de la tabla en la base de datos
    protected $table = 'asignaciones';

    // Los campos que vas a rellenar masivamente
    protected $fillable = [
        'tareas_id',
        'usuarios_id',
    ];

    // (Opcional) Si quieres definir relaciones:
    public function tarea()
    {
        return $this->belongsTo(Tarea::class, 'tareas_id');
    }

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuarios_id');
    }
}
