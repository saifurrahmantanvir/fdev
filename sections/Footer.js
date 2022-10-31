import Link from 'next/link'
import React from 'react'

const Footer = () => {
   return (
      <footer className='section'>
         <div className='wrapper flex flex-col gap-12'>
            <nav className='flex flex-col md:flex-row gap-5 justify-between items-center'>
               <ul className='flex text-sm md:text-lg gap-3 md:gap-5 text-gray-500'>
                  <li><Link href="/about"><a className='hover:text-primary-light'>About</a></Link></li>
                  <li><Link href="/"><a className='hover:text-primary-light'>Contact</a></Link></li>
                  <li><Link href="/blogs"><a className='hover:text-primary-light'>Blogs</a></Link></li>
                  <li><Link href="/"><a className='whitespace-nowrap hover:text-primary-light'>Become an author</a></Link></li>
               </ul>

               <ul className='flex gap-4'>
                  <li><img src='/facebook.svg' alt='social icon' className='h-8 w-8' /></li>
                  <li><img src='/whatsapp.svg' alt='social icon' className='h-8 w-8' /></li>
                  <li><img src='/telegram.svg' alt='social icon' className='h-8 w-8' /></li>
                  <li><img src='/email.svg' alt='social icon' className='h-8 w-8' /></li>
                  <li><img src='/instagram.svg' alt='social icon' className='h-8 w-8' /></li>
               </ul>
            </nav>

            <span className="font-bold text-3xl tracking-tight text-primary-light font-kumbh-sans text-center"><span className='font-josefin-sans font-medium'>$</span> f.dev</span>

            <p className="text-sm xs:text-md text-center text-gray-500 tracking-tight">Copyright &copy; by <a className='text-primary-light' target='_blank' href='https://linkedin.com/in/saifurrahmantanvir/'>Saifur rahman</a>. All rights reserved.</p>
         </div>
      </footer>
   )
}

export default Footer