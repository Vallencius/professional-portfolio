import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

        <div className="overflow-x-hidden w-full">
          <div className="w-full h-screen dark:bg-gray-900 bg-coffee-50 flex flex-col items-center justify-center">
            <div className="max-w-[75%] h-[75%] flex flex-col items-center justify-center">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.2, y: -100 }}
                  whileInView={{ opacity: 1, scale: 1, y:0 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  <img src={props.images+"/logo-hitam.svg"} className="max-w-full h-full m-auto"/>
                  <h3 className="text-center mt-4">Web Developer &#8226; Android Developer &#8226; Cross-Platform</h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-full h-screen pt-20 dark:bg-gray-900 bg-coffee-50 flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <AnimatePresence>
                <motion.div
                  className="w-2/3 p-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x:0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, deleniti fugit earum dolorem autem corporis a tempora, natus tempore explicabo assumenda hic nostrum, fugiat eligendi necessitatibus voluptatibus sapiente vitae itaque?</p>
                </motion.div>
                <motion.div
                  className="w-1/3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <img src={props.images+"/logo-hitam.svg"} className="p-12 m-auto"/>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="w-full h-screen pt-20 dark:bg-gray-900 bg-coffee-50 flex flex-col items-center justify-center">
            <div className="max-w-[75%] h-[75%]">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 2 }}
                >
                  <img src={props.images+"/logo-hitam.svg"} className="max-w-full h-full m-auto"/>
                  <h3 className="text-center mt-4">Web Developer &#8226; Android Developer &#8226; Cross-Platform</h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
          
          <Footer />
        </>
    );
}