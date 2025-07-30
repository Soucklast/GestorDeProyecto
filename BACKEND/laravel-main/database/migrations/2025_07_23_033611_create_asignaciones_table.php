<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('asignaciones', function (Blueprint $table) {
           
           $table->id();

            // FK a tarea
            $table->unsignedBigInteger('tareas_id');
            // FK a usuario
            $table->unsignedBigInteger('usuarios_id');

            $table->timestamps();

            // Definir las relaciones
            $table->foreign('tareas_id')
                  ->references('id')
                  ->on('tareas')
                  ->onDelete('cascade');

            $table->foreign('usuarios_id')
                  ->references('id')
                  ->on('usuarios') // Asegúrate que la tabla se llama 'usuarios'
                  ->onDelete('cascade');

            // (Opcional) evitar duplicados: un mismo usuario no se asigne dos veces a la misma tarea
            $table->unique(['tareas_id', 'usuarios_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('asignaciones', function (Blueprint $table) {
            $table->dropForeign(['tareas_id']);
            $table->dropForeign(['usuarios_id']);
        });
        Schema::dropIfExists('asignaciones');
    }
};
