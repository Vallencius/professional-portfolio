<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Achievement;
use Carbon\Carbon;

class AchievementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Achievement::create([
            'name' => 'Awardee Online Schoolarship Competition (OSC) by medcom.id',
            'description' => '',
            'start_date' => Carbon::parse('2019-11-01'),
            'end_date' => Carbon::parse('2019-12-01'),
        ]);

        Achievement::create([
            'name' => 'Back-to-back 1st winner of Computer Science National Olympiad (OSN) City level in 2018 and 2019',
            'description' => '',
            'start_date' => Carbon::parse('2018-02-01'),
            'end_date' => Carbon::parse('2019-02-01'),
        ]);
    }
}
