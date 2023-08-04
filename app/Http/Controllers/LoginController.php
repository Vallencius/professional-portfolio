<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Services\LoginService;

class LoginController extends Controller
{
    public function loginPage()
    {
        return Inertia::render('cms/Login', [
            'csrf' => csrf_token(),
            'images' => asset('images'),
        ]);
    }

    public function login(LoginRequest $request){
        $credentials = $request->all();
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return response()->json(['message' => 'Login berhasil!', 'status' => LoginService::STATUS_LOGIN_SUCCESS], 200);
        }

        return response()->json(['message' => 'Login gagal, terdapat kesalahan pada email/password!', 'status' => LoginService::STATUS_LOGIN_FAILED], 200);
    }
}
