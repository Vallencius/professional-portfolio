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
            'image' => 'PHP.svg',
        ]);

        Technology::create([
            'name' => 'Laravel',
            'image' => 'Laravel.svg',
        ]);

        Technology::create([
            'name' => 'React',
            'image' => 'React.svg',
        ]);

        Technology::create([
            'name' => 'TailwindCSS',
            'image' => 'TailwindCSS.svg',
        ]);

        Technology::create([
            'name' => 'MongoDB',
            'image' => 'MongoDB.svg',
        ]);

        Technology::create([
            'name' => 'MySQL',
            'image' => 'MySQL.svg',
        ]);

        Technology::create([
            'name' => 'RabbitMQ',
            'image' => 'RabbitMQ.svg',
        ]);
    }
}
