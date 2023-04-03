import { motion } from "framer-motion";
import React from "react";

export default function Card(props) {
  return (
    <div className={"group relative h-full w-full max-w-sm shadow-lg bg-gradient-to-b from-transparent to-"+props.color+"-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"}>
      <a href={"/projects/"+props.project_info.title}>
        <img class="p-4 z-0 group-hover:opacity-20" src={props.image } alt="" />
        
        <motion.div 
          className={
            props.color === 'red' && 'via-red-50 to-red-100',
            props.color === 'purple' && 'via-purple-50 to-purple-100',
            props.color === 'blue-sky' && 'via-blue-sky-50 to-blue-sky-100',
            props.color === 'yellow' && 'via-yellow-50 to-yellow-100',
            props.color === 'blue' && 'via-blue-50 to-blue-100',
            props.color === 'green' && 'via-green-50 to-green-100',
            "absolute bottom-0 z-10 bg-gradient-to-b hidden group-hover:block w-full h-full to-"+props.color+"-100 via-"+props.color+"-50"
          }
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            transition: { duration: 0.7 },
          }}
        >
          <motion.div 
            className="h-1/2 absolute bottom-0 px-4"
            initial={{ y:-100 }}
            animate={{
              y: 0,
            }}
            transition= {{ duration: 1, delay: 1 }}
          >
            <h1>{props.project_info.title}</h1>
            <p className="text-xs">{props.project_info.description.split(/\s+/).slice(0, 10).join(" ")+"..."}</p>
          </motion.div>
        </motion.div>
      </a>
    </div>
  );
}
