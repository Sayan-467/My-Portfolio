import React from 'react'
import about from "../assets/about.jpg"
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <h2 className='my-12 text-center text-4xl text-white'>About <span className='text-neutral-500'>Me</span></h2>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 0.5}}
                className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center items-center'>
                        <img className='rounded-3xl' src={about} alt="aboutImg" style={{width: "482px"}} />
                    </div>
                </motion.div>
                <div className='w-full lg:w-1/2'>
                    <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 1, x: 100}} transition={{duration: 0.5}} 
                    className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 px-4'>
                            Hello! I am Syed Sayan, a dedicated and passionate full-stack web developer with a keen interest in machine learning and artificial intelligence. I thrive on creating dynamic, user-centered web applications and continuously pushing my skills to build innovative solutions. My journey in tech has been fueled by a drive to merge practical development skills with cutting-edge AI techniques, delivering impactful experiences that make a difference. Whether it is frontend, backend, or diving deep into data, I am always excited to learn and take on new challenges!
                        </p>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
