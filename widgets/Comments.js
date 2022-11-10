import React from 'react'

const Comments = ({ id }) => {
   const [commentInfo, setCommentInfo] = React.useState({})
   const [comments, setComments] = React.useState([])
   const [status, setStatus] = React.useState('')

   const getComments = async (id) => {
      try {
         const response = await fetch(`/api/comments/${id}`)

         const { status, ...data } = await response.json()
         console.log("COMMENTS", data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setComments(data.data.comments)
      }
      catch (error) {
         console.log(error.message)
      }
   }

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

         setCommentInfo(data.data)
         setStatus('')

         e.target.elements.comment.value = '';
      } catch ({ message }) {
         setStatus(message)
      }
   }

   React.useEffect(() => {
      setCommentInfo({})
      getComments(id)

      setStatus('')

   }, [id])

   return (
      <div className='flex flex-col gap-10 my-10'>
         <form onSubmit={handleComment} className="flex gap-3">
            <input className='input' name='comment' type='text' placeholder='Leave us a comment' />
            <button className='px-4 py-2 bg-primary-light text-white rounded font-semibold'>Comment</button>
         </form>

         <div className='flex flex-col gap-8'>
            {commentInfo?.comment && (
               <div className='grid grid-cols-[min-content,1fr] gap-2 gap-x-4 tracking-tight'>
                  <figure className='row-span-2 h-12 w-12'>
                     <img src='/PROFILE.png' alt='' className='h-12 w-12' />
                  </figure>
                  <h4 className='text-xl'>{commentInfo.user}</h4>
                  <p className='text-lg text-gray-500'>{commentInfo.comment.comment}</p>
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