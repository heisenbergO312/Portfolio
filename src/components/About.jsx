import React from 'react'
import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About
        <span className='text-neutral-500'> Me</span>
      </h1>
      <div className='flex flex-wrap lg:flex-nowrap'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center lg:justify-start'>
            <img className='rounded-2xl w-2/3 lg:w-full' src={aboutImg} alt="About Img"/>
          </div>
        </div>
        
        {/* Text Section */}
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
