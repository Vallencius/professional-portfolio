<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ProjectType;

class ProjectTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProjectType::create([
            'name' => 'Website'
        ]);

        ProjectType::create([
            'name' => 'Android Application'
        ]);

        ProjectType::create([
            'name' => 'Cross Platform Application'
        ]);
    }
}
