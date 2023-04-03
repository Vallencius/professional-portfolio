import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import About from './AboutUs';
import Projects from './Projects';
import Contact from './Contact';
import Card from '@/Components/Card';
import ContactEmail from '@/Components/ContactEmail';

export default function Home(props) {
  const color = [
    'purple',
    'blue',
    'yellow',
    'blue-sky',
    'red',
    'green'
  ];
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

      <div className="overflow-x-hidden w-full dark:bg-gray-900 bg-gradient-to-b from-coffee-50 to-yellow-50">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="max-w-[75%] h-[75%] flex flex-col items-center justify-center">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                whileInView={{ opacity: 1, scale: 1, y:0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <img src={props.images+"/logo-hitam.svg"} className="max-w-full h-full m-auto"/>
                <h3 className="text-center mt-4">Web Developer &#8226; Android Developer &#8226; Cross-Platform</h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full h-screen flex flex-col items-center justify-center mb-12">
          <div className="flex flex-col items-center justify-center">
            <AnimatePresence>
              <div className="flex md:flex-row flex-col-reverse items-center justify-center">
                <motion.div
                  className="md:w-2/3 md:p-12 px-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x:0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  viewport={{ once: false, amount: 0.8 }}
                >
                  <p className="text-center md:text-left">Student of Universitas Multimedia Nusantara, batch of 2020, majoring in informatics, a hard working and quite perfectionist student, able to solving computational logic and have a great problem solving ability. Have an initiative to improving skills and knowledge. Able to work in groups or as individuals who can be relied in all situations to improve your company’s quality.</p>
                </motion.div>
                <motion.div
                  className="md:w-1/3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <img src={props.images+"/vallen.jpg"} className="p-12 m-auto"/>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, zoom: 0 }}
                whileInView={{ opacity: 1, zoom: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <Link href="/about">
                  <div className="block py-2 pl-3 pr-4 text-coffee-100 bg-coffee-900 rounded p-8 hover:bg-coffee-100 hover:text-coffee-800 hover:border hover:border-coffee-800 dark:border-gray-700" id={props.text}>
                    Know more about Me!
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mb-12">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, zoom: 0 }}
                whileInView={{ opacity: 1, zoom: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">Recent Projects</h1>
              </motion.div>
                <div className="gap-8 columns-3 duration-500 transition-all space-y-4">
                  {props.recent_projects.map((project, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        <Card project_info={project} image={props.images+"/logo-hitam.svg" } color={color[i]} color_to={color[i]}/>
                      </motion.div>)
                  })}
                </div>
              <motion.div
                initial={{ opacity: 0, zoom: 0 }}
                whileInView={{ opacity: 1, zoom: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <Link href="/projects">
                  <div className="block my-12 py-2 pl-3 pr-4 text-coffee-100 bg-coffee-900 rounded p-8 hover:bg-coffee-100 hover:text-coffee-800 hover:border hover:border-coffee-800 dark:border-gray-700" id={props.text}>
                    See More...
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
        </div>
        <ContactEmail />
        <Footer
          image={props.images+"/logo-hitam.svg" }
        />
      </div>
      
    </>
  );
}