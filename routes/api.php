<?php

use App\Http\Controllers\API\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MemberController;
use App\Http\Controllers\API\FOController;
use App\Http\Controllers\API\DiriController;
use App\Http\Controllers\API\AuthController;

Route::get('/dashboard', [DashboardController::class, 'index']);

Route::get('/fo/{id}', [FOController::class, 'show']);
Route::get('/fo', [FOController::class, 'index']);
Route::post('/fo', [FOController::class, 'store']);
Route::put('/fo/{id}', [FOController::class, 'update']);
Route::delete('/fo/{id}', [FOController::class, 'destroy']);


Route::get('/anggota',[MemberController::class,'index']);
Route::get('/anggota/{id}',[MemberController::class,'show']);
Route::post('/anggota',[MemberController::class,'store']);
Route::put('/anggota/{id}',[MemberController::class,'update']);
Route::delete('/anggota/{id}',[MemberController::class,'destroy']);

Route::get('/diri', [DiriController::class, 'index']);
Route::put('/diri', [DiriController::class, 'update']);

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');
