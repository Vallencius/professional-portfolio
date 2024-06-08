<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Projects;
use App\Models\ProjectType;
use App\Models\Technology;

class ProjectsController extends Controller
{
  const PER_PAGE = 10;

  public function projects()
  {
    $projects = Projects::paginate(10);
    foreach($projects as $project){
        $project['images'] = $project->images;
        $project['technologies'] = $project->technologies;
        $project['type'] = $project->type;
    }

    $technologies = Technology::all();
    foreach($technologies as $technology){
        $technology['isFiltered'] = false;
    }

    $projectTypes = ProjectType::all();
    foreach($projectTypes as $projectType){
        $projectType['isFiltered'] = false;
    }

    return Inertia::render('Projects', [
        'images' => asset('images'),
        'logo' => asset('images/logo'),
        'project_images' => asset('images/projects'),
        'projects' => $projects,
        'projectTypes' => $projectTypes,
        'technologies' => $technologies,
    ]);
  }

  public function projectsFilter(Request $request)
  {
    $request->technologies = json_decode($request->technologies);
    $request->projectTypes = json_decode($request->projectTypes);
  
    $filteredTech = [];
    foreach ($request->technologies as $tech) {
      if ($tech->isFiltered) {
        array_push($filteredTech, $tech->id);
      }
    }

    $filteredTypes = [];
    foreach ($request->projectTypes as $type) {
      if ($type->isFiltered) {
        array_push($filteredTypes, $type->id);
      }
    }

    if ($filteredTech !== [] || $filteredTypes !== []) {
      if ($filteredTech !== []) {
        $projects = Projects::whereHas('technologies', function($query) use($filteredTech) {
          $query->whereIn('id_technology', $filteredTech);
        });
        if ($filteredTypes !== []) {
          $projects = $projects->whereIn('type_id', $filteredTypes);
        }
      } elseif ($filteredTypes !== []) {
        $projects = Projects::whereIn('type_id', $filteredTypes);
      }

      $projects = $projects->paginate(self::PER_PAGE);
    } else {
      $projects = Projects::paginate(self::PER_PAGE);
    }

    foreach($projects as $project){
        $project['images'] = $project->images;
        $project['technologies'] = $project->technologies;
        $project['type'] = $project->type;
    }

    return Inertia::render('Projects', [
      'images' => asset('images'),
      'logo' => asset('images/logo'),
      'project_images' => asset('images/projects'),
      'projects' => $projects,
      'projectTypes' => $request->projectTypes,
      'technologies' => $request->technologies,
  ]);
  }

  public function projectDetail($slug)
  {
    $project = Projects::where('slug', $slug)->first();
    $project['images'] = $project->images;
    $project['technologies'] = $project->technologies;
    $project['type'] = $project->type;

    return Inertia::render('ProjectDetail', [
      'images' => asset('images'),
      'logo' => asset('images/logo'),
      'project_images' => asset('images/projects'),
      'project' => $project,
    ]);
  }
}
