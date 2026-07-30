<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Member extends Model
{
    public $timestamps = false;
    protected $table = 'anggota';
    protected $fillable = [
        'user_id',
        'no_anggota',
        'nik',
        'tgl_lahir',
        'alamat',
        'nohp',
        'owner_fo',
    ];

    public function anggota()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    public function fo()
    {
        return $this->belongsTo(User::class, 'owner_fo');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
