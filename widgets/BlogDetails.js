import React from 'react'

const BlogDetails = ({ blog }) => {
   return (
      <div className='flex flex-col gap-10 xs:gap-16'>
         <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
            <img src={blog ? blog.image : '/NOT-FOUND.png'} className='w-full pointer-events-none rounded-md' alt='post image' />
         </figure>

         <div className='flex flex-col gap-2 md:gap-4'>
            <div className='flex justify-between text-primary-light'>
               <span className='text-xl'>{blog?.author.name.split(' ')[0]}</span>
               <span className='font-cabin text-sm'>08 - 08 - 2020</span>
            </div>

            <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>{blog && blog.title}</h3>

            <p className='text-gray-500 text-md lg:text-lg !leading-8 block tracking-tight'>
               {blog && blog.text.split('\n').map((section, i) => (
                  <span key={i}>{section}<br /></span>
               ))}
            </p>
         </div>
      </div>
   )
}

export default BlogDetails