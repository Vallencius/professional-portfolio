import {React, useEffect, useState} from "react";
import { Head } from '@inertiajs/react';
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios';

export default function Home(props) {  
  return (
    <>
      <Head title="Admin Home"/>
      <div className="min-h-screen w-full transition-all duration-200">
          <h1 class="text-3xl font-bold text-coffee-900 text-center">Welcome back boss!!</h1>
          <p>Server Insight??</p>
      </div>
    </>
  );
}