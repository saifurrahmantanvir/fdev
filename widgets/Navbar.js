import Link from 'next/link'
import React from 'react'

const Navbar = () => {
   return (
      <nav>
         <Link href='/'>
            <a title='Home Page'>home</a>
         </Link>
         <Link href='/about'>
            <a title='About Next.js'>about</a>
         </Link>
      </nav>
   )
}

export default Navbar