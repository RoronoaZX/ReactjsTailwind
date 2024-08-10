import { FaVuejs } from "react-icons/fa";
import { SiQuasar } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { SiCapacitor } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import {motion} from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay:delay}
    }
  })
const iconVariants =(duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial= {{opacity:0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaVuejs className="text-7xl text-emerald-600" />    
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiQuasar className="text-7xl text-sky-500" />    
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLaravel className="text-7xl text-red-600" />    
            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiElectron className="text-7xl text-sky-400" />    
            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCapacitor className="text-7xl text-sky-400" />    
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial= "initial"
            animate = "animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-amber-400" />    
            </motion.div>
        </div>
    </div>
  )
}

export default Technologies;
