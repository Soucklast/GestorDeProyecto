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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('email')->unique();
            $table->string('password', 255);
            $table->enum('rol', ['admin', 'cliente'])->default('cliente');

            // Columna para ruta/nombre de imagen (opcional)
            $table->string('imagen')->nullable();

            // FK a equipos
            $table->unsignedBigInteger('equipos_id');

            $table->timestamps();

            // Definición de la FK
            $table->foreign('equipos_id')
                  ->references('id')
                  ->on('equipos') // Asegúrate que la tabla se llama 'equipos'
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('usuarios', function (Blueprint $table) {
            $table->dropForeign(['equipos_id']);
        });
        Schema::dropIfExists('usuarios');
    }
};
