<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;

class MemberController extends Controller
{
    public function index()
    {
        $member = Member::all();

        return response()=>->json([
            'success'=> true,
            'message'=>'Data anggota berhasil diambil.',
            'data'=> $member
        ])
    }
    public function store(Request $request)
    {
        $request->validate([
            'nik'=>'required|unique:anggota',
            'alamat'=>'required',
            'nohp'=>'required'
        ]);
        $member = Member::create([
            'nik' => $request->nik,
            'no_anggota' => $request->no_anggota,
            'tgl_lahir' => $request->tgl_lahir,
            'alamat' => $request->alamat,
            'nohp' => $request->nohp,
            'owner_fo' => $request->owner_fo,
        ]);
        return response()->json([
            'success' => true,
            'message' => 'Anggota berhasil ditambahkan.',
            'data' => $member
        ], 201);
    }
    public function show($id)
    {
        $member = Member::find($id);

        if(!member){
            return response()->json([
            'success' => false,
            'message' => 'Data tidak ditemukan.'
        ], 404);
        }
        return response()->json([
        'success' => true,
        'data' => $member
        ]);
    }
    public function update()
    {

    }
    public function destroy()
    {

    }
}
