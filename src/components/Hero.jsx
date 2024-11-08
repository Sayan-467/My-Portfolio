import React from 'react'
import profilePic from '../assets/profile.webp';
import { motion } from 'framer-motion';

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay}},
})

const Hero = () => {
    return (
        <div className='border-neutral-900 py-3'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center px-8 lg:items-start'>
                        <motion.h1 
                        variants={container(0)} initial="hidden" animate="visible"
                        className='pb-16 text-5xl font-normal tracking-tight lg:mt-8 lg:text-7xl'>Syed Sayan</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible"
                        className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Full Stack Web Developer</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible"
                        className='my-2 max-w-xl py-6 tracking-tight font-light'>
                            I am a full-stack web developer with a strong passion for machine learning and artificial intelligence. I enjoy building robust web applications and continuously expanding my skills in AI-driven solutions to create impactful and innovative experiences
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img initial={{x: 100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 1, delay: 1.5}}
                        src={profilePic} alt="profilePic" style={{ height: "350px", width: "250px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
