<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'images' => asset('images')
        ]);
    }
    
    public function about()
    {
        return Inertia::render('AboutUs', [
            'images' => asset('images')
        ]);
    }

    public function projects()
    {
        return Inertia::render('Projects', [
            'images' => asset('images')
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'images' => asset('images')
        ]);
    }
}
