import React from 'react'

const Comments = () => {
   const handleComment = (e) => {
      e.preventDefault()
      console.log(e.target.elements)
   }

   return (
      <div className='flex flex-col gap-10 my-10'>
         <form onSubmit={handleComment} className="flex gap-3">
            <input className='input' type='text' placeholder='Leave us a comment' />
            <button className='px-4 py-2 bg-primary-light text-white rounded font-semibold'>Comment</button>
         </form>

         <div className='flex flex-col gap-8'>
            <div className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight'>
               <figure className='row-span-2 h-12 w-12'>
                  <img src='/avatar.png' alt='comment author' className='h-12 w-12' />
               </figure>
               <h4 className='text-xl'>Tanvir rahman</h4>
               <p className='text-lg text-gray-500'>f.dev has a lot of awesome and informative blogs. When I get free time I always visit this website for learning. It's still helping me in my 5 years old journey.</p>
            </div>

            <div className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight'>
               <figure className='row-span-2 h-12 w-12'>
                  <img src='/avatar.png' alt='comment author' className='h-12 w-12' />
               </figure>
               <h4 className='text-xl'>Ropi rahman</h4>
               <p className='text-lg text-gray-500'>When I was looking for source to learn frontend development I came across this site and found some awesome blogs which helped me a lot in my learning.</p>
            </div>

            <blockquote className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight'>
               <figure className='row-span-2 h-12 w-12'>
                  <img src='/avatar.png' alt='comment author' className='h-12 w-12' />
               </figure>
               <h4 className='text-xl'>Saifur rahman</h4>
               <p className='text-lg text-gray-500'>f.dev has a lot of awesome and informative blogs. When I get free time I always visit this website for learning.</p>
            </blockquote>
         </div>
      </div>
   )
}

export default Comments