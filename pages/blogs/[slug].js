import Head from 'next/head'
import React from 'react'
import Comments from 'widgets/Comments'
import CommonCard from 'widgets/CommonCard'
import Navbar from 'widgets/Navbar'

const blog = () => {
   return (
      <section className='grid grid-cols-1 md:grid-cols-12 p-5 xs:p-8 md:py-10 md:px-2 md:gap-y-10 page'>
         <Head>
            <title>Full Post detail</title>
         </Head>

         <Navbar />

         <div className='col-span-1 md:col-start-2 md:col-span-6 px-4 py-8 md:py-0'>
            <div className='flex flex-col gap-10 xs:gap-16'>
               <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
                  <img src='/POST.jpg' className='pointer-events-none rounded-md' alt='post image' />
               </figure>

               <div className='flex flex-col gap-2 md:gap-4'>
                  <div className='flex justify-between text-primary-light'>
                     <span className='text-xl'>{'Saifur rahman'.split(' ')[0]}</span>
                     <span className='font-cabin text-sm'>08 - 08 - 2020</span>
                  </div>

                  <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>How to get start with open source contribution</h3>

                  <p className='text-gray-500 text-md lg:text-lg !leading-8 block tracking-tight'>
                     How to get start with open source contribution How to get start with open source contribution.
                     <br /><br />
                     {/* In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                     <br /><br />
                     Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                     <br /><br />
                     In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. */}

                     Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                     <br /><br />
                     In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                     <br /><br />
                     {/* Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. */}
                  </p>
               </div>
            </div>

            <Comments />
         </div>

         <div className='col-span-1 md:col-start-9 md:col-span-3'>
            <div className='blogs sticky top-8 md:grid-cols-1 md:gap-8'>
               <CommonCard />
               <CommonCard />
               <CommonCard />
               <CommonCard />
            </div>
         </div>
      </section>
   )
}

export default blog