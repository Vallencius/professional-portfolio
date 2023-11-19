import {React, useEffect, useState} from "react";
import { Head } from '@inertiajs/react';
import { DataTable } from "./DataTable";

export default function Projects(props) {  
  return (
    <>
      <Head title="Admin Projects"/>
      <div className="min-h-screen w-full transition-all duration-200 pt-8">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">Projects</h1>
          <div className="flex flex-row w-full mt-4">
              <button className="ml-auto mr-4 my-2">
                  <a href="#" className=" rounded-full bg-green-200 px-4 py-2">+ Add Project</a>
              </button>
          </div>
          <DataTable head={["Logo", "Title", "Type", "Technologies", "Link", "Action"]} type="projects"/>
      </div>
    </>
  );
}