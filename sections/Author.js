import React from 'react'
import StepBox from 'widgets/StepBox'

const Author = () => {
   return (
      <section className='section'>
         <div className='wrapper'>
            <h2 className="heading">Become an author</h2>
         </div>

         <div className='wrapper flex justify-center gap-8 md:gap-14 flex-wrap lg:flex-nowrap'>
            <StepBox
               icon={'icon-basic-todo'}
               heading={'Choose a plan'}
               description={'Choose the subscription plan that best fits your needs and sign up today.'}
            />
            <StepBox
               icon={'icon-basic-map'}
               heading={'Order your meal'}
               description={'Order your delicious meal using our mobile app or website. Or you can even call us!'}
            />
            <StepBox
               icon={'icon-basic-chronometer'}
               heading={'Enjoy your meal'}
               description={'Enjoy your meal after less than 15 minutes. See you the next time!'}
            />
         </div>
      </section>
   )
}

export default Author