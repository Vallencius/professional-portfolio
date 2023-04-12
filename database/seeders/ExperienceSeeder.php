<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Experience;
use Carbon\Carbon;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Experience::create([
            'title' => 'ESTO Cup 2020',
            'role' => 'Chief Comittee',
            'start_date' => Carbon::parse('2019-12-01'),
            'end_date' => Carbon::parse('2020-02-16'),
        ]);

        Experience::create([
            'title' => 'Mentoring UMN 2021',
            'role' => 'Admin',
            'start_date' => Carbon::parse('2021-03-01'),
            'end_date' => Carbon::parse('2021-11-01'),
        ]);

        Experience::create([
            'title' => 'DKBM UMN Gen XII',
            'role' => 'Web Developer',
            'start_date' => Carbon::parse('2022-03-01'),
            'end_date' => Carbon::parse('2022-05-01'),
        ]);

        Experience::create([
            'title' => 'Mentoring UMN 2022',
            'role' => 'Web Developer',
            'start_date' => Carbon::parse('2022-03-01'),
            'end_date' => Carbon::parse('2022-11-01'),
        ]);

        Experience::create([
            'title' => 'UMN ECO (Earth Caring Operation) 2022',
            'role' => 'Lead Web Developer',
            'start_date' => Carbon::parse('2022-01-01'),
            'end_date' => Carbon::parse('2023-02-01'),
        ]);

        Experience::create([
            'title' => 'TVONAIR8.0',
            'role' => 'Lead Web Developer',
            'start_date' => Carbon::parse('2023-02-01'),
            'end_date' => Carbon::parse('2023-05-01'),
        ]);
        
        Experience::create([
            'title' => 'HMIF UMN Gen XIII',
            'role' => 'Research and Development Coordinator',
            'start_date' => Carbon::parse('2022-12-01'),
            'end_date' => Carbon::parse('2023-11-01'),
        ]);
        
        Experience::create([
            'title' => 'Commpress UMN',
            'role' => 'Web developer',
            'start_date' => Carbon::parse('2023-03-01'),
            'end_date' => Carbon::parse('2023-06-01'),
        ]);

        Experience::create([
            'title' => 'PT Indobest Artha Kreasi',
            'role' => 'Corporate Backend Intern',
            'start_date' => Carbon::parse('2023-01-09'),
            'end_date' => Carbon::parse('2023-12-29'),
        ]);
    }
}
