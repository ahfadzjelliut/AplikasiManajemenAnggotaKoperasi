<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Member extends Model
{
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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function pembuat()
    {
        return $this->belongsTo(User::class, 'owner_fo');
    }
}
