import React from 'react'

const useSliderHook = function () {
   const numOfSlides = 3;
   let currentSlide = 0;

   /*
   document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') previousSlide();
   });
   */

   const goToSlide = (cSlide) => {
      const slides = document.querySelectorAll(`.testimonial__slide`);

      slides.forEach((s, i) =>
         s.style.transform = `translateX(${(i - cSlide) * 100}%)`
      );
   }

   const nextSlide = () => {
      if (currentSlide === numOfSlides - 1) currentSlide = 0;
      else currentSlide++;

      goToSlide(currentSlide);
   }

   const previousSlide = () => {
      if (currentSlide === 0) currentSlide = numOfSlides - 1;
      else currentSlide--;

      goToSlide(currentSlide);
   }

   React.useEffect(() => {
      goToSlide(0);

      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
   }, [])

   return { nextSlide, previousSlide }
}

export default useSliderHook