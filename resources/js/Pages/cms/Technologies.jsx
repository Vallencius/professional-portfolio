import { React } from "react";
import { Head } from '@inertiajs/react';
import { DataTable } from "./DataTable";

export default function Technologies() {  
  return (
    <>
      <Head title="Admin Technologies"/>
      <div className="min-h-screen w-full transition-all duration-200 pt-8">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">Technologies</h1>
          <div className="max-w-2xl mx-auto border-2 rounded-lg mt-4">
              <DataTable head={["Logo", "Name", "Action"]} type="technologies"/>
          </div>
      </div>
    </>
  );
}