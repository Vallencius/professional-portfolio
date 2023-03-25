<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Technology extends Model
{
    use HasFactory;
    
    public function projects()
    {
        return $this->hasMany(Projects::class, 'project_technologies', 'id_technology', 'id_project');
    }
}
