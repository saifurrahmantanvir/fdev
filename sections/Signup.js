import Link from 'next/link'
import React from 'react'

const Signup = () => {
   return (
      <section className='section'>
         <div className='wrapper flex gap-8 flex-col sm:flex-row items-center justify-center bg-primary-light p-12 md:p-20 rounded-xl'>
            <span className='text-xl md:text-2xl text-center sm:text-left text-white tracking-tight'>Want to become an author? Signup & get started now!</span>
            <Link href='/signup'>
               <a className='bg-white text-lg md:text-xl rounded-lg px-4 py-2 md:px-5 md:py-3 text-primary-light whitespace-nowrap'>Sign up</a>
            </Link>
         </div>
      </section>
   )
}

export default Signup