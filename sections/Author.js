import React from 'react'
import StepBox from 'widgets/StepBox'

const Author = () => {
   return (
      <section className='section'>
         <div className='wrapper'>
            <h2 className="heading">Become an author</h2>
         </div>

         <div className='wrapper flex justify-center gap-8 md:gap-14 flex-wrap lg:flex-nowrap tracking-tight'>
            <StepBox
               icon={'icon-basic-todo'}
               heading={'Send writing sample'}
               description={'Send us your writing sample via going to become an author page'}
            />
            <StepBox
               icon={'icon-basic-map'}
               heading={'Get approved'}
               description={'We will review your writing and approve you as an author of f.dev'}
            />
            <StepBox
               icon={'icon-basic-chronometer'}
               heading={'Continue writing'}
               description={'Once you are approved, you are good to go. Continue you journey with us.'}
            />
         </div>
      </section>
   )
}

export default Author