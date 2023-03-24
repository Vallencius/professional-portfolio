import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './AboutUs';
import Contact from './Contact';

export default function Projects(props) {
    return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact /> } />
          </Routes>
        </BrowserRouter>
          <Head title="Projects"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Projects"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI Projects
          </div>
          <Footer />
        </>
    );
}