<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;

class FOController extends Controller
{
    public function index()
    {
        $fo = User::where('role', 'fo')->get();

        return response()->json([
            'success' => true,
            'message' => 'Data FO berhasil diambil.',
            'data' => $fo
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama'     => 'required|string|max:100',
            'email'    => 'required|email|unique:user,email',
            'password' => 'required|min:8',
        ],[
            'nama.required' => 'Nama wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah digunakan.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal 8 karakter.',
        ]
        );

        $fo = User::create([
            'nama'     => $request->nama,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'fo',
            'status'   => 'aktif',
        ]);

        return response()->json([
            'success' => true,
            'message' => 'FO berhasil ditambahkan.',
            'data'    => $fo,
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $fo = User::where('role', 'fo')
                    ->where('id', $id)
                    ->firstOrFail();

        $validated = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => [
                'required',
                'email',
                Rule::unique('user', 'email')->ignore($fo->id),
            ],
            'password' => 'nullable|min:8',
            'status' => 'required|in:aktif,nonaktif',
        ]);

        $fo->nama = $validated['nama'];
        $fo->email = $validated['email'];
        $fo->status = $validated['status'];

        // Hanya ubah password jika diisi
        if (!empty($validated['password'])) {
            $fo->password = Hash::make($validated['password']);
        }

        $fo->save();

        return response()->json([
            'message' => 'Data FO berhasil diperbarui.',
            'data' => $fo,
        ]);
    }

    public function destroy($id)
    {
        $fo = User::where('role', 'fo')
                    ->where('id', $id)
                    ->firstOrFail();

        $fo->delete();

        return response()->json([
            'message' => 'FO berhasil dihapus.'
        ]);
    }

    public function show($id)
    {
        $fo = User::where('role', 'fo')
                    ->where('id', $id)
                    ->firstOrFail();

        return response()->json($fo);
    }
}
