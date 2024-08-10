import { motion } from "framer-motion"
import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
       <motion.h1
       whileInView={{opacity:1, y: 0}}
       initial={{opacity:0, y: -100}}
       transition={{duration: 0.5}}
       className="my-20 text-center text-4xl"> Projects</motion.h1>
       <div>{PROJECTS.map((project, index)=> (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4 flex items-center justify-center">
            <motion.img 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 1, x: -100}}
            transition={{duration: 1.5}}
            src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />
          </div>
        <div
        className="w-full max-w-xl lg:w-3/4">
            <motion.h6 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 1, x: -100}}
            transition={{duration: 1}}
            className="font-semibold text-purple-100 mb-5 ">{project.title}</motion.h6>
            <motion.p 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 1}}
            className="mb-4 text-neutral-400">{project.description}</motion.p>
            {project.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-indigo-400">{tech}</span>
            ))}
        </div>
        </div>
       ))}
       </div>
    </div>
  )
}

export default Projects