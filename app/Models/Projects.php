<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    
    public function images()
    {
        return $this->hasMany(ProjectImages::class, 'id_project');
    }
    
    public function technologies()
    {
        return $this->belongsToMany(Technology::class, 'project_technologies', 'id_project', 'id_technology');
    }
}
