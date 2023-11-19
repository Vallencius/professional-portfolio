import {React, useEffect, useState} from "react";
import { Head } from '@inertiajs/react';
import { DataTable } from "./DataTable";

export default function ProjectTypes() {  
  return (
    <>
      <Head title="Admin Project Types"/>
      <div className="min-h-screen w-full transition-all duration-200 pt-8">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">Project Types</h1>
          <div className="max-w-lg mx-auto border-2 rounded-lg mt-4">
              <DataTable head={["Name", "Action"]} type="projecttypes"/>
          </div>
      </div>
    </>
  );
}