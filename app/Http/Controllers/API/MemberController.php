<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Member;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class MemberController extends Controller
{
    public function index()
    {
        $member = Member::with('user')->get();
        return response()->json($member);
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'email' => 'required|email|unique:user,email',
            'password' => 'required|min:8',

            'nik' => 'required|unique:anggota,nik',
            'tgl_lahir' => 'required',
            'alamat' => 'required',
            'nohp' => 'required'
        ],[
            'nama.required' => 'Nama wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email sudah digunakan.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal 8 karakter.',
            'nik.unique' => 'NIK sudah digunakan.',
            'tgl_lahir.required' => 'Tanggal lahir perlu diisi.',
            'alamat.required' => 'Alamat perlu diisi.',
            'nohp.required' => 'Nomor HP perlu diisi.',
        ]);
        DB::beginTransaction();
        try {
            $user = User::create([
                'nama' => $request->nama,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'role' => 'member',
                'status' => 'aktif'
            ]);
            $member = Member::create([
                'user_id' => $user->id,
                'no_anggota' => $this->generateNoAnggota(),
                'nik' => $request->nik,
                'tgl_lahir' => $request->tgl_lahir,
                'alamat' => $request->alamat,
                'nohp' => $request->nohp,

                'owner_fo' => 1
            ]);
            DB::commit();
            return response()->json([
                "message"=>"Anggota berhasil ditambahkan",
                "user"=>$user,
                "member"=>$member
            ],201);
        } catch (\Exception $e){
            DB::rollBack();
            return response()->json([
                "message"=>$e->getMessage()
            ],500);
        }
    }
    private function generateNoAnggota()
    {
        $last = Member::latest('id')->first();

        if(!$last){
            return "AG1";
        }

        $angka = substr($last->no_anggota,2);

        return "AG".($angka+1);
    }
    public function show($id)
    {
        $member = Member::with('user')->find($id);

        if (!$member) {
            return response()->json([
                "message" => "Data tidak ditemukan"
            ], 404);
        }

        return response()->json([
            'id'         => $member->id,
            'nama'       => $member->user->nama,
            'email'      => $member->user->email,
            'nik'        => $member->nik,
            'tgl_lahir'  => $member->tgl_lahir,
            'alamat'     => $member->alamat,
            'nohp'       => $member->nohp,
        ]);
    }

    public function update(Request $request, $id)
    {
        $member = Member::find($id);
        if(!$member){
            return response()->json([
                "message"=>"Data tidak ditemukan"
            ],404);
        }
        $user = User::find($member->user_id);
        DB::beginTransaction();
        try{
            $user->update([
                'nama'=>$request->nama,
                'email'=>$request->email,
            ]);
            $member->update([
                'nik'=>$request->nik,
                'tgl_lahir'=>$request->tgl_lahir,
                'alamat'=>$request->alamat,
                'nohp'=>$request->nohp,
            ]);
            DB::commit();
            return response()->json([
                "message"=>"Data berhasil diupdate"
            ]);
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                "message"=>$e->getMessage()
            ],500);
        }
    }

    public function destroy($id)
    {
        $member = Member::find($id);
        if(!$member){
            return response()->json([
                "message"=>"Data tidak ditemukan"
            ],404);
        }
        DB::beginTransaction();
        try{
            User::find($member->user_id)->delete();
            $member->delete();
            DB::commit();
            return response()->json([
                "message"=>"Data berhasil dihapus"
            ]);
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                "message"=>$e->getMessage()
            ],500);
        }
    }
}
