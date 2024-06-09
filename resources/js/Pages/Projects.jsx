import React, { useState } from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ChevronRightIcon, ChevronLeftIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

import Project from '@/Components/Project';

export default function Projects(props) {
  const [showFilter, setShowFilter] = useState(false);

  function toggleFilter(){
    if (showFilter) {
      setShowFilter(false);
    } else {
      setShowFilter(true);
    }
  }
  
  function toggleFilterDetail(filter){
    props.technologies.forEach((tech, index) => {
      if (tech.name == filter) {
        var element = document.getElementById(tech.name);
        if (tech['isFiltered']) {
          tech['isFiltered'] = false;
          element.classList.remove("ring-4");
          element.classList.remove("ring-red-400");
        } else {
          tech['isFiltered'] = true;
          element.classList.add("ring-4");
          element.classList.add("ring-red-400");
        }
      }
    })
    document.getElementById("technologies").value = JSON.stringify(props.technologies);
  }
  
  function toggleFilterTypeDetail(filter){
    props.projectTypes.forEach((type, index) => {
      var element = document.getElementById(type.name);
      if (type.name == filter) {
        if (type['isFiltered']) {
          type['isFiltered'] = false;
          element.classList.remove("ring-4");
          element.classList.remove("ring-red-400");
        } else {
          type['isFiltered'] = true;
          element.classList.add("ring-4");
          element.classList.add("ring-red-400");
        }
      } else {
        type['isFiltered'] = false;
        element.classList.remove("ring-4");
        element.classList.remove("ring-red-400");
      }
    })
    document.getElementById("types").value = JSON.stringify(props.projectTypes);
  }

  return (
    <>
      <Head title="Projects"/>
      <Navbar
        image={props.images+"/logo-putih.png" }
        active="Projects"
      />
      <div className="min-h-screen w-full bg-coffee-50 pt-20 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">My Projects</h1>
          <div className="mx-12">
            <div className="flex flex-row items-center justify-between">
              <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 1 }} 
                className="my-8 w-fit hover:cursor-pointer bg-gradient-to-r from-blue-200 to-blue-sky-200 hover:bg-gradient-to-l hover:from-blue-200 hover:to-blue-sky-200 active:ring-4 active:outline-none active:ring-blue-200 rounded-full py-2 px-4"
                onClick={() => toggleFilter()}
              >
                <img src={props.images+"/filter.svg"} className="h-4 inline mr-2"/>Filter
              </motion.div>
              <div className="flex flex-row items-center">
                {
                  props.projects.prev_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.first_page_url}>
                    <ChevronDoubleLeftIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                {
                  props.projects.prev_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.prev_page_url}>
                    <ChevronLeftIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                <p className="ml-2">
                  <b>Page {props.projects.current_page} of {props.projects.last_page}</b>
                </p>
                {
                  props.projects.next_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.next_page_url}>
                    <ChevronRightIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                {
                  props.projects.next_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.lst_page_url}>
                    <ChevronDoubleRightIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
              </div>
            </div>
            {showFilter && <motion.div
              className="my-4 flex flex-col lg:inline"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="lg:inline lg:my-4">Types: </p>
              {props.projectTypes.map((type, i) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    className={
                        (type.id % 4 === 1 && "from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 " || 
                        type.id % 4 === 2 && "from-blue-200 via-blue-300 to-purple-200 hover:bg-gradient-to-bl " ||
                        type.id % 4 === 3 && "from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl " ||
                        type.id % 4 === 0 && "from-pink-300 to-purple-300 hover:bg-gradient-to-bl ")                      
                        + (type.isFiltered ? "ring-4 ring-red-400 " : ' ')
                        + "my-2 hover:cursor-pointer inline mr-2 w-fit bg-gradient-to-r rounded-full py-2 px-4"
                    }
                    onClick={() => toggleFilterTypeDetail(type.name)}
                    id = {type.name}
                  >
                    {type.name}
                  </motion.div>
                )
              })}
              <br/>
              <div className="flex lg:flex-row flex-col lg:mt-8">
                <p className="my-auto mr-2">Technologies: </p>
                <div className="lg:flex lg:flex-row columns-4 space-y-4 lg:space-y-0 my-4 mx-auto lg:mx-0">
                  {props.technologies.map((technology, i) => {
                    return (
                      <motion.div
                        whileHover={{ scale: 1.3 }} 
                        whileTap={{ scale: 1 }} 
                        className={
                          (technology.isFiltered ? 
                          "ring-4 ring-red-400 "
                          :
                          " ")

                          + "h-10 w-10 mr-2 rounded-full bg-coffee-200 hover:cursor-pointer "
                        }
                        onClick={() => toggleFilterDetail(technology.name)}
                        id = {technology.name}
                      >
                        <LazyLoadImage className="p-2 h-10 w-10" src={props.logo+"/"+technology.image}/>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
              <form className="flex flex-row" action="/projects" method="POST">
                <input type="hidden" name="_token" value={csrf_tokens} />
                <input type="hidden" name="technologies" value={JSON.stringify(props.technologies)} id="technologies"/>
                <input type="hidden" name="projectTypes" value={JSON.stringify(props.projectTypes)} id="types"/>
                <motion.button
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 1 }} 
                  className="mr-4 hover:cursor-pointer w-fit bg-gradient-to-r from-blue-sky-200 to-blue-200 hover:bg-gradient-to-l hover:from-blue-sky-200 hover:to-blue-200 rounded-full py-2 px-4 my-4"
                  type="submit"
                >
                  Apply
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 1 }} 
                  className="hover:cursor-pointer w-fit bg-gradient-to-r from-yellow-200 to-pink-300 hover:bg-gradient-to-l hover:from-yellow-200 hover:to-pink-300 rounded-full py-2 px-4 my-4"
                  href="/projects"
                >
                  Reset
                </motion.a>
              </form>
              <hr/>
            </motion.div>}
            <div className="w-full flex flex-col items-center justify-center divide-y-4 space-y-4">
              {props.projects.data.map((project, i) => {
                return (
                  <Project project_info={project} logo={props.logo} image={props.project_images+"/"+project.images[0].image}/>
                )
              })}
              {
                props.projects.data?.length == 0 && <h1>No Data Found</h1>
              }
            </div>
            <div className="flex flex-row justify-end mt-4">
              <div className="flex flex-row items-center">
                {
                  props.projects.prev_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.first_page_url}>
                    <ChevronDoubleLeftIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                {
                  props.projects.prev_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.prev_page_url}>
                    <ChevronLeftIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                <p>
                  <b>Page {props.projects.current_page} of {props.projects.last_page}</b>
                </p>
                {
                  props.projects.next_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.next_page_url}>
                    <ChevronRightIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
                {
                  props.projects.next_page_url && 
                  <motion.a
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 1 }} 
                    href={props.projects.lst_page_url}>
                    <ChevronDoubleRightIcon className="h-8 w-8 m-auto bg-coffee-300 text-coffee-700 ml-2 p-1 rounded-full" />
                  </motion.a>
                }
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