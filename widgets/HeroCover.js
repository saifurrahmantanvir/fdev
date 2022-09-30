import React from 'react'

const HeroCover = () => {
   return (
      <figure
         className="justify-self-center hidden md:inline-block self-start h-auto w-4/6 md:w-full col-span-1 md:col-start-9 md:col-span-3 relative">
         <img src="/BLOG.png" alt="" className="h-auto w-full object-cover" />
         <span
            className="features -right-14 lg:-right-4 top-1/4">
            2k+ <span className='text-primary-light font-josefin-sans'>blogs</span></span>
         <span
            className="features -left-10 lg:-left-4 top-2/4">300+ <span className='text-primary-light font-josefin-sans'>readers</span>
         </span>
         <span className="features -right-10 lg:-right-8 top-3/4">
            50+ <span className='text-primary-light font-josefin-sans'>authors</span></span>
      </figure>
   )
}

export default HeroCover