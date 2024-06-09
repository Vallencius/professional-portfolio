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
            'type_id' => 1,
            'slug' => "denyskitchen",
            'link' => "https://denyskitchen.my.id"
        ]);

        Projects::create([
            'title' => 'DKBM Aspiration Website',
            'description' => "Dewan Keluarga Besar universitas Multimedia Nusantara (DKBM UMN) is the highest student organization in UMN which acts as a legislative and judicial body for UMN students. DKBM UMN receiving many kinds of opinion or critics from UMN's students. So me and my team made a website to accomodate the critics and opinions. We also made admin page to make other teams easier to recap the data. The admin page contains all the aspiration datas, as well as many feature such as reply message, send by email, and many more.
            DKBM website contains many kinds of pages and features. There are content about DKBM UMN and their latest generation team, generation XII, and aspiration form to give DKBM UMN our critics and opinions. The students also can check the answer to their critics by login to DKBM UMN's website. The website is in Bahasa Indonesia and English, so students from abroad also can submit their aspiration.",
            'type_id' => 1,
            'slug' => "dkbm",
            'link' => "https://dkbm.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Drought UMN ECO',
            'description' => "UMN ECO or UMN Earth Caring Operation is an organization based on Multimedia Nusantara University (UMN) that's focused on maintaining suitable environtment for future generations. UMN ECO 2022 has 2 events that being divided into 2 seasons in Indonesia, Dry season and Rainy season. In the Dry season event, UMN ECO 2022 made an event named DROUGHT (Determine The Way Out) where the ecoplayers (event participant) is asked to save the earth from drought. Ecoplayers solve a challenge in a bingo style, where each challenge helped the earth from drought. For those reasons, we need a website to organize the bingo event.
            <br><br>In DROUGHT event, me and my team made a website that contains about UMN ECO, DROUGHT, and the teams behind UMN ECO. Besides, we also made a page for playing the bingo challenges, and submiting submission for the bingo challenges. We also made admin page to make other teams easier to recap the data. The admin page contains all the data for registration, as well as many feature such as download as excel, close registration, and many more.",
            'type_id' => 1,
            'slug' => "drought",
            'link' => "https://eco.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Downpour UMN ECO',
            'description' => 'The second event of UMN ECO 2022 is DOWNPOUR. Downpour consist of 2 main events. Those are Seminar with the theme of "TURN OUR GENERATION INTO GREENERATION", and Activity Booth to implement what we already learn in the seminar with the theme of "DOWNPOUR: THE GREEN TOWN OF OURS"
            The Seminar is held in November 1st, 2022. Then the Activity Booth is held in November 8th until November 10th of 2022.
            All of the Activity Booth games is recorded in our website where the participants called "ECO CITIZENS" can check their progress in the ticket stamp page to get the stamp. We use admin page to manage the stamp system.',
            'type_id' => 1,
            'slug' => "downpour",
            'link' => "https://eco.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Mentoring 2022',
            'description' => "Mentoring UMN is a mandatory event from Multimedia Nusantara University to teach Kompas Gramedia's 5C value to their student. The values are Caring, Credible, Customer Delight, Competent, and Competitive. The main usage of the website is for information site. So actually the website is quite static.",
            'type_id' => 1,
            'slug' => "mentoring",
            'link' => "https://mentoring.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Web Game Portfolio',
            'description' => 'Web Game Portfolio is a project to showcasing my past and current projects. I make it as a interactive web, by using Javascript to make the website as a game. You can control the character to move around my world, and speaks to NPCs to get information about myself. If you go to my house, you can see my past web projects.',
            'type_id' => 1,
            'slug' => "gameportfolio",
            'link' => "https://game.vallencius.my.id"
        ]);

        Projects::create([
            'title' => 'Tiket (Titip Paket)',
            'description' => 'Tiket is my university project, where me and my team use Ionic-React to make a web app that can work on android and iOS too. The project main idea is to digitalize package storaging when people go online shopping, especially when people who live in apartments or dormitories. In Indonesia, the package will usually being held by the security, then when the customer want to pick it up, the security needs to find the package first. When we live in apartments or dormitory, there are many packages, so the security will take several minutes to  find the correct package. The package number is written in a book, so it is become more difficult to find the correct number. With Tiket, the security can simply input the data of the package, as well as some pictures of it. So when a customer want to take the package, the security can search it automatically, and we can notify the customer that the package is already arived on the security.',
            'type_id' => 3,
            'slug' => "tiket",
            'link' => "https://play.google.com/store/apps/details?id=io.ionic.tiket.kelompok1&hl=en"
        ]);

        Projects::create([
            'title' => 'RentBow',
            'description' => 'RentBow is my university project, where we use Java to make an android application. This app is used to rent public facility such as sports gym, music studio, or co-working space. In Indonesia, to rent a place, we use traditional method. We should go to the place and speak to the administrator to schedule a rent. By using RentBow, customer can easily rent public facilities from anywhere, and the owner can easily manage the administration automatically.',
            'type_id' => 2,
            'slug' => "rentbow",
            'link' => "https://play.google.com/store/apps/details?id=id.ac.umn.uasmap&hl=en"
        ]);

        Projects::create([
            'title' => 'RentBow Partner',
            'description' => "RentBow Partner is a mobile application for RentBow admin's to customize their public facilities open hours, accept payment for renting, and much more. This app is used to rent public facility such as sports gym, music studio, or co-working space. In Indonesia, to rent a place, we use traditional method. We should go to the place and speak to the administrator to schedule a rent. By using RentBow, customer can easily rent public facilities from anywhere, and the owner can easily manage the administration automatically.",
            'type_id' => 2,
            'slug' => "rentbowpartner",
            'link' => "https://play.google.com/store/apps/details?id=id.ac.umn.uasmap22_admind&hl=en"
        ]);

        Projects::create([
            'title' => 'TVONAIR 8.0',
            'description' => "TVONAIR is UMN TV's birthday event. We make a website to share information about the event. Through the website, we also can register for the event. It also make the administration team store and manage registrant data easily.",
            'type_id' => 1,
            'slug' => "tvonair",
            'link' => "https://tvonair.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'Cassiere Seiruvie',
            'description' => 'Cassiere Seiruvie Website is my private project to showcase who is Cassiere Seiruvie. Cassiere Seiruvie or usually called Cassie, is a virtual youtuber (vtuber) from an Indonesian agency, AOI ID. This website is used to introduce Cassie to national and global audience.',
            'type_id' => 1,
            'slug' => "cassiere",
            'link' => "https://cassiere-seiruvie.my.id"
        ]);

        Projects::create([
            'title' => 'HMIF UMN Gen XIII',
            'description' => 'HMIF is an oragnization in Multimedia Nusantara University, that accomodate UMN Informatics students. This website is used as an official publication site, that contains many information about UMN Informatics major and their work programs.',
            'type_id' => 1,
            'slug' => "hmif",
            'link' => "https://hmif.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'IAK Upload Excel Postpaid',
            'description' => 'IAK is my internship company. In this company, i make Upload Excel feature, where our client can make a massive transaction by simply upload an excel file contains detail of the transaction.',
            'type_id' => 1,
            'slug' => "iak",
            'link' => "https://iak.id"
        ]);

        Projects::create([
            'title' => 'Commpress 2023',
            'description' => 'Commpress 2023 is UMN Journalistic major event. This website is used as a recruitment site, and contain official information about the event.',
            'type_id' => 1,
            'slug' => "commpress",
            'link' => "https://commpress.umn.ac.id"
        ]);

        Projects::create([
            'title' => 'U-TAPIS Kata Terikat',
            'description' => "U-Tapis is a research project led by UMN's lecturer, Dr. Niknik M. Kuntarto, M.Hum. It is a developing program for spelling filter automation, especially in Bahasa Indonesia for journalistic purpose. Some rules in Bahasa Indonesia contain some unique rules, one of them is the rule of kata terikat. So, in this project, i manage to developed both machine learning and rule-based program using Python. This project is also presented in 1ST INTERNATIONAL CONFERENCE TRACK ON ARTIFICIAL INTELLIGENCE HORIZONS & SOCIETY (ICAIH2024)",
            'type_id' => 4,
            'slug' => 'utapis',
            'link' => 'https://utapis.vallencius.com/'
        ]);

        Projects::create([
            'title' => 'Interactive Multimedia Storytelling',
            'description' => `This project is a collaboration project with UMN's Journalistic, Jennifer Carorine Gouw. The website contains Interactive Multimedia Storytelling with the theme of "Evaluating The Waste Transportation System Department Of Environmental Affairs City Of Tangerang". This website is being used as Jennifer's final assessment on Universitas Multimedia Nusantara. Waste transportation system in Tangerang region is a recuring problem. In this website, we can see how people see this issue from many angles.`,
            'type_id' => 1,
            'slug' => 'jennifer',
            'link' => 'https://pengangkutsampah.vercel.app/'
        ]);
    }
}
