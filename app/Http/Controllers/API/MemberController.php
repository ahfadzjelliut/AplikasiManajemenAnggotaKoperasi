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
    public function store()
    {
        $request->validate([
            'nik'=>'required|unique:anggota',
            'alamat'=>'required',
            'nohp'=>'required'
        ]);
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
