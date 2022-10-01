import React from 'react'
import Testimonial from 'widgets/Testimonial';
import useSliderHook from 'hooks/useSliderHook';
import { testimonials } from 'lib/testimonials';

const Testimonials = () => {
   const { nextSlide, previousSlide } = useSliderHook();

   return (
      <section className='section'>
         <div className='wrapper'>
            <h2 className='heading'>Readers say to us</h2>
         </div>

         <div className='wrapper relative w-full mx-auto h-[25rem] sm:h-80 overflow-hidden'>
            {testimonials.map((t, i) => (<Testimonial t={t} slide={i} key={t.author} />))}

            <button className='testimonial-btn left-0 lg:left-[7%] focus:outline-none' onClick={previousSlide}>
               <span>&larr;</span>
            </button>

            <button className='testimonial-btn right-0 lg:right-[7%] focus:outline-none' onClick={nextSlide}>
               <span>&rarr;</span>
            </button>
         </div>
      </section>
   )
}

export default Testimonials