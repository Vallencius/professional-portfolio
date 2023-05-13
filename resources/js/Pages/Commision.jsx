import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Commision(props) {
  return (
    <>
      <Head title="Commision"/>
      <Navbar
        image={props.images+"/logo-putih.png" }
        active="Commision"
      />
      <div className="w-full h-screen bg-coffee-50 py-20">
        <h1 className="text-center text-4xl text-coffee-900 font-bold my-8">Web Commision</h1>
        <p className="text-center text-xl text-coffee-900 font-bold my-8">Open web commision </p>
      </div>
      <Footer
        image={props.images+"/logo-hitam.svg" }
      />
    </>
  )
}