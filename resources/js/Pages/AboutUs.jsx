import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          <div className="w-full dark:bg-gray-900 bg-coffee-50 pt-20">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.5, y: -100 }}
              whileInView={{ opacity: 1, scale: 1, y:0 }}
              transition={{ ease: "easeOut", duration: 2 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center text-4xl text-coffee-900 font-bold my-8"
            >
              About
            </motion.h1>
            <div className="w-full flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="w-5/6 bg-coffee-300 mt-4 rounded-3xl pt-2 border-4 border-coffee-700 text-coffee-800"
              >
                <h1 className="pl-4 lg:text-2xl min-[2000px]:text-6xl">My Information</h1>
                <hr className="bg-coffee-700 h-1 mt-1"></hr>
                <div className="lg:flex lg:flex-row-reverse my-4">
                  <LazyLoadImage className="lg:w-1/4 w-5/6 m-auto lg:my-auto mt-2 border-4 rounded-2xl border-coffee-50" src={props.images+"/vallen2.jpg"}/>
                  <div className="bg-coffee-50 text-coffee-800 lg:w-2/3 lg:flex lg:flex-col lg:justify-center lg:text-xl min-[2000px]:text-5xl min-[2000px]:space-y-8 w-5/6 m-auto my-4 rounded-2xl text-xs pl-4 py-2">
                    <table className="align-top">
                      <tr>
                        <td>Full Name</td><td>:</td><td>Vallencius Gavriel Alfredo Siswanto</td>
                      </tr>
                      <tr>
                        <td>Gender</td><td>:</td><td>Male</td>
                      </tr>
                      <tr>
                        <td>Birth Date</td><td>:</td><td>January 19th, 2003</td>
                      </tr>
                      <tr>
                        <td>Address</td><td>:</td><td>Perumahan Mawar Asri A-7, Butuh, Kutowinangun Lor, Tingkir, Salatiga</td>
                      </tr>
                      <tr>
                        <td>Email</td><td>:</td><td>vallenciussiswanto@gmail.com</td>
                      </tr>
                      <tr>
                        <td>Phone Number</td><td>:</td><td>088233632633</td>
                      </tr>
                      <tr>
                        <td>WhatsApp Number</td><td>:</td><td>088233632633</td>
                      </tr>
                      <tr>
                        <td>Line ID</td><td>:</td><td>valls1901</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </motion.div>
              <p>Education</p>
              <div>
                <div>
                  <p>2020 - Present</p>
                  <p>Multimedia Nusantara University</p>
                  <p>Faculty of Engineering and Informatics</p>
                  <p>Major in Informatics</p>
                </div>
                <div>
                  <p>July 2017 - June 2020</p>
                  <p>SMA Kristen 1 Salatiga</p>
                  <p>Major in Science</p>
                </div>
              </div>
              <div>
                <p>Achievements</p>
                <div>
                  <p>November - December 2019</p>
                    <p>Awardee Online Schoolarship Competition (OSC) by medcom.id</p>
                  <p>February 2018 and February 2019</p>
                    <p>Back-to-back 1st winner of Computer Science National Olympiad (OSN) City level in 2018 and 2019</p>
                </div>
              </div>
              <div>
                EXPERIENCE
              </div>
              <div class="modal-detail-skills modal-detail-title">
                <p class="modal-title">Skills</p>
                <div class="modal-subtitle">
                  <div class="skill-title">
                    <p class="title-in-skill">Software Skills</p>
                      <p class="subtitle-in-skill">Microsoft Word - Excelent</p>
                      <p class="subtitle-in-skill">Microsoft PowerPoint - Excelent</p>
                      <p class="subtitle-in-skill">Microsoft Excel - Intermediate</p>
                    <p class="title-in-skill">Language Skills</p>
                      <p class="subtitle-in-skill">English (Writing - fluent, Speaking - Intermediate)</p>
                      <p class="subtitle-in-skill">Bahasa Indonesia (Writing - fluent, Speaking - Fluent)</p>
                    <p class="title-in-skill">Coding Skills</p>
                      <p class="subtitle-in-skill">HTML, CSS, JS - Intermediate</p>
                      <p class="subtitle-in-skill">C, C++ - Intermediate</p>
                      <p class="subtitle-in-skill">Java - Intermediate</p>
                      <p class="subtitle-in-skill">PHP - Intermediate</p>
                      <p class="subtitle-in-skill">MySQL - Intermediate</p>
                    <p class="title-in-skill">Framework Skills</p>
                      <p class="subtitle-in-skill">Laravel - Intermediate</p>
                      <p class="subtitle-in-skill">Bootstrap - Intermediate</p>
                      <p class="subtitle-in-skill">JQuery - Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer
            image={props.images+"/logo-hitam.svg" }
          />
        </>
    );
}