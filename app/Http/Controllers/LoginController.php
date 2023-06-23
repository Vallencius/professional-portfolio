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

    public function login(LoginRequest $request)
    {
        $credentials = $request->all();
        
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['message' => 'Login berhasil!', 'status' => LoginService::STATUS_LOGIN_SUCCESS, 'token' => $token], 200);
        }

        return response()->json(['message' => 'Login gagal, terdapat kesalahan pada email/password!', 'status' => LoginService::STATUS_LOGIN_FAILED], 200);
    }

    public function logout()
    {
        Auth::guard('web')->logout();
        return response()->json(['message' => 'Logged out successfully', 'status' => LoginService::STATUS_LOGIN_SUCCESS], 200);
    }
}
