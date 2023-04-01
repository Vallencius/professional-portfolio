<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;

class MainController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'images' => asset('images'),
            'recent_projects' => Projects::orderBy('id', 'DESC')->limit(6)->get(),
        ]);
    }
    
    public function about()
    {
        return Inertia::render('AboutUs', [
            // 'images' => asset('images')
        ]);
    }

    public function projects()
    {
        return Inertia::render('Projects', [
            // 'images' => asset('images'),
            'projects' => Projects::all(),
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            // 'images' => asset('images')
        ]);
    }
}
