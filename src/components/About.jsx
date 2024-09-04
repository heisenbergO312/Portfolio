import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
      className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
      </motion.h1>
      <div 
      className='flex flex-wrap lg:flex-nowrap'>
        {/* Image Section */}
        <motion.div 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center lg:justify-start'>
            <img className='rounded-2xl w-2/3 lg:w-full' src={aboutImg} alt="About Img"/>
          </div>
        </motion.div>
        
        <motion.div 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
          <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}
           className='flex justify-center lg:justify-start mt-4'>
            <a 
              href="https://drive.google.com/file/d/1RvkGNlssLpFI-M5DukaVpD39PKR2KvSB/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer"
              className='border border-white bg-transparent text-white font-light py-2 px-4 rounded-lg hover:bg-cyan-600 transition duration-300 ease-in-out'>
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About;
