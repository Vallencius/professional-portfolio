<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommisionController extends Controller
{
    public function order(Request $request)
    {
        $message = "Hi, i want to order a web development commision. ";

        if ($request->package) {
            $message .= "I'll order the " . $request->package . " package. ";
        }
        if ($request->StaticPage !== "0" || $request->DynamicPage !== "0" || $request->LoginSystem !== "0" || $request->FormSystem !== "0" || $request->CMS !== "0" || $request->WebDesign !== "0" || $request->AOS !== "0") {
            $message .= "With ";
        }
        if ($request->StaticPage !== "0") {
            $message .= $request->StaticPage . " static page(s), ";
        }
        if ($request->DynamicPage !== "0") {
            $message .= $request->DynamicPage . " dyanmic page(s), ";
        }
        if ($request->LoginSystem !== "0") {
            $message .= $request->LoginSystem . " login system(s), ";
        }
        if ($request->FormSystem !== "0") {
            $message .= $request->FormSystem . " form system(s), ";
        }
        if ($request->CMS !== "0") {
            $message .= $request->CMS . " content management system(s), ";
        }
        if ($request->WebDesign !== "0") {
            $message .= $request->WebDesign . " custom web design(s), ";
        }
        if ($request->AOS !== "0") {
            $message .= $request->AOS . " animate on scroll page(s), ";
        }
        if ($request->message !== "") {
            $message .= $request->message;
        }

        return redirect()->away('https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608&text=' . $message . ". Thankyou!");
    }
}
