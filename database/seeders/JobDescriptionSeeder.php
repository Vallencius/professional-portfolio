<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Jobdescription;

class JobDescriptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Jobdescription::create([
            'id_experience' => 1,
            'job' => "Manage all requirements for the event"
        ]);

        Jobdescription::create([
            'id_experience' => 1,
            'job' => "Discussing sponsorship and collaboration with related company"
        ]);

        Jobdescription::create([
            'id_experience' => 1,
            'job' => "Make sure everything is going well according to the plan"
        ]);

        Jobdescription::create([
            'id_experience' => 1,
            'job' => "Cooperate with all divisions"
        ]);

        Jobdescription::create([
            'id_experience' => 2,
            'job' => "Make regulations for mentoring's committee and participants"
        ]);

        Jobdescription::create([
            'id_experience' => 2,
            'job' => "Consider excuses given from mentoring's committee and particicpants to not attending mentoring"
        ]);

        Jobdescription::create([
            'id_experience' => 3,
            'job' => "Make and maintain the database"
        ]);

        Jobdescription::create([
            'id_experience' => 3,
            'job' => "Make javascript for validation, sweetalert, modal, and some animation"
        ]);

        Jobdescription::create([
            'id_experience' => 3,
            'job' => "Maintaining middleware"
        ]);

        Jobdescription::create([
            'id_experience' => 3,
            'job' => "Making auto mail feature"
        ]);

        Jobdescription::create([
            'id_experience' => 3,
            'job' => "Hosting the website"
        ]);

        Jobdescription::create([
            'id_experience' => 4,
            'job' => "Make the front-end of some pages."
        ]);

        Jobdescription::create([
            'id_experience' => 4,
            'job' => "Make the responsive page."
        ]);

        Jobdescription::create([
            'id_experience' => 5,
            'job' => "Coordinate with the other team to ensure the website we made was suitable for what the other teams needed."
        ]);

        Jobdescription::create([
            'id_experience' => 5,
            'job' => "Manage a weekly meeting with my website developer to teach them about the framework and coding language that we use, Laravel, PHP, javascript, jquery, MySQL."
        ]);

        Jobdescription::create([
            'id_experience' => 5,
            'job' => "Dividing the task to finish our website and make sure everything is working correctly."
        ]);

        Jobdescription::create([
            'id_experience' => 5,
            'job' => "Hosting the website"
        ]);

        Jobdescription::create([
            'id_experience' => 5,
            'job' => "Giving some evaluations for our next project."
        ]);

        Jobdescription::create([
            'id_experience' => 6,
            'job' => "Coordinate with the other team to ensure the website we made was suitable for what the other teams needed"
        ]);

        Jobdescription::create([
            'id_experience' => 6,
            'job' => "Manage a weekly meeting with my website developer to teach them about the framework and coding language that we use, Laravel and PHP"
        ]);

        Jobdescription::create([
            'id_experience' => 6,
            'job' => "Dividing the task to finish our website and make sure everything is working correctly"
        ]);

        Jobdescription::create([
            'id_experience' => 6,
            'job' => "Hosting the website"
        ]);
    }
}
