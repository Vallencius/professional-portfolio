<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectType extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    
    public function projects()
    {
        return $this->hasMany(Projects::class, 'type_id');
    }
}
