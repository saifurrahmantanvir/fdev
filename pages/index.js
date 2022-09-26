import React from 'react'
import Link from 'next/link'

const Home = () => {
   return (
      <div className='app'>
         <span>Learning next.js</span>{' '}
         <Link href='/about'>
            <a>about</a>
         </Link>
      </div>
   )
}

export default Home