<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\MemberController;

Route::get('/anggota',[MemberController::class,'index']);

Route::get('/anggota/{$id}',[MemberController::class,'show']);

Route::post('/anggota', [MemberController::class, 'store']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
