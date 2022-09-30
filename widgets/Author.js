import React from 'react'

const Author = () => {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-[min-content_1fr] gap-4 items-center p-4 bg-primary-light rounded-lg text-center lg:text-left">
         <figure className="justify-self-center w-40 rounded-xl"><img src="/BLOG.png"
            className="h-full w-full object-cover" /></figure>
         <div className="text-white flex flex-col justify-between gap-3">
            <p className='font-light tracking-tight md:tracking-normal'>When I was looking for source to learn frontend development I came across this site
               and found some awesome blogs which helped me a lot in my learning.</p>
            <div>
               <span className="text-lg block">Tanvir rahman</span>
               <span className="text-xl">Frontend Developer</span>
            </div>
         </div>
      </div>
   )
}

export default Author