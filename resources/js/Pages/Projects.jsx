import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './AboutUs';
import Contact from './Contact';
import Project from '@/Components/Project';

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
      <div className="w-full dark:bg-gray-900 bg-coffee-50 pt-20">
        <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">My Projects</h1>
        <div className="mx-12">
          <div className="w-full flex flex-col items-center justify-center divide-y-4 space-y-4">
            {props.projects.map((project, i) => {
              return (
                <Project project_info={project} logo={props.logo} image={props.project_images+"/"+project.images[0].image}/>
              )
            })}
          </div>
        </div>
      </div>
      <Footer
        image={props.images+"/logo-hitam.svg" }
      />
    </>
  );
}