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
            'image' => 'framer.png',
        ]);

        Technology::create([
            'name' => 'MongoDB',
            'image' => 'mongo.svg',
        ]);

        Technology::create([
            'name' => 'MySQL',
            'image' => 'mysql.svg',
        ]);

        Technology::create([
            'name' => 'RabbitMQ',
            'image' => 'rabbitmq.svg',
        ]);

        Technology::create([
            'name' => 'HTML',
            'image' => 'html.svg',
        ]);
        
        Technology::create([
            'name' => 'CSS',
            'image' => 'css.svg',
        ]);
        
        Technology::create([
            'name' => 'JS',
            'image' => 'js.svg',
        ]);
        
        Technology::create([
            'name' => 'InertiaJS',
            'image' => 'inertia.png',
        ]);
        
        Technology::create([
            'name' => 'Java',
            'image' => 'java.svg',
        ]);
        
        Technology::create([
            'name' => 'Firebase',
            'image' => 'firebase.svg',
        ]);
        
        Technology::create([
            'name' => 'Ionic',
            'image' => 'ionic.svg',
        ]);
        
        Technology::create([
            'name' => 'Bootstrap',
            'image' => 'bootstrap.png',
        ]);
        
        Technology::create([
            'name' => 'Python',
            'image' => 'python.png',
        ]);
        
        Technology::create([
            'name' => 'Flask',
            'image' => 'flask.png',
        ]);
    }
}
