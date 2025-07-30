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
        Schema::create('tareas', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->date('programacion_inicio');
            $table->date('programacion_fin');
            $table->string('prioridad');
            $table->string('estatus');
            $table->unsignedBigInteger('proyectos_id');
            $table->timestamps();

            // Definición de la clave foránea
            $table->foreign('proyectos_id')
                  ->references('id')
                  ->on('proyectos')      // asegúrate de que la tabla se llame 'proyectos'
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tareas', function (Blueprint $table) {
            $table->dropForeign(['proyectos_id']);
        });
        Schema::dropIfExists('tareas');
    }
};
