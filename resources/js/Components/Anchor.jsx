import { motion } from "framer-motion";
import React, { useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { Link } from '@inertiajs/react';

export default function Anchor(props) {
  const ref = React.useRef(null);
  const [dragVariant, setDragVariant] = useState("rest");

  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
    fps: 30
  });

  function linkHover(event) {
    setDragVariant("hover");
  }

  function linkHoverExit(event) {
    setDragVariant("rest");
  }

  const linkDrag = {
    rest: {
      color: "#000",
      x: "0",
      y: "0",
      transition: {
        type: "spring",
        mass: 0.8,
        damping: 20,
        stiffness: 400,
        bounce: 0.75
      }
    },
    hover: {
      color: "#1e91d6",
      x: mouse.x - mouse.elementWidth / 2,
      y: mouse.y - mouse.elementHeight / 2,
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 20,
        stiffness: 100,
        bounce: 0.75
      }
    }
  };

  return (
    <motion.div
      className="link-wrapper"
      onMouseEnter={linkHover}
      onMouseLeave={linkHoverExit}
    >
      <motion.div className="link" ref={ref}>
        <motion.div
          className="link-drag"
          variants={linkDrag}
          animate={dragVariant}
        >
          <motion.span className="link-item">
            <Link href={props.url}>
              <div className={props.type == 'footer' ? 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-coffee-500' : "block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-coffee-700 lg:hover:text-coffee-900 lg:text-coffee-200 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"} id={props.text}>
                {props.text}
              </div>
            </Link>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
