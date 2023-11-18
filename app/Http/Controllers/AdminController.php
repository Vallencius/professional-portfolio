<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        $projects = Projects::with(["images", "type", "technologies"])->get();

        return Inertia::render('cms/Dashboard', [
            'images' => asset('images'),
            'projects' => $projects,
        ]);
    }
}
