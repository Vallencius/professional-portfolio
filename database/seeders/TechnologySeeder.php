<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Technology;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Technology::create([
            'name' => 'PHP',
            'image' => 'php.svg',
        ]);

        Technology::create([
            'name' => 'Laravel',
            'image' => 'laravel.svg',
        ]);

        Technology::create([
            'name' => 'React',
            'image' => 'react.svg',
        ]);

        Technology::create([
            'name' => 'TailwindCSS',
            'image' => 'tailwind.svg',
        ]);
        
        Technology::create([
            'name' => 'Framer Motion',
            'image' => 'Framer.png',
        ]);

        Technology::create([
            'name' => 'MongoDB',
            'image' => 'mongo.svg',
        ]);

        Technology::create([
            'name' => 'MySQL',
            'image' => 'MySQL.svg',
        ]);

        Technology::create([
            'name' => 'RabbitMQ',
            'image' => 'RabbitMQ.svg',
        ]);

        Technology::create([
            'name' => 'HTML',
            'image' => 'HTML.svg',
        ]);
        
        Technology::create([
            'name' => 'CSS',
            'image' => 'CSS.svg',
        ]);
        
        Technology::create([
            'name' => 'JS',
            'image' => 'JS.svg',
        ]);
        
        Technology::create([
            'name' => 'InertiaJS',
            'image' => 'InertiaJS.png',
        ]);
        
        Technology::create([
            'name' => 'Java',
            'image' => 'Java.svg',
        ]);
        
        Technology::create([
            'name' => 'Firebase',
            'image' => 'Firebase.svg',
        ]);
        
        Technology::create([
            'name' => 'Ionic',
            'image' => 'Ionic.svg',
        ]);
        
        Technology::create([
            'name' => 'Bootstrap',
            'image' => 'Bootstrap.svg',
        ]);
    }
}
