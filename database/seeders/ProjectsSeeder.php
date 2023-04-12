<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projects;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Projects::create([
            'title' => "Deny's Kitchen",
            'description' => "Deny's Kitchen is a restaurant that located in my hometown Salatiga. This is my first solo project to make menu list and online food ordering for a restaurant. Deny's Kitchen restaurant provide delivery service from their own restaurant, beside using online food service such as Gofood and Grab-Food. 
            The problem of their current delivery service is the lack of detail communication between customer and the restaurant. For example, the food is ready but the customer didn't say their detailed address, or the customer didn't say they pay with the exact amount of money or need a change. So i made menu list that can be added to cart. Every menu can be described as detailed as possible to minimize miscommunication, for example the customer want their food spicy or not, their beverages hot or cold, and many more. After they order all of their food, they can checkout and fill their address and amount of money to pay, so that the delivery courier can prepare the change in advance. After they submitted their data, they're redirected to whattsapp web and they only need to press send. All of their order and details is already written in a tidy way so both customer and restaurant can read it without miscommunication. I also made admin page to organize their food and beverages, as well as feature to make the food can't be ordered if they run out of some menus. ",
            'slug' => "denyskitchen",
            'link' => "https://denyskitchen.my.id"
        ]);

        Projects::create([
            'title' => 'DKBM Aspiration Website',
            'description' => "Dewan Keluarga Besar universitas Multimedia Nusantara (DKBM UMN) is the highest student organization in UMN which acts as a legislative and judicial body for UMN students. DKBM UMN receiving many kinds of opinion or critics from UMN's students. So me and my team made a website to accomodate the critics and opinions. We also made admin page to make other teams easier to recap the data. The admin page contains all the aspiration datas, as well as many feature such as reply message, send by email, and many more.
            DKBM website contains many kinds of pages and features. There are content about DKBM UMN and their latest generation team, generation XII, and aspiration form to give DKBM UMN our critics and opinions. The students also can check the answer to their critics by login to DKBM UMN's website. The website is in Bahasa Indonesia and English, so students from abroad also can submit their aspiration.",
            'slug' => "dkbm",
            'link' => "https://dkbm.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Drought UMN ECO',
            'description' => "UMN ECO or UMN Earth Caring Operation is an organization based on Multimedia Nusantara University (UMN) that's focused on maintaining suitable environtment for future generations. UMN ECO 2022 has 2 events that being divided into 2 seasons in Indonesia, Dry season and Rainy season. In the Dry season event, UMN ECO 2022 made an event named DROUGHT (Determine The Way Out) where the ecoplayers (event participant) is asked to save the earth from drought. Ecoplayers solve a challenge in a bingo style, where each challenge helped the earth from drought. For those reasons, we need a website to organize the bingo event.
            <br><br>In DROUGHT event, me and my team made a website that contains about UMN ECO, DROUGHT, and the teams behind UMN ECO. Besides, we also made a page for playing the bingo challenges, and submiting submission for the bingo challenges. We also made admin page to make other teams easier to recap the data. The admin page contains all the data for registration, as well as many feature such as download as excel, close registration, and many more.",
            'slug' => "drought",
            'link' => "https://eco.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Downpour UMN ECO',
            'description' => 'The second event of UMN ECO 2022 is DOWNPOUR. Downpour consist of 2 main events. Those are Seminar with the theme of "TURN OUR GENERATION INTO GREENERATION", and Activity Booth to implement what we already learn in the seminar with the theme of "DOWNPOUR: THE GREEN TOWN OF OURS"
            The Seminar is held in November 1st, 2022. Then the Activity Booth is held in November 8th until November 10th of 2022.
            All of the Activity Booth games is recorded in our website where the participants called "ECO CITIZENS" can check their progress in the ticket stamp page to get the stamp. We use admin page to manage the stamp system.',
            'slug' => "downpour",
            'link' => "https://eco.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Mentoring 2022',
            'description' => "Mentoring UMN is a mandatory event from Multimedia Nusantara University to teach Kompas Gramedia's 5C value to their student. The values are Caring, Credible, Customer Delight, Competent, and Competitive. The main usage of the website is for information site. So actually the website is quite static.",
            'slug' => "mentoring",
            'link' => "https://mentoring.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Web Game Portfolio',
            'description' => 'Web Game Portfolio is a project',
            'slug' => "gameportfolio",
            'link' => "https://vallencius.my.id"
        ]);

        Projects::create([
            'title' => 'Tiket (Titip Paket)',
            'description' => 'Tiket is a project',
            'slug' => "tiket",
            'link' => "https://vallencius.my.id"
        ]);

        Projects::create([
            'title' => 'RentBow',
            'description' => 'RentBow is a project',
            'slug' => "rentbow",
            'link' => "https://vallencius.my.id"
        ]);

        Projects::create([
            'title' => 'TVONAIR 8.0',
            'description' => 'TVONAIR is a project',
            'slug' => "tvonair",
            'link' => "https://tvonair.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Cassiere Seiruvie',
            'description' => 'Web Cassiere Seiruvie is a project',
            'slug' => "cassiere",
            'link' => "https://cassiere-seiruvie.my.id"
        ]);

        Projects::create([
            'title' => 'HMIF UMN Gen XIII',
            'description' => 'HMIF is a project',
            'slug' => "hmif",
            'link' => "https://hmif.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'IAK Upload Excel Postpaid',
            'description' => 'IAK is a project',
            'slug' => "iak",
            'link' => "https://iak.id"
        ]);

        Projects::create([
            'title' => 'Commpress 2023',
            'description' => 'HMIF is a project',
            'slug' => "hmif",
            'link' => "https://hmif.umn.ac.id"
        ]);
    }
}
