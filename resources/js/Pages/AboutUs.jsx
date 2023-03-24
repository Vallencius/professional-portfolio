import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';

export default function AboutUs(props) {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/projects" element={<Projects /> } />
              <Route path="/contact" element={<Contact /> } />
            </Routes>
          </BrowserRouter>
          <Head title="About"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="About"
          />
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50">
            INI ABOUT US
          </div>
          <Footer />
        </>
    );
}