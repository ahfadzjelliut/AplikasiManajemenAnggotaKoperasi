<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Member;

class DashboardController extends Controller
{
    public function index()
    {
        return response()->json([
            'total_fo' => User::where('role', 'fo')->count(),
            'total_anggota' => Member::count(),
        ]);
    }
}
