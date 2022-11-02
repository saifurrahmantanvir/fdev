import React from 'react'
import Link from 'next/link'

const CommonCard = ({ blog }) => {
   return (
      <Link href={`/blogs/${blog.slug}`}>
         <div className='flex flex-col gap-8 cursor-pointer'>
            <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
               <img src={blog.image} className='pointer-events-none rounded-md' alt='post image' />
            </figure>

            <div className='flex flex-col gap-2 md:gap-4'>
               <div className='flex justify-between text-primary-light'>
                  <span className='text-sm md:text-lg'>{'Saifur rahman'.split(' ')[0]}</span>
                  <span className='font-cabin text-xs md:text-sm'>08 - 08 - 2020</span>
               </div>

               <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>{blog.title}</h3>

               <p className='text-gray-500 text-md lg:text-lg !leading-7 block tracking-tight'>{blog.text.slice(0, 100).trim()}.....</p>
            </div>
         </div>
      </Link>
   )
}

export default CommonCard