import {React, useEffect, useState} from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios';
import ErrorAlert from "@/Components/ErrorAlert";

export default function Projects(props) {  
  return (
    <>
      <Head title="Admin Projects"/>
      <div className="min-h-screen w-full transition-all duration-200">
          <h1 className="text-3xl font-bold text-coffee-900 text-center">Projects</h1>
      </div>
    </>
  );
}