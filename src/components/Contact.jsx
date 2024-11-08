import React from 'react'
import { motion } from 'framer-motion';

const contact = {
    address: "767 Fifth Avenue, New York, NY 10153 ",
    phoneNo: "+12 4555 666 00 ",
    email: "me@example.com",
  };

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
            className='my-12 text-center text-4xl'>Contact Me</motion.h2>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className='text-center tracking-tight'>
                <p className='my-4'>{contact.address}</p>
                <p className='my-4'>{contact.phoneNo}</p>
                <a href="#" className='border-b'>{contact.email}</a>
            </motion.div>
        </div>
    )
}

export default Contact
