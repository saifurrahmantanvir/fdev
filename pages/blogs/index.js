import React from 'react'
import Head from 'next/head';
import CommonCard from 'widgets/CommonCard';

const blogs = () => {
   return (
      <section className='section page'>
         <Head>
            <title>All blogs collection of fdev</title>
         </Head>

         <div className='wrapper'>
            <h2 className='heading'>Popular blogs</h2>
         </div>

         <div className='wrapper blogs mb-16'>
            {[1, 2, 3, 4].map((p, i) => (<CommonCard key={i} />))}
         </div>


         <div className='wrapper'>
            <h2 className='heading'>All blogs</h2>
         </div>

         <div className='wrapper blogs'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((p, i) => (<CommonCard key={i} />))}
         </div>
      </section>
   )
}

export default blogs