import React from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

export default function ProjectDetail(props) {
  return (
    <>
      <Head title={props.project.title}/>
      <Navbar
        image={props.images+"/logo-putih.png" }
        active="Projects"
      />
      <div className="w-full bg-coffee-50 py-20">
        <motion.a 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className="hidden lg:block absolute top-24 left-8 bg-coffee-600 rounded-full text-white px-4 py-2" href="/projects"
        >
          <i className="fa fa-arrow-left mr-2" aria-hidden="true"></i>
          BACK
        </motion.a>
        <div className="mx-12">
          <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">{props.project.title}</h1>
          <LazyLoadImage className="mx-auto w-1/2 h-auto lg:h-80 lg:w-auto" src={props.project_images+"/"+props.project.images[0].image}/>
          <p className="my-4 text-center lg:text-left">Visit on: <a className="underline" target="_blank" href={props.project.link}>{props.project.link}</a></p>
          <p className="my-4 text-center lg:text-left">
            <p className="hidden lg:inline">Project Type: </p>
            <a 
              className={
                props.project.type.name == "Website" && "ml-2 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 rounded-full py-2 px-4" || 
                props.project.type.name == "Cross Platform Application" && "ml-2 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 rounded-full py-2 px-4" ||
                props.project.type.name == "Android Application" && "ml-2 bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-full py-2 px-4"
              }
              href={props.project.type.name}
            >
              {props.project.type.name}
            </a>
          </p>
          <div className="flex lg:flex-row flex-col">
            <p className="my-auto mr-0 lg:mr-2 hidden lg:inline">Tech Stacks:</p>
            <div className="flex flex-row my-2 lg:my-4 lg:items-start lg:justify-start items-center justify-center">
              {props.project.technologies.map((technology, i) => {
                return(
                  <motion.a 
                    whileHover={{ scale: 1.3 }} 
                    whileTap={{ scale: 1 }} 
                    className="h-10 w-10 mr-2 rounded-full bg-coffee-200" href={"/technology/"+technology.name}
                  >
                    <LazyLoadImage className="p-2" src={props.logo+"/"+technology.image}/>
                  </motion.a>
                )
              })}
            </div>
          </div>
          <p className="my-4 text-center lg:text-left ">{props.project.description}</p>
          <p className="text-center text-4xl text-coffee-900 font-bold my-8">Project Images</p>
          <ol className="list-decimal">
            {props.project.images.map((project_image, i) => {
              if (i != 0) {
                return(
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`mb-8 lg:w-1/2 mx-auto`}
                    >
                      <li>{project_image.name}</li>
                      <LazyLoadImage  src={props.project_images+"/"+project_image.image} className={`${props.project.type !== 1 ? "h-64 lg:h-auto lg:w-1/2 mx-auto" : "w-full"}`} />
                    </motion.div>
                  </motion.div>
                )
              }
            })}
          </ol>
        </div>
      </div>
      <Footer
        image={props.images+"/logo-hitam.svg" }
      />
    </>
  );
}