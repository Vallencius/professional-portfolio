import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Swal from 'sweetalert2';

export default function ContactEmail(props) {
  function validate() {
    if( document.getElementById('form-email').name.value == "" ) {
      Swal.fire({
        icon: 'warning',
        title: 'Please provide your name!',
      })
      document.getElementById('form-email').name.focus() ;
      return false;
    }

    if( document.getElementById('form-email').email.value == "" ) {
      Swal.fire({
        icon: 'warning',
        title: 'Please provide your email!',
      })
      document.getElementById('form-email').email.focus() ;
      return false;
    }

    if( document.getElementById('form-email').message.value == "") {
      Swal.fire({
        icon: 'warning',
        title: 'Please provide your message!',
      })
       document.getElementById('form-email').message.focus() ;
       return false;
    }
    
    return( true );
 }

  function submitContact(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Check again your name, email, and messages before sending email!',
      icon: 'warning',
      confirmButtonText: 'Send',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (validate()) {
          document.getElementById('form-email').submit();
          Swal.fire({
            title: 'Email sent!',
            text: 'Thankyou for your message',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
          });
        }
      } else if (result.isDenied) {
        Swal.fire('Email not being sent!', '', 'info');
      }
    })
  }
  return (
      <>
        <AnimatePresence>
          <div className="w-full flex flex-col items-center justify-center p-8 bg-coffee-400">
            <h1 className="text-center text-3xl">CONTACT ME</h1>
            <form action="/email" method="POST" className="w-[90%] flex flex-col items-center justify-center" encType="multipart/form-data" id="form-email">
              <input type="hidden" name="_token" value={csrf_tokens} />
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <label htmlFor="name" className="text-left">Name: </label><br/>
                <input type="text" className="border-coffee-500 bg-coffee-50 w-full"
                    id="name" name="name" placeholder="Enter your name..." />
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <label htmlFor="email" className="text-left">Email: </label><br/>
                <input type="email" className="border-coffee-500 bg-coffee-50 w-full"
                    id="email" name="email" placeholder="Enter Email Address..." />
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <label htmlFor="message" className="">Message: </label><br/>
                <textarea type="text" className="border-coffee-500 bg-coffee-50 w-full"
                    id="message" name="message" placeholder="Enter your message..." rows="3"></textarea>
              </motion.div>
              <motion.div
                className="w-1/2 bg-coffee-100 mt-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <button type="button" onClick={() => submitContact()} className="w-full h-full p-4">Submit</button>
              </motion.div>
            </form>
          </div>
        </AnimatePresence>
      </>
  );
}