import Link from 'next/link'
import React from 'react'

const Navbar = () => {
   const [nav, setNav] = React.useState(false)

   const toggleNav = () => {
      setNav(!nav)
   }

   return (
      <nav className="flex items-center justify-between col-span-1 md:col-start-2 md:col-end-12 mb-8">
         <span className="font-bold text-3xl text-primary-light font-kumbh-sans">BLOG</span>

         <ul className={`nav-list flex flex-col p-5 md:p-3 bg-white font-josefin-sans md:bg-transparent md:flex-row md:gap-8 font-medium fixed z-20 w-2/3 xs:w-1/2 md:w-min left-0 top-0 bottom-0 ${nav ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static transition-transform`}>
            <form className="relative flex mb-3 md:hidden">
               <input type="text" placeholder="search" className="border-black border-br-1 rounded-[10px] p-2 w-full pr-12 focus:outline-primary-light" />
               <button className="absolute top-1/2 -translate-y-1/2 right-3"><img src="/search.svg"
                  className="h-6 w-h-6" /></button>
            </form>

            <Link href="/about">
               <a className="nav-link">about</a>
            </Link>
            <Link href="/users">
               <a className="nav-link">users</a>
            </Link>
            <Link href="/posts">
               <a className="nav-link">posts</a>
            </Link>
         </ul>

         <form className="relative basis-2/5 hidden md:flex">
            <input type="text" placeholder="search" className="border-black border-br-1 rounded-[10px] p-2 w-full pl-12 focus:outline-primary-light" />
            <button className="absolute top-1/2 -translate-y-1/2 left-3"><img src="/search.svg"
               className="h-6 w-h-6" /></button>
         </form>

         <button className="md:hidden focus:outline-primary-light" onClick={toggleNav}><img src="/category.svg" className="h-8 w-8" /></button>
      </nav>
   )
}

export default Navbar