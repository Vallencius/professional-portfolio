import { motion } from "framer-motion";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Project(props) {
  return (
    <a href={"/projects/"+props.project_info.slug} className="flex odd:flex-row even:flex-row-reverse w-full px-12 mt-4 items-center">
      <LazyLoadImage className="mx-4 z-0 h-36 rounded" src={props.image} alt={props.project_info.title} />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">{props.project_info.title}</h1>
        <p>{props.project_info.description.split(/\s+/).slice(0, 34).join(" ")+"..."}</p>
        <div className="flex flex-row my-4">
          {props.project_info.technologies.map((technology, i) => {
            console.log(technology);
            return(
              <a className="h-10 w-10 mr-2 rounded-full bg-coffee-200" href={"/technology/"+technology.name}>
                <LazyLoadImage className="p-2" src={props.logo+"/"+technology.image}/>
              </a>
            )
          })}
        </div>
      </div>
    </a>
  );
}
