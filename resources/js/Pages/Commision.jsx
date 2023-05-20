import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swal from 'sweetalert2';

export default function Commision(props) {
  const [staticPage, setStaticPage] = useState(0);
  const [dynamicPage, setDynamicPage] = useState(0);
  const [loginSystem, setLoginSystem] = useState(0);
  const [formSystem, setFormSystem] = useState(0);
  const [CMS, setCMS] = useState(0);
  const [webDesign, setWebDesign] = useState(0);
  const [AOS, setAOS] = useState(0);

  function resetRadio() {
    var orderPackage = document.getElementById('form-order').package;
    for(var i=0;i<orderPackage.length;i++)
      orderPackage[i].checked = false;
  }

  function validate() {
    if( document.getElementById('form-order').package.value == "" && (document.getElementById('form-order').StaticPage.value == "0" && document.getElementById('form-order').DynamicPage.value == "0" && document.getElementById('form-order').FormSystem.value == "0" && document.getElementById('form-order').LoginSystem.value == "0" && document.getElementById('form-order').CMS.value == "0")) {
      Swal.fire({
        icon: 'warning',
        title: 'Please choose one base services or packages!',
      })
      return false;
    }

    if( document.getElementById('form-order').message.value == "") {
      Swal.fire({
        icon: 'warning',
        title: 'Please provide your message!',
      })
       document.getElementById('form-order').message.focus() ;
       return false;
    }
    
    return( true );
 }

  function submitContact(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Check again your order before sending!',
      icon: 'warning',
      confirmButtonText: 'Send',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (validate()) {
          document.getElementById('form-order').submit();
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
      <Head title="Commision"/>
      <Navbar
        image={props.images+"/logo-putih.png" }
        active="Commision"
      />
      <div className="w-full bg-coffee-50 pt-20 text-coffee-900">
        <h1 className="text-center text-4xl font-bold my-4 md:my-8">Web Commision</h1>
        <p className="text-center text-xl font-bold mb-12 md:my-8">Speciality:<br/>Professional page, Vtuber page, Fantasy/Game like page</p>
        <p className="text-center text-xl font-bold mb-4 md:my-8">🌟 Web Development Packages 🌟</p>
        <div className="w-5/6 lg:hidden bg-coffee-300 flex flex-col items-center p-4 rounded-xl mx-auto">
          <div className="w-full">
            <LazyLoadImage src={props.images+"/projects/ECO/Picture1.png"}></LazyLoadImage>
          </div>
          <div className="mt-4 border-t-2 border-coffee-800 w-full">
            <h3 className="text-lg font-bold text-center mt-4">Economix Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>3 Static Page</li>
              <li>Free Web Design from Me</li>
              <li>3 years worth of hosting server (1GB memory)</li>
              <li>1 year worth of domain (.my.id)</li>
            </ul>
            <h3 className="text-lg font-bold my-4">Price: Rp 1.250.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"
                className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
          <div className="mt-4 border-t-2 border-coffee-800 w-full">
            <h3 className="text-lg font-bold text-center mt-4">Middie Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>5 Static Page</li>
              <li>Free Web Design from Me</li>
              <li>User Login System</li>
              <li>Database System</li>
            </ul>
            <small>*Without hosting server & domain</small>
            <h3 className="text-lg font-bold my-4">Price: Rp 1.800.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"
                className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
          <div className="mt-4 border-t-2 border-coffee-800 w-full">
            <h3 className="text-lg font-bold text-center mt-4">Platinum Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>3 Static Page + 2 Dynamic Page</li>
              <li>Free Web Design from Me</li>
              <li>User & Admin (CMS) Login System</li>
              <li>Database System</li>
              <li>Form System</li>
              <li>3 years worth of hosting server (unlimited memory)</li>
              <li>1 year worth of domain (.com)</li>
            </ul>
            <h3 className="text-lg font-bold my-4">Price: Rp 3.500.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
        </div>
        <div className="w-7/12 hidden bg-coffee-300 lg:flex flex-row items-center justify-around p-4 rounded-xl mx-auto">
          <div className="w-1/3">
            <LazyLoadImage src={props.images+"/projects/ECO/Picture1.png"}></LazyLoadImage>
          </div>
          <div className="w-1/3 ml-4">
            <h3 className="text-lg font-bold text-center mt-4">Economix Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>3 Static Page</li>
              <li>Free Web Design from Me</li>
              <li>3 years worth of hosting server (1GB memory)</li>
              <li>1 year worth of domain (.my.id)</li>
            </ul>
            <h3 className="text-lg font-bold my-4">Price: Rp 1.250.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
        </div>
        <div className="w-7/12 hidden bg-coffee-300 lg:flex flex-row-reverse items-center justify-around p-4 rounded-xl mx-auto mt-12">
          <div className="w-1/3">
            <LazyLoadImage src={props.images+"/projects/ECO/Picture11.png"}></LazyLoadImage>
          </div>
          <div className="w-1/3 ml-4">
            <h3 className="text-lg font-bold text-center mt-4">Middie Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>5 Static Page</li>
              <li>Free Web Design from Me</li>
              <li>User Login System</li>
              <li>Database System</li>
            </ul>
            <small>*Without hosting server & domain</small>
            <h3 className="text-lg font-bold my-4">Price: Rp 1.800.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
        </div>
        <div className="w-7/12 hidden bg-coffee-300 lg:flex flex-row items-center justify-around p-4 rounded-xl mx-auto mt-12">
          <div className="w-1/3">
            <LazyLoadImage src={props.images+"/projects/TVONAIR/6.png"}></LazyLoadImage>
          </div>
          <div className="w-1/3 ml-4">
            <h3 className="text-lg font-bold text-center mt-4">Platinum Package</h3>
            <p className="mt-2">Consist of:</p>
            <ul className="list-disc pl-4">
              <li>3 Static Page + 2 Dynamic Page</li>
              <li>Free Web Design from Me</li>
              <li>User & Admin (CMS) Login System</li>
              <li>Database System</li>
              <li>Form System</li>
              <li>3 years worth of hosting server (unlimited memory)</li>
              <li>1 year worth of domain (.com)</li>
            </ul>
            <h3 className="text-lg font-bold my-4">Price: Rp 3.500.000,00</h3>
            <div className="flex justify-center">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://twitter.com/messages/1579029233011396608-1579029233011396608?recipient_id=1579029233011396608" 
                target="_blank"className="rounded bg-coffee-600 text-coffee-100 px-12 py-2">Order Now!</motion.a>
            </div>
          </div>
        </div>
        <p className="text-center text-xl font-bold mb-4 mt-8 md:my-8">✨ Base Prices ✨</p>
        <div className="w-5/6 lg:w-7/12 bg-coffee-300 flex flex-col lg:flex-row items-center justify-center p-4 rounded-xl mx-auto">
          <table className="table-fixed lg:table-auto lg:border-separate lg:border-spacing-y-0 lg:border-spacing-x-16 lg:w-1/2 lg:text-center">
            <thead>
              <tr>
                <th className="w-7/12 lg:w-auto">Type</th>
                <th className="w-5/12 lg:w-auto">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Static Page</td>
                <td>Rp 300.000,00</td>
              </tr>
              <tr>
                <td>Dynamic Page</td>
                <td>Rp 350.000,00</td>
              </tr>
              <tr>
                <td>Login System</td>
                <td>Rp 450.000,00</td>
              </tr>
              <tr>
                <td>Form System</td>
                <td>Rp 200.000,00</td>
              </tr>
              <tr>
                <td>CMS (Admin Page)</td>
                <td>Rp 250.000,00</td>
              </tr>
            </tbody>
          </table>          <div className="w-1/3 hidden lg:inline">
            <LazyLoadImage src={props.images+"/projects/ECO/Picture7.png"}></LazyLoadImage>
          </div>
        </div>
        <p className="text-center text-xl font-bold mb-4 mt-8 md:my-8">💫 Add-Ons 💫</p>
        <div className="w-5/6 lg:w-7/12 bg-coffee-300 flex flex-col items-center justify-center p-4 rounded-xl mx-auto">
          <table className="table-fixed lg:table-auto border-separate border-spacing-y-2 lg:border-spacing-y-0 lg:border-spacing-x-16">
            <thead>
              <tr>
                <th className="w-1/2 lg:w-auto">Type</th>
                <th className="w-5/12 lg:w-auto">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custom Web Design by Client</td>
                <td>Rp 50.000,00</td>
              </tr>
              <tr>
                <td>Custom Animation on Scroll</td>
                <td>Rp 100.000,00</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full hidden lg:flex flex-row items-center justify-center space-x-8 my-4">
            <LazyLoadImage src={props.images+"/commision/design.png"} className="w-1/3"></LazyLoadImage>
            <LazyLoadImage src={props.images+"/commision/AOS.gif"} className="w-1/3"></LazyLoadImage>
          </div>
        </div>
        <p className="text-center text-xl font-bold mb-4 mt-8 md:my-8">🛠️ Special Features 🛠️</p>
        <div className="w-5/6 lg:w-7/12 bg-coffee-300 flex flex-col items-center justify-center p-4 rounded-xl mx-auto">
          <table className="table-fixed lg:table-auto border-separate border-spacing-y-2 lg:border-spacing-y-0 lg:border-spacing-x-16">
            <thead>
              <tr>
                <th className="w-7/12 lg:w-auto">Type</th>
                <th className="w-5/12 lg:w-auto">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>On Web Live 2D + Tracker</td>
                <td>Rp 500.000,00</td>
              </tr>
              <tr>
                <td>Filter System</td>
                <td>Rp 100.000,00</td>
              </tr>
              <tr>
                <td>Other Custom Features</td>
                <td>Hit me on DM</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full hidden lg:flex flex-row items-center justify-center space-x-8 my-4">
            <LazyLoadImage src={props.images+"/commision/l2d.gif"} className="w-1/3"></LazyLoadImage>
            <LazyLoadImage src={props.images+"/commision/filter.png"} className="w-1/3"></LazyLoadImage>
          </div>
        </div>
        <div className="w-5/6 lg:w-7/12 font-bold text-center bg-coffee-300 p-4 rounded-xl mx-auto mt-8">
          <p>Any questions? Contact me for further consultation!</p>
          <small>*PS: Active on Twitter and Instagram, or fill the form below!</small>
        </div>
        <section id="order" className="w-full flex flex-col items-center justify-center p-8 bg-coffee-400 mt-12">
          <h1 className="text-center text-3xl">ORDER HERE!</h1>
          <form action="/order" method="POST" className="w-fit flex flex-col items-center justify-center" encType="multipart/form-data" id="form-order">
            <input type="hidden" name="_token" value={csrf_tokens} />
            <motion.div
              className="w-full mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <p className="font-bold">Order Packages</p>
              <input type="radio" id="Economix" name="package" value="Economix"/>
              <label className="ml-2" htmlFor="Economix">Economix</label><br/>
              <input type="radio" id="Middie" name="package" value="Middie"/>
              <label className="ml-2" htmlFor="Middie">Middie</label><br/>
              <input type="radio" id="Platinum" name="package" value="Platinum"/>
              <label className="ml-2" htmlFor="Platinum">Platinum</label>
              <br/>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button" 
                className="bg-coffee-200 mt-2 px-4 py-2 rounded-lg" 
                onClick={resetRadio}
              >
                Reset
              </motion.button>
            </motion.div>
            <motion.div
              className="w-full m-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <p className="font-bold">Order Base Services</p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="StaticPage">Static Page</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(staticPage > 0) {setStaticPage(staticPage - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="StaticPage" name="StaticPage" className="w-16 text-center" value={staticPage} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(staticPage >= 0) {setStaticPage(staticPage + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="DynamicPage">Dynamic Page</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(dynamicPage > 0) {setDynamicPage(dynamicPage - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="DynamicPage" name="DynamicPage" className="w-16 text-center" value={dynamicPage} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(dynamicPage >= 0) {setDynamicPage(dynamicPage + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="LoginSystem">Login System</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(loginSystem > 0) {setLoginSystem(loginSystem - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="LoginSystem" name="LoginSystem" className="w-16 text-center" value={loginSystem} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(loginSystem >= 0) {setLoginSystem(loginSystem + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="FormSystem">Form System</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(formSystem > 0) {setFormSystem(formSystem - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="FormSystem" name="FormSystem" className="w-16 text-center" value={formSystem} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(formSystem >= 0) {setFormSystem(formSystem + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="CMS">Admin Page</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(CMS > 0) {setCMS(CMS - 1)}}} 
                        className="text-xl mr-2 bg-coffee-100 px-3 rounded-full"
                      >
                        -
                      </motion.button>
                      <input type="number" id="CMS" name="CMS" className="w-16 text-center" value={CMS} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(CMS >= 0) {setCMS(CMS + 1)}}} 
                        className="text-xl ml-2 bg-coffee-100 px-3 rounded-full"
                      >
                        +
                      </motion.button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
            <motion.div
              className="w-full mt-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <p className="font-bold">Order Add Ons</p>
              <table className="border-separate border-spacing-y-4">
                <tbody>
                  <tr>
                    <td className="w-28">
                      <label className="mr-2" htmlFor="WebDesign">Custom Web Design*</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(webDesign > 0) {setWebDesign(webDesign - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="WebDesign" name="WebDesign" className="w-16 text-center" value={webDesign} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(webDesign >= 0) {setWebDesign(webDesign + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                      <span className="ml-4 text-lg hidden lg:inline">Page(s)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="mr-2" htmlFor="AOS">Custom Animation on Scroll**</label>
                    </td>
                    <td>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(AOS > 0) {setAOS(AOS - 1)}}} className="text-xl mr-2 bg-coffee-100 px-3 rounded-full">-</motion.button>
                      <input type="number" id="AOS" name="AOS" className="w-16 text-center" value={AOS} readOnly/>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {if(AOS >= 0) {setAOS(AOS + 1)}}} className="text-xl ml-2 bg-coffee-100 px-3 rounded-full">+</motion.button>
                      <span className="ml-4 text-lg hidden lg:inline">Page(s)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="font-bold text-center bg-coffee-300 p-4 rounded-xl mx-auto mt-4">
                <small>*Harga Custom Web Design untuk max 1920 x 5760 (3 kali landscape)</small> <br/>
                <small>**Fade out, Fade in, translate xy, zoom (scale), etc.</small>
              </div>
            </motion.div>
            <motion.div
              className="w-full mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <label htmlFor="message" className="">Message: </label><br/>
              <textarea type="text" className="border-coffee-500 bg-coffee-50 w-full"
                  id="message" name="message" placeholder="Enter your message..." rows="3"></textarea>
            </motion.div>
            <motion.div
              className="w-1/2 bg-coffee-100 mt-4 rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <button type="button" onClick={() => submitContact()} className="w-full h-full p-4">Submit</button>
            </motion.div>
          </form>
        </section>
      </div>
      <Footer
        image={props.images+"/logo-hitam.svg" }
      />
    </>
  )
}