import React from 'react'
import Link from 'next/link'

const PostCard = ({ blog }) => {
   return (
      <div className='flex flex-col w-60 min-w-[15rem] lg:w-80 lg:min-w-[20rem] gap-8 md:gap-12'>
         <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
            <img src={blog ? blog.image : '/NOT-FOUND.png'} className='pointer-events-none rounded-md' alt='post image' />
         </figure>

         <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex justify-between text-primary-light'>
               <span className='text-sm md:text-lg'>{'Saifur rahman'.split(' ')[0]}</span>
               <span className='font-cabin text-xs md:text-sm'>08 - 08 - 2020</span>
            </div>

            <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>{blog.title}</h3>

            <p className='text-gray-500 text-md lg:text-lg block tracking-tight'>{blog.text.slice(0, 100).trim()}.....</p>

            <Link href={`/blogs/${blog.slug}`}>
               <button className='p-1 md:p-2 bg-primary-light rounded md:rounded-lg self-end'>
                  <img src='/export.svg' alt='' className='h-6 w-6' />
               </button>
            </Link>
         </div>
      </div>
   )
}

export default PostCard