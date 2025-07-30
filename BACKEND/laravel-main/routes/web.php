<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EquipoController;

Route::get('/', function () {
    return view('welcome');
});