import React from 'react'
import { RiNextjsLine, RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { animate, motion } from 'framer-motion';

const iconVar = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [-10, 10], 
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tech = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -10}} transition={{duration: 0.5}}
            className='my-14 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{x: 0, opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration: 1.5}}
            className='flex flex-wrap justify-center items-center gap-4'>
                <motion.div variants={iconVar(2.5)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <TiHtml5 className='text-7xl text-red-500' />
                </motion.div>
                <motion.div variants={iconVar(5)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <DiCss3 className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div variants={iconVar(3.5)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <SiMongodb className='text-7xl text-green-500' />
                </motion.div>
                <motion.div variants={iconVar(6)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <SiExpress className='text-7xl text-white' />
                </motion.div>
                <motion.div variants={iconVar(1.5)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-500' />
                </motion.div>
                <motion.div variants={iconVar(4)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <FaNodeJs className='text-7xl text-green-500' />
                </motion.div>
                <motion.div variants={iconVar(6.5)} initial="initial" animate="animate"
                className='border-4 border-neutral-800 rounded-2xl p-4'>
                    <FaPython className='text-7xl text-sky-600' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tech
