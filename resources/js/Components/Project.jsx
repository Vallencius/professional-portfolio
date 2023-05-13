import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Project(props) {
  return (
    <motion.a 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 1 }} 
      href={"/project/"+props.project_info.slug} className="flex lg:odd:flex-row lg:even:flex-row-reverse flex-col w-full px-12 mt-4 items-center">
      <LazyLoadImage className="mx-4 z-0 h-36 rounded mt-4" src={props.image} alt={props.project_info.title} />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold mt-6 text-center md:text-left">{props.project_info.title}</h1>
        <motion.p 
          className="my-4 text-center lg:text-left"
          whileHover={{ x: 20 }}
        >
          <p 
            className={
              props.project_info.type.name == "Website" && "w-fit bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 rounded-full py-2 px-4" || 
              props.project_info.type.name == "Cross Platform Application" && "w-fit bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 rounded-full py-2 px-4" ||
              props.project_info.type.name == "Android Application" && "w-fit bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-100 rounded-full py-2 px-4"
            }
          >
            {props.project_info.type.name}
          </p>
        </motion.p>
        <p className="text-center md:text-left">{props.project_info.description.split(/\s+/).slice(0, 34).join(" ")+"..."}</p>
        <div className="flex flex-row my-4">
          {props.project_info.technologies.map((technology, i) => {
            return(
              <motion.a 
                whileHover={{ scale: 1.3 }} 
                whileTap={{ scale: 1 }} 
                className="h-10 w-10 mr-2 rounded-full bg-coffee-200"
              >
                <LazyLoadImage className="p-2" src={props.logo+"/"+technology.image}/>
              </motion.a>
            )
          })}
        </div>
      </div>
    </motion.a>
  );
}
