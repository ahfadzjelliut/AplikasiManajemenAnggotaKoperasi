<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
            'status'   => 'required|in:aktif,tidak_aktif',
        ]);

        $fo = User::create([
            'nama'     => $request->nama,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
            'role'     => 'fo',
            'status'   => $request->status,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'FO berhasil ditambahkan.',
            'data'    => $fo,
        ], 201);
    }
    public function update(Request $request, $id)
    {
        $fo = User::where('role', 'fo')->find($id);

        if (!$fo) {
            return response()->json([
                'success' => false,
                'message' => 'FO tidak ditemukan.'
            ], 404);
        }

        $request->validate([
            'nama' => 'required|string|max:100',
            'email' => 'required|email|unique:user,email,' . $id,
            'status' => 'required|in:aktif,tidak_aktif',
        ]);

        $fo->update([
            'nama' => $request->nama,
            'email' => $request->email,
            'status' => $request->status,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Data FO berhasil diperbarui.',
            'data' => $fo
        ]);
    }
    public function destroy($id)
    {
        $fo = User::where('role', 'fo')->find($id);

        if (!$fo) {
            return response()->json([
                "success" => false,
                "message" => "FO tidak ditemukan."
            ], 404);
        }

        $fo->delete();

        return response()->json([
            "success" => true,
            "message" => "FO berhasil dihapus."
        ]);
    }
}
