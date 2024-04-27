<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\CMS\ProjectTypeRequest;
use App\Http\Requests\CMS\TechnologyRequest;
use App\Models\Projects;
use App\Models\ProjectTechnology;
use App\Models\Technology;
use App\Models\ProjectImages;
use App\Models\ProjectType;
use Illuminate\Support\Facades\Auth;
use Services\BaseApiService;

class AdminController extends Controller
{
    const PER_PAGE = 10;

    public function dashboard()
    {
        return Inertia::render('cms/Dashboard', [
            'images' => asset('images')
        ]);
    }

    public function getProjects()
    {
        return Projects::with(["images", "type", "technologies"])->paginate(self::PER_PAGE);
    }

    public function getTechnologies()
    {
        return Technology::paginate(self::PER_PAGE);
    }

    public function getProjectTypes()
    {
        return ProjectType::paginate(self::PER_PAGE);
    }

    public function getAllTechnologies()
    {
        return Technology::get();
    }

    public function getAllProjectTypes()
    {
        return ProjectType::get();
    }
    
    public function getImages($id)
    {
        return ProjectImages::where('id_project', $id)->paginate(self::PER_PAGE);
    }
    
    public function addProjects(Request $request)
    {
        $technologies = explode(',', $request->get('Technologies'));
        $file = $request->file('Logo');
        $service = new BaseApiService();

        if ($request->hasFile('Logo') && $request->file('Logo')->isValid()) {
            $originalName = $file->getClientOriginalName();
            $filePath = $file->storeAs('projects/' . $request->get('Slug'), $originalName, 'public');
        
            $project = Projects::create([
                'title' => $request->get('Title'),
                'description' => $request->get('Description'),
                'slug' => $request->get('Slug'),
                'link' => $request->get('Link'),
                'type_id' => $request->get('Type'),
            ]);

            foreach ($technologies as $technology) {
                ProjectTechnology::create([
                    'id_project' => $project->id,
                    'id_technology' => $technology
                ]);
            }

            ProjectImages::create([
                'id_project' => $project->id,
                'name' => $originalName,
                'image' => $request->get('Slug') . '/' . $originalName,
            ]);
            
            return $service->success('Project Added!', [$project]);
        }
        
        return $service->error('Project Logo Invalid!');
    }

    public function addTechnologies(TechnologyRequest $request)
    {
        $file = $request->file('Logo');
        $service = new BaseApiService();

        if ($request->hasFile('Logo') && $request->file('Logo')->isValid()) {
            $originalName = $file->getClientOriginalName();
            $filePath = $file->storeAs('logo', $originalName, 'public');
        
            $projectType = Technology::create([
                'name' => $request->get('Name'),
                'image' => $originalName
            ]);
            
            return $service->success('Project Type Added!', [$projectType]);
        }
        
        return $service->error('Project Type Logo Invalid!');
    }

    public function addProjectTypes(ProjectTypeRequest $request)
    {
        $projectType = ProjectType::create([
            'name' => $request->get('Name')
        ]);

        $service = new BaseApiService();
        
        return $service->success('Project Type Added!', $projectType);
    }
    
    public function editProjects(Request $request)
    {
        return ["EDIT PROJECT", $request->all()];
    }

    public function editTechnologies(Request $request)
    {
        return ["EDIT TECH", $request->all()];
    }

    public function editProjectTypes(ProjectTypeRequest $request)
    {
        return ["EDIT TYPE", $request->all()];
    }
}
