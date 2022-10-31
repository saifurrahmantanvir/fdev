import React from 'react'
import Link from 'next/link'

const CommonCard = () => {
   return (
      <Link href={`/blogs/details`}>
         <div className='flex flex-col gap-8 cursor-pointer'>
            <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
               <img src='/POST.jpg' className='pointer-events-none rounded-md' alt='post image' />
            </figure>

            <div className='flex flex-col gap-2 md:gap-4'>
               <div className='flex justify-between text-primary-light'>
                  <span className='text-sm md:text-lg'>{'Saifur rahman'.split(' ')[0]}</span>
                  <span className='font-cabin text-xs md:text-sm'>08 - 08 - 2020</span>
               </div>

               <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>How to get start with open source contribution</h3>

               <p className='text-gray-500 text-md lg:text-lg !leading-7 block tracking-tight'>How to get start with open source contribution How to get start with open source contribution</p>
            </div>
         </div>
      </Link>
   )
}

export default CommonCard