<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;

class DiriController extends Controller
{
    // Melihat data diri sendiri
    public function index(Request $request)
    {
        $member = Member::with('user')
            ->where('user_id', $request->user()->id)
            ->first();

        if (!$member) {
            return response()->json([
                'message' => 'Data anggota tidak ditemukan'
            ], 404);
        }

        return response()->json($member);
    }

    // Mengubah data diri sendiri
    public function update(Request $request)
    {
        $member = Member::with('user')
            ->where('user_id', $request->user()->id)
            ->first();

        if (!$member) {
            return response()->json([
                'message' => 'Data anggota tidak ditemukan'
            ], 404);
        }

        $request->validate([
            'alamat' => 'required',
            'nohp' => 'required',

            'password' => 'nullable|min:8|confirmed',
        ]);

        $member->update([
            'alamat' => $request->alamat,
            'nohp' => $request->nohp
        ]);

        if($request->filled('password')){
            $member->user->update([
                'password' => Hash::make($request->password)
            ]);
        }

        return response()->json([
            'message' => 'Data berhasil diperbarui',
            'data' => $member
        ]);
    }
}
