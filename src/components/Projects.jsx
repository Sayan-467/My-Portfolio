import React from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import { motion } from 'framer-motion';

const projects = [
    {
        title: "E-Commerce Website",
        image: project1,
        description:
            "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    },
    {
        title: "Task Management App",
        image: project2,
        description:
            "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
        technologies: ["HTML", "CSS", "Angular", "Firebase"],
    },
];

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
            className='my-16 text-center text-4xl'>Projects</motion.h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className='mb-6 flex flex-wrap lg:justify-center gap-6'>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} 
                        className='w-full lg:w-1/4'>
                            <img src={project.image} height={350} width={250} alt={project.title} className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} 
                        className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>{project.title}</h5>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <span key={index} className='mr-3 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-600'>{technology}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
