import {React} from "react";
import { useData } from './Dashboard';
import { Head } from '@inertiajs/react';
import { DataTable } from "./DataTable";

export default function ProjectImages(props) {  
  const providerData = useData(); 
  
  return (
    <>
      <Head title="Admin Projects"/>
      <div className="min-h-screen w-full transition-all duration-200 pt-8">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">{providerData.idProject.title} Images</h1>
          <DataTable head={["Image", "Name", "Action"]} type="projectimages"/>
      </div>
    </>
  );
}