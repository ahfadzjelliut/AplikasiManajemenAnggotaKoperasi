<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Member;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user->role == "superadmin") {
            return response()->json([
                "total_fo" => User::where("role", "fo")->count(),
                "total_anggota" => Member::count(),
            ]);
        }

        if ($user->role == "fo") {
            return response()->json([
                "total_anggota" => Member::where("owner_fo", $user->id)->count(),
            ]);
        }

        return response()->json([]);
    }
}
