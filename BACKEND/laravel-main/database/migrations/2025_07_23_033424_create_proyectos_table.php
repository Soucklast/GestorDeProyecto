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
        Schema::create('proyectos', function (Blueprint $table) {
             $table->id();
            $table->string('Nombre');
            $table->unsignedBigInteger('equipos_id'); // Llave foránea
            $table->timestamps();

            // Definir la foreign key correctamente
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
        Schema::table('proyectos', function (Blueprint $table) {
            $table->dropForeign(['equipos_id']);
        });
        Schema::dropIfExists('proyectos');
    }
};
