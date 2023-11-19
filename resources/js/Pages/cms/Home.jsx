import {React, useEffect, useState} from "react";
import { Head } from '@inertiajs/react';

export default function Home(props) { 
  return (
    <>
      <Head title="Admin Home"/>
      <div className="min-h-screen w-full transition-all duration-200 pt-8">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">Welcome Back, Captain!</h1>
          <p className="text-xl font-bold mt-2 pl-2">Server Insight Coming Soon!</p>
      </div>
    </>
  );
}