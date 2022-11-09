import React from 'react'

const Comments = ({ comments, id, slug }) => {
   const [comment, setComment] = React.useState({})
   const [status, setStatus] = React.useState('')
   console.log(comment)

   const handleComment = async (e) => {
      e.preventDefault()

      try {
         const { comment: { value: comment } } = e.target.elements

         if (!comment) throw new Error('Empty review can\'t be submitted!')

         const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
               blog: id,
               comment
            })
         })

         const { status, ...data } = await response.json()
         if (status === 'fail') throw data

         setComment(data.data.comment)
         setStatus('')

         e.target.elements.comment.value = ''
      } catch ({ message }) {
         setStatus(message)
      }
   }

   React.useEffect(() => {
      setComment({})
      setStatus('')

   }, [id])

   return (
      <div className='flex flex-col gap-10 my-10'>
         <form onSubmit={handleComment} className="flex gap-3">
            <input className='input' name='comment' type='text' placeholder='Leave us a comment' />
            <button className='px-4 py-2 bg-primary-light text-white rounded font-semibold'>Comment</button>
         </form>

         <div className='flex flex-col gap-8'>
            {comment?.comment && (
               <div className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight'>
                  <figure className='row-span-2 h-12 w-12'>
                     <img src='/PROFILE.png' alt='' className='h-12 w-12' />
                  </figure>
                  <h4 className='text-xl'>{comment.user}</h4>
                  <p className='text-lg text-gray-500'>{comment.comment}</p>
               </div>
            )}

            {!comments?.length ? null : comments.map(({ id, user, comment }) => (<blockquote className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight' key={id}>
               <figure className='row-span-2 h-12 w-12'>
                  <img src='/PROFILE.png' alt='comment author' className='h-12 w-12' />
               </figure>
               <h4 className='text-xl'>{user.name}</h4>
               <p className='text-lg text-gray-500'>{comment}</p>
            </blockquote>
            ))}
         </div>
      </div>
   )
}

export default Comments