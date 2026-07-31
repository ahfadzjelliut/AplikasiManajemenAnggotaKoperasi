<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\User;

class DiriController extends Controller
{
    // Melihat data diri sendiri
    public function show($id)
    {
        $member = Member::with('user')
            ->where('user_id', $id)
            ->first();

        if (!$member) {
            return response()->json([
                'message' => 'Data anggota tidak ditemukan'
            ], 404);
        }

        return response()->json($member);
    }

    public function showDiriTim(Request $request, $id){
        $member = Member::where('user_id',$id)
        ->first();
        $team = Member::with('anggota')
        ->where('owner_fo',$member->owner_fo);

        if($request->filled('search')){
            $team->whereHas('anggota',function($q) use ($request){
                $q->where('nama','like','%'.$request->search . '%');
            });
        }

        return response()->json($team->get());
    }

    // Mengubah data diri sendiri
    public function update(Request $request,$id)
    {
        $member = Member::with('user')
            ->where('user_id', $id)
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
