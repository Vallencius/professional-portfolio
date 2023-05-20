import { useState, useEffect,  React } from 'react';
import Anchor from './Anchor';
import { Link } from '@inertiajs/react';

export default function Navbar(props) {
  const [menu, setMenu] = useState('hidden');

  function openNavbar()
  {
    if (menu == 'hidden') {
      document.querySelector("#navbar-sticky").classList.remove('hidden');
      setTimeout(() => {
        document.querySelector("#navbar-sticky").classList.remove('opacity-0');
      }, 1);
      setMenu('show');
    } else {
      document.querySelector("#navbar-sticky").classList.add('opacity-0');
      setTimeout(() => {
        document.querySelector("#navbar-sticky").classList.add('hidden');
      }, 300);
      setMenu('hidden');
    }
  }
  
  useEffect(() => {
    document.querySelector("#"+props.active).classList.add('text-white');
    document.querySelector("#"+props.active).classList.add('md:text-yellow-900');
    document.querySelector("#"+props.active).classList.add('bg-coffee-700');
    document.querySelector("#"+props.active).classList.remove('lg:text-coffee-200');
  }, []);

  return (
    <>
      <div className="w-full bg-coffee-500 px-2 sm:px-4 py-2.5 fixed z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link href="/"><img src={props.image} className="h-6 mr-3 sm:h-9"/></Link>
          <div className="flex md:order-2">
            {/* <button type="button" className="text-white bg-coffee-700 hover:bg-coffee-800 focus:ring-4 focus:outline-none focus:ring-coffee-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-coffee-600 dark:hover:bg-coffee-700 dark:focus:ring-coffee-800">Get started</button> */}
            <button onClick={() => openNavbar()} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden md:opacity-100 opacity-0 w-full md:flex md:w-auto md:order-1 duration-500 transition-all" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg lg:bg-transparent bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <Anchor text="Home" url="/"/>
              </li>
              {/* <li>
                <Anchor text="About" url="/about"/>
              </li> */}
              <li>
                <Anchor text="Projects" url="/projects"/>
              </li>
              <li>
                <Anchor text="Commision" url="/commision"/>
              </li>
              {/* <li>
                <Anchor text="Contact" url="/contact"/>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}