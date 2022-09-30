import React from 'react'
import Author from './Author'

const HeroContent = () => {
   return (
      <div className="col-span-1 md:col-start-2 md:col-span-6 flex flex-col justify-between gap-4 mt-10">
         <h1 className="font-kumbh-sans text-primary-light uppercase text-3xl lg:text-4xl font-semibold tracking-tight">Read next level blogs here</h1>
         <span className="font-josefin-sans text-gray-500 text-lg lg:text-xl tracking-tight">Learn your desired thing from over <span className='text-primary-light font-cabin'>2000+</span> blogs created by
            the best authors in the world</span>
         <div className="flex gap-3 mb-16 lg:mb-32">
            <button className="px-4 py-2 bg-primary-light text-white rounded font-semibold">Sign up</button>
            <button className="px-4 py-2 border-primary-light border-br-1 text-primary-light rounded font-semibold">Start reading</button>
         </div>
         <Author />
      </div>
   )
}

export default HeroContent