import React from 'react'

const Testimonial = ({ t, slide }) => {
   return (
      <div className='testimonial__slide absolute top-0 h-72 w-full flex gap-8 flex-wrap lg:flex-nowrap items-center justify-center transition-transform duration-1000' style={{ transform: `translateX(${slide * 100}%)` }}>
         <blockquote className='w-4/5 lg:w-[45%] text-[1rem] sm:text-xl text-gray-500 tracking-tight'>{t.text}</blockquote>
         <address className='not-italic flex flex-col items-center'>
            <figure className='h-32'>
               <img src='/BLOG.png' alt='testimonial author image' className='h-full w-full object-contain' />
            </figure>
            <h4 className='text-primary-light tracking-tight font-semibold'>{t.author}</h4>
            <p className='text-gray-500 text-sm tracking-tight'>{t.designation}</p>
         </address>
      </div>
   )
}

export default Testimonial