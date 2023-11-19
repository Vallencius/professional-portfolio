<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;
use App\Models\Technology;
use App\Models\ProjectType;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('cms/Dashboard', [
            'images' => asset('images')
        ]);
    }

    public function getProjects()
    {
        return Projects::with(["images", "type", "technologies"])->paginate(10);
    }

    public function getTechnologies()
    {
        return Technology::paginate(10);
    }

    public function getProjectTypes()
    {
        return ProjectType::paginate(10);
    }
}
