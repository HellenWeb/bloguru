<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Authorization extends Controller
{
    /**
     * @param Illuminate\Http\Request $req
     */

    public function Register(Request $req)
    {
        $data = $req->validate([
            "email" => "required|string|unique:persons|max:255",
            "password" => "required|min:6|max:20",
            "name" => "required|max:255"
        ]);

        /**
         * @var App\Models\User $user
         */

        $user = User::create([
            'email' => $data["email"],
            'password' => bcrypt($data["password"]),
            'name' => $data["name"]
        ]);

        $token = $user->createToken('main');
        $accessToken = $token->accessToken;
        $req->session()->regenerate();
        return response()->json(["user" => $user, "token" => $token, "accessToken" => $accessToken]);
    }

    public function Login(Request $req)
    {
        $data = $req->validate([
            "email" => "required|string|max:255",
            "password" => "required|string|min:6|max:255",
            "name" => "required|max:255"
        ]);
        
        if (Auth::attempt($data)) {
            $req->session()->regenerate();
            return response()->json([
                "user" => $data,
            ]);
        }

        return response()->json(["error" => $data], 422);
    }
}
