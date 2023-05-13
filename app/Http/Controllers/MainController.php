<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Models\Projects;
use App\Mail\ContactMail;
use App\Mail\SenderMail;

class MainController extends Controller
{
    public function home()
    {
        $recentProjects = Projects::orderBy('id', 'DESC')->limit(6)->get();
        foreach($recentProjects as $project){
            $project['images'] = $project->images;
        }

        return Inertia::render('Home', [
            'images' => asset('images'),
            'project_images' => asset('images/projects'),
            'recent_projects' => $recentProjects,
        ]);
    }
    
    public function about()
    {
        return Inertia::render('AboutUs', [
            'images' => asset('images')
        ]);
    }

    public function commision()
    {
        return Inertia::render('Commision', [
            'images' => asset('images')
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'images' => asset('images')
        ]);
    }

    public function email(Request $request)
    {
        $ValidReq = $request->validate([
            'name' => 'required|regex:/[a-zA-Z]+$/x',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        $this->sendEmail($ValidReq);
        $this->sendEmailToSender($ValidReq);

        return redirect("/");
    }

    public function sendEmail($data)
    {
        $details = [
            'name' => $data['name'],
            'message' => $data['message'],
            'email' => $data['email']
        ];
        Mail::to('vallenciussiswanto@gmail.com')->send(new ContactMail($details));
    }

    public function sendEmailToSender($data)
    {
        $details = [
            'name' => $data['name'],
            'message' => $data['message'],
            'email' => $data['email']
        ];
        Mail::to($data['email'])->send(new SenderMail($details));
    }
}
