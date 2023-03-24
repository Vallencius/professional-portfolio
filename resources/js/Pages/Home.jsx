import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './AboutUs';
import Projects from './Projects';
import Contact from './Contact';

export default function Home(props) {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/about" element={<About /> } />
              <Route path="/projects" element={<Projects /> } />
              <Route path="/contact" element={<Contact /> } />
            </Routes>
          </BrowserRouter>
          <Head title="Home"/>
          <Navbar
            image={props.images+"/logo-putih.png" }
            active="Home"
          />
          <div className="w-full h-screen pt-20 dark:bg-gray-900 bg-coffee-50 flex flex-col items-center justify-center">
            <div className="max-w-[75%] h-[75%]">
              <img src={props.images+"/logo-hitam.svg"} className="max-w-full h-full m-auto"/>
              <h3 className="text-center mt-4">Web Developer &#8226; Android Developer &#8226; Cross-Platform</h3>
            </div>
          </div>
          <Footer />
        </>
    );
}