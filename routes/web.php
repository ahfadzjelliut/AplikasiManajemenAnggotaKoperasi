<?php

use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return view('app');
//});

Route::view('/','app');

Route::view('/{any}','app')->where('any','.*');

//Route::post('/login',[AuthController::class,'login']);
