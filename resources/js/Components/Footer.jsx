import React from "react";
import Anchor from './Anchor';

export default function Footer(props) {
  return (
      <>
        <div className="w-full md:min-h-full min-h-[90vh] bg-coffee-tan flex flex-col md:flex-row md:divide-x-4 divide-coffee-900">
          <img src={props.image} className="w-full md:w-1/3 p-12"/>
          <div className="items-center justify-between duration-500 transition-all m-auto" id="navbar-sticky">
            <ul className="flex flex-row p-4 mt-4 rounded-lg bg-transparent md:flex-col md:space-y-2 md:mt-0 md:text-md md:font-medium md:border-0">
              <li>
                <Anchor text="Home" url="/" type="footer"/>
              </li>
              {/* <li>
                <Anchor text="About" url="/about" type="footer"/>
              </li> */}
              <li>
                <Anchor text="Projects" url="/projects" type="footer"/>
              </li>
              <li>
                <Anchor text="Commision" url="/commision" type="footer"/>
              </li>
              {/* <li>
                <Anchor text="Contact" url="/contact" type="footer"/>
              </li> */}
            </ul>
          </div>
          <div className="space-x-4 w-full md:w-1/3 m-auto text-center">
            <a href="http://www.instragram.com/vallnxs.gvr"><i className="fa fa-instagram text-4xl"></i></a>
            <a href="https://twitter.com/Vallenciusx"><i className="fa fa-twitter text-4xl"></i></a>
            <a href="https://www.linkedin.com/in/vallencius-gavriel-alfredo-siswanto-8268b8228/"><i className="fa fa-linkedin text-4xl"></i></a>
            <a href="https://github.com/Vallencius?tab=repositories"><i className="fa fa-github text-4xl"></i></a>
            <a href="https://vallencius.my.id"><i className="fa fa-globe text-4xl"></i></a>
          </div>
        </div>
        <div className="bg-coffee-700">
          <p className="text-center text-coffee-50">Made with 🤍 by Vallencius Gavriel</p>
        </div>
      </>
  );
}