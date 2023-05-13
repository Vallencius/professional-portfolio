import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

import About from './AboutUs';
import Projects from './Projects';
import Contact from './Contact';
import Commision from './Commision';
import Card from '@/Components/Card';
import ContactEmail from '@/Components/ContactEmail';
import { useEffect, useState } from 'react';

export default function Home(props) {
  const [svgFill, setSvgFill] = useState('none');
  const [svgStroke, setSvgStroke] = useState('#000');

  useEffect(() => {
    setTimeout(() => {
      setSvgFill("#000");
      setSvgStroke("none");
    }, 5000);
  }, []);

  const color = [
    'purple',
    'blue',
    'yellow',
    'blue-sky',
    'red',
    'green'
  ];

  const pathVariants = {
    hidden: {
      pathLength: 0
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const pathVariantsLong = {
    hidden: {
      pathLength: 0
    },
    visible: {
      pathLength: 1,
      transition: {
        ease: "easeInOut",
        duration: 6,
      }
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About /> } />
          <Route path="/projects" element={<Projects /> } />
          <Route path="/contact" element={<Contact /> } />
              <Route path="/commision" element={<Commision /> } />
        </Routes>
      </BrowserRouter>
      <Head title="Home"/>
      <Navbar
        image={props.images+"/logo-putih.png" }
        active="Home"
      />

      <div className="overflow-x-hidden w-full bg-gradient-to-b from-coffee-50 to-yellow-50">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="max-w-[75%] h-[75%] flex flex-col items-center justify-center">
            <AnimatePresence>
              <motion.div
                // initial={{ opacity: 0, scale: 0.5, y: -100 }}
                // whileInView={{ opacity: 1, scale: 1, y:0 }}
                // transition={{ ease: "easeOut", duration: 2 }}
                // viewport={{ once: true, amount: 0.1 }}
              >
                {/* <LazyLoadImage src={props.images+"/logo-hitam.svg"} className="max-w-full h-full m-auto"/> */}
                <div className="max-w-full h-full m-auto flex justify-center">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                  width="50vw" viewBox="0 0 1364.000000 539.000000"
                  preserveAspectRatio="xMidYMid meet">
                    <motion.g transform="translate(0.000000,539.000000) scale(0.100000,-0.100000)"
                    fill={svgFill} stroke={svgStroke} strokeWidth={100} strokeLinecap="rounded"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible">
                      <motion.path d="M6238 3488 l-3 -1731 -706 1724 -706 1724 -369 2 -369 3 -181 -473
                      c-820 -2144 -1509 -3926 -1515 -3920 -3 5 -41 116 -84 248 -58 182 -829 2351
                      -1434 4035 l-37 105 -368 3 -367 2 7 -22 c4 -13 342 -887 751 -1943 409 -1056
                      853 -2200 985 -2543 l242 -622 377 0 377 0 16 43 c9 23 135 370 280 772 l265
                      730 1074 3 1075 2 44 -112 c24 -62 158 -411 298 -775 l255 -663 1982 0 1983 0
                      2 2009 3 2009 276 -411 c151 -227 756 -1131 1344 -2009 l1068 -1598 349 0 348
                      0 0 2565 0 2565 -325 0 -325 0 0 -2012 0 -2011 -328 489 c-180 269 -787 1174
                      -1347 2012 l-1019 1522 -348 0 -348 0 0 -2235 0 -2235 -1285 0 -1285 0 0 2240
                      0 2240 -325 0 -325 0 -2 -1732z m-1678 797 c74 -225 187 -531 499 -1359 149
                      -395 271 -722 271 -727 0 -5 -370 -9 -861 -9 -564 0 -860 3 -857 10 35 106
                      885 2256 889 2252 4 -4 30 -79 59 -167z"
                      variants={pathVariantsLong}
                      initial="hidden"
                      animate="visible"/>
                      <motion.path d="M7850 3410 l0 -1810 710 0 710 0 0 275 0 275 -430 0 -430 0 0 515 0
                      515 440 0 440 0 0 275 0 275 -430 0 -430 0 0 495 0 495 430 0 430 0 0 250 0
                      250 -720 0 -720 0 0 -1810z"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"/>
                      <motion.path d="M7070 3045 l0 -2165 1115 0 1115 0 0 285 0 285 -815 0 -815 0 0 1880
                      0 1880 -300 0 -300 0 0 -2165z"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"/>
                    </motion.g>
                  </svg>
                </div>
                <h3 className="text-center mt-4">Web Developer &#8226; Android Developer &#8226; Cross-Platform</h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="w-full min-h-screen flex flex-col items-center justify-center mb-12">
          <div className="flex flex-col items-center justify-center">
            <AnimatePresence>
              <div className="flex md:flex-row flex-col-reverse items-center justify-center">
                <motion.div
                  className="md:w-2/3 md:p-12 px-12"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, scale: 1, x:0 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
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
                  <LazyLoadImage src={props.images+"/vallen.jpg"} className="p-12 m-auto"/>
                </motion.div>
              </div>
              {/* <motion.div
                initial={{ opacity: 0, zoom: 0 }}
                whileInView={{ opacity: 1, zoom: 1 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <Link href="/about" disabled>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="block py-2 pl-3 pr-4 mt-8 lg:mt-0 text-coffee-100 bg-coffee-900 rounded p-8 hover:bg-coffee-100 hover:text-coffee-800 hover:border hover:border-coffee-800"
                    id={props.text}
                  >
                    Know more about Me!
                  </motion.div>
                </Link>
              </motion.div> */}
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
              <div className="gap-8 columns-1 mx-4 lg:columns-3 duration-500 transition-all space-y-4">
                {props.recent_projects.map((project, i) => {
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <Card project_info={project} image={props.project_images+"/"+project.images[0].image} color={color[i]} color_to={color[i]}/>
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
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="block my-12 py-2 pl-3 pr-4 text-coffee-100 bg-coffee-900 rounded p-8 hover:bg-coffee-100 hover:text-coffee-800 hover:border hover:border-coffee-800"
                  id={props.text}
                >
                  See More...
                </motion.div>
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