import cloud from "../assets/cloud.png";
import { AnimatePresence, motion } from "motion/react";

export default function Thinking({hoverState}) {
  return (
    <>
      <div className="fixed w-[34rem] h-60 left-[1%] top-32 flex flex-col justify-between ">
        <div className="w-full h-full ">
          {hoverState && (
            <AnimatePresence>
            <motion.img
            key="cloud-image"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              exit={{opacity:0,transition:{duration:1}}}
              src={cloud}
              className="w-full h-full object-contain"
            />
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  );
}
