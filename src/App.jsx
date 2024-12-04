import { useEffect, useRef, useState } from "react";
import "./App.css";

import { motion } from "motion/react";
import Owl from "./assets/Owl.gif"
import tigerGif from "./assets/tigerGif.gif"
import Navbar from "./components/Navbar";
import Thinking from "./components/Thinking";

function App() {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0 });
  const left = useRef(null);
  const [hover,setHover]=useState(false)
  const handleMouseMove = (event) => {
    setMousePosition(event.clientX);
    if (left.current) {
      const width = (event.clientX / window.innerWidth) * 100;
      left.current.style.width = `${width}%`;
    }
  };

  return (
    <>
      <div className="w-full h-screen flex">
      <Navbar/>
      <Thinking hoverState={hover}/>
        <section className="w-1/2 h-full flex justify-center items-center bg-blackBLue">
          <div className="w-96 h-[32rem] flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, duration: 1 }}
              className="w-full h-96"
              onMouseEnter={()=>setHover(true)}
              onMouseLeave={()=>setHover(false)}
            >
              <img src={Owl} className="w-full h-full object-cover rounded-full"/>
            </motion.div>
            <div className="flex h-24 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 1 }}
                className="text-2xl border-2 h-20 w-56 rounded-2xl font-atma font-semibold text-white border-blue-300 transition-colors hover:bg-white hover:text-black"
              >
                Start Learning
              </motion.button>
            </div>
          </div>
        </section>
        <section className="w-1/2 h-full flex justify-center items-center bg-blue-300 group-hover:blur-md">
          <div className="w-96 h-[32rem] flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full h-[25rem] border-[12px] rounded-full"
            >
              <img src={tigerGif} className="w-full h-full object-cover rounded-full bg-right-bottom"/>
            </motion.div>
            <div className="flex h-24 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="text-2xl border-2 h-20 w-56 rounded-2xl font-atma font-semibold transition-colors text-black  hover:bg-white mt-4"
              >
                Relax and Enjoy
              </motion.button>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="w-full h-screen" onMouseMove={(e) => handleMouseMove(e)}>
        <section className="w-full h-full flex justify-center items-center bg-orange-200 absolute overflow-hidden">
          <div className="w-96 h-[32rem] flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, duration: 1 }}
              className="w-full h-96 "
            >
              <img src={Owl} className="w-full h-full object-cover rounded-full"/>
            </motion.div>
            <div className="flex h-24 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50, duration: 1 }}
                className="text-2xl border-2 h-20 w-56 rounded-2xl font-atma font-semibold transition-colors hover:bg-white"
              >
                Start Learning
              </motion.button>
            </div>
          </div>
        </section>
        <section
          className="w-full h-screen grid place-content-center  bg-blue-300 absolute overflow-hidden"
          ref={left}
        >
          <div className="w-full h-[40rem] flex flex-col justify-between ">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full h-[30rem] border-[12px] rounded-full"
            >
              <img src={tigerGif} className="w-full h-full object-cover rounded-full bg-right-bottom"/>
            </motion.div>
            <div className="flex h-24 justify-center">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="text-2xl border-2 h-20 w-56 rounded-2xl font-atma font-semibold transition-colors hover:bg-white"
              >
                Relax and Enjoy
              </motion.button>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
}

export default App;
