<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            AchievementSeeder::class,
            ExperienceSeeder::class,
            JobDescriptionSeeder::class,
            ProjectTypeSeeder::class,
            ProjectsSeeder::class,
            ProjectImagesSeeder::class,
            ProjectTechnologySeeder::class,
            TechnologySeeder::class,
            UserSeeder::class,
        ]);
    }
}
