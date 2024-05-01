import {React, createContext, useContext, useState} from "react";
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
import ProjectTypes from "./ProjectTypes";
import ProjectImages from "./ProjectImages";

const DataContext = createContext(null);

export default function Dashboard(props) {
  const [subDiv, setSubDiv] = useState("Home");
  const [idProject, setIdProject] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false); 

  function menuToggle() {
    if (isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }
  
  return (
    <>
      <div className="min-h-screen w-full transition-all duration-200">
        <div className={`h-full fixed transition-all duration-200 bg-coffee-400 ${isExpanded ? "w-64" : "w-24"}`}>
          <div className={`p-4 ${isExpanded ? "" : "flex flex-row items-center justify-center"}`}>
            <button onClick={menuToggle} className="text-2xl font-bold px-auto"> <i className={`fa fa-bars text-2xl mr-4 ${isExpanded ? "ml-2" : "ml-4"}`} aria-hidden="true"></i>{isExpanded && <span> Admin Page</span>}</button>
          </div>
          <nav className="p-4 cursor-pointer">
            <ul className="space-y-2">
              <li>
                <a onClick={() => setSubDiv("Home")} className={`block hover:text-coffee-600 hover:bg-coffee-300 px-4 ${isExpanded ? "py-2" : "py-4"} ${subDiv === 'Home' ? 'bg-coffee-600 text-coffee-200' : 'text-coffee-900'} rounded-lg`}><i className={`fa fa-home ${isExpanded ? "mr-4" : "flex flex-row items-center justify-center"}`} aria-hidden="true"></i>{isExpanded && <span>Home</span>}</a>
              </li>
              <li>
                <a onClick={() => setSubDiv("Projects")} className={`block hover:text-coffee-600 hover:bg-coffee-300 px-4 ${isExpanded ? "py-2" : "py-4"} ${subDiv === 'Projects' ? 'bg-coffee-600 text-coffee-200' : 'text-coffee-900'} rounded-lg`}><i className={`fa fa-briefcase ${isExpanded ? "mr-4" : "flex flex-row items-center justify-center"}`} aria-hidden="true"></i>{isExpanded && <span>Projects</span>}</a>
              </li>
              <li>
                <a onClick={() => setSubDiv("Technologies")} className={`block hover:text-coffee-600 hover:bg-coffee-300 px-4 ${isExpanded ? "py-2" : "py-4"} ${subDiv === 'Technologies' ? 'bg-coffee-600 text-coffee-200' : 'text-coffee-900'} rounded-lg`}><i className={`fa fa-microchip ${isExpanded ? "mr-4" : "flex flex-row items-center justify-center"}`} aria-hidden="true"></i>{isExpanded && <span>Technologies</span>}</a>
              </li>
              <li>
                <a onClick={() => setSubDiv("Project Types")} className={`block hover:text-coffee-600 hover:bg-coffee-300 px-4 ${isExpanded ? "py-2" : "py-4"} ${subDiv === 'Project Types' ? 'bg-coffee-600 text-coffee-200' : 'text-coffee-900'} rounded-lg`}><i className={`fa fa-cogs ${isExpanded ? "mr-4" : "flex flex-row items-center justify-center"}`} aria-hidden="true"></i>{isExpanded && <span>Project Types</span>}</a>
              </li>
              <li>
                <a href="/admin/logout" className={`block text-coffee-900 hover:text-coffee-600 hover:bg-coffee-300 px-4 ${isExpanded ? "py-2" : "py-4"} rounded-lg`}><i className={`fa fa-sign-out ${isExpanded ? "mr-4" : "flex flex-row items-center justify-center"}`} aria-hidden="true"></i>{isExpanded && <span>Logout</span>}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`${isExpanded ? "ml-64" : "ml-24"} overflow-auto transition-all duration-200`}>
          {subDiv == "Home" &&
            <Home/>
          }
          {subDiv == "Projects" &&
            <DataContext.Provider value={{ props, setIdProject, setSubDiv }}>
              <Projects/>
            </DataContext.Provider>
          }
          {subDiv == "Technologies" &&
            <DataContext.Provider value={{ props }}>
              <Technologies/>
            </DataContext.Provider>
          }
          {subDiv == "Project Types" &&
            <DataContext.Provider value={{ props }}>
              <ProjectTypes/>
            </DataContext.Provider>
          }
          {subDiv == "Project Images" &&
            <DataContext.Provider value={{ props, idProject }}>
              <ProjectImages/>
            </DataContext.Provider>
          }
        </div>
      </div>
    </>
  );
}

export function useData() {
  return useContext(DataContext);
}