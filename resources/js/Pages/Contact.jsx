import React from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Contact(props) {
    return (
        <>
          <Head title="Contact"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Contact"
          />
          <div className="w-full h-screen bg-coffee-50 pt-20">
            <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">Contact Me</h1>
          </div>
          <Footer 
            image={props.images+"/logo-hitam.svg" }
          />
        </>
    );
}