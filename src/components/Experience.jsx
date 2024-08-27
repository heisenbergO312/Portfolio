import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
         <h2 className='my-20 text-center text-4xl'>Experience</h2>
         <div>
            {EXPERIENCES.map((experience,index)=>(
                 <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
                    <div className="w-full lg:w-1/4">
                    <p className='mb-2 text-sm text-neutral-400' >{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                      <h6 className='mb-2 ml-6 font-semibold'>
                        {experience.role}-<span className='text-sm text-purple-100'>{experience.company}</span>
                      </h6>
                      <p className='ml-6 mb-4 text-neutral-400'>
                        {experience.description}
                      </p>
                      {experience.technologies.map((tech,index)=>(
                          <span key={index} className='ml-4  mt-4 text-sm text-purple-800 font-medium rounded bg-neutral-900 px-2'>{tech}</span>
                      ))}
                    </div>
                 </div> 
            ))}
         </div>
    </div>
  )
}

export default Experience
