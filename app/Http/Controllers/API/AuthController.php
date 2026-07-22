<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validated = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $validated['email'])->first();

        // Email tidak ditemukan
        if (!$user) {
            return response()->json([
                'message' => 'Email tidak ditemukan.'
            ], 401);
        }

        // Password salah
        if (!Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'message' => 'Password salah.'
            ], 401);
        }

        // Akun tidak aktif
        if ($user->status !== 'aktif') {
            return response()->json([
                'message' => 'Akun tidak aktif.'
            ], 403);
        }

        return response()->json([
            'message' => 'Login berhasil.',
            'user' => [
                'id'     => $user->id,
                'nama'   => $user->nama,
                'email'  => $user->email,
                'role'   => $user->role,
                'status' => $user->status,
            ]
        ]);
    }

    public function logout()
    {
        return response()->json([
            'message' => 'Logout berhasil.'
        ]);
    }
}
