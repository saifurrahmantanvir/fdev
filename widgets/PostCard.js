import React from 'react'
import Link from 'next/link'

const PostCard = () => {
   return (
      <div className='flex flex-col w-40 min-w-[10rem] md:w-60 md:min-w-[15rem] lg:w-80 lg:min-w-[20rem] gap-8 md:gap-12'>
         <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
            <img src='/POST.jpg' className='pointer-events-none rounded-md' alt='post image' />
         </figure>

         <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex justify-between text-primary-light'>
               <span className='text-sm md:text-lg'>{'Saifur rahman'.split(' ')[0]}</span>
               <span className='font-mukta text-xs md:text-sm'>08 July, 2020</span>
            </div>

            <h3 className='font-kumbh-sans text-sm md:text-xl lg:text-2xl text-gray-800 tracking-tight'>How to get start with open source contribution</h3>

            <p className='text-gray-500 text-sm md:text-md lg:text-lg block'>How to get start with open source contribution How to get start with open source contribution</p>

            <Link href={`/about`}>
               <button className='p-1 md:p-2 bg-primary-light rounded md:rounded-lg self-end'>
                  <img src='/export.svg' alt='' className='h-4 w-4 md:h-6 md:w-6' />
               </button>
            </Link>
         </div>
      </div>
   )
}

export default PostCard