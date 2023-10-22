import {React, useState} from "react";
import { useForm } from "react-hook-form";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios';

export default function Login(props) {
  const STATUS_LOGIN_SUCCESS = 0;
  const STATUS_LOGIN_FAILED = 1;

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async(data) => {
    axios.defaults.headers.common['X-CSRF-TOKEN'] = props.csrf;
    axios.post('/api/admin/login', data)
    .then(response => {
      if (response.data.status == STATUS_LOGIN_SUCCESS) {
        window.location.href = 'admin/dashboard';
      } else if (response.data.status == STATUS_LOGIN_FAILED) {
        setErrorMessage(response.data.message);
      }
    })
    .catch(error => {
      setErrorMessage(error.message + ". Please refresh this page!");
    });
  };
  
  return (
    <>
      <Head title="Admin Login"/>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-coffee-50 to-coffee-200 text-if-white z-10">
        <LazyLoadImage className="w-56 bg-if-white px-4 py-2 rounded-lg" src={props.images+"/logo-hitam.svg" }></LazyLoadImage>
        <h2 className="mt-12 mb-8 font-kanit text-4xl">Welcome, Admin!</h2>
        {errorMessage !== "" && <p className="text-red-500 bg-red-100 px-8 py-4 border-2 border-red-500 mb-8 rounded-lg">{errorMessage}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center text-if-black">
          <div className="mb-4 flex flex-col items-center justify-center">
            <label>Email</label>
            <input type="text" name="email" {...register("email", {
                required: "Email tidak boleh kosong!",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email harus merupakan email yang valid."
                }
              })} 
              className="rounded-full" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="mb-4 flex flex-col items-center justify-center">
            <label>Password</label>
            <input type="password" name="password" {...register("password", {
                required: "Password tidak boleh kosong!",
                minLength: {
                  value: 6,
                  message: "Password harus mengandung minimal 6 karakter."
                }
              })} 
              className="rounded-full" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit" 
            className="bg-coffee-400 hover:bg-coffee-600 border-2 border-coffee-600 text-white px-8 py-2 rounded-full"
          >
            Login
          </motion.button>
        </form>
      </div>
      <Footer
        image={props.images+"/logo-hitam.svg" }
      />
    </>
  );
}