const StepBox = function ({ icon, heading, description }) {
   return (
      <div className='relative basis-full sm:basis-2/5 lg:basis-1/3 flex flex-col gap-5 px-8 py-8 md:px-12 md:py-10 border-primary-light border-br-1 cursor-pointer step'>
         <h4 className='heading-4 mb-medium text-primary-light text-xl'>{heading}</h4>
         <p className="text-lg text-gray-500">
            {description}
         </p>
      </div>
   )
}

export default StepBox