import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './AboutUs';
import Projects from './Projects';

export default function Contact(props) {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/about" element={<About /> } />
              <Route path="/projects" element={<Projects /> } />
            </Routes>
          </BrowserRouter>
          <Head title="Contact"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Contact"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI Contact
          </div>
          <Footer />
        </>
    );
}