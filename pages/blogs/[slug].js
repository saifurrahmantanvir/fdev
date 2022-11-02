import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Comments from 'widgets/Comments'
import Navbar from 'widgets/Navbar'
import CommonCard from 'widgets/CommonCard'

const blog = () => {
   const router = useRouter()
   const { slug } = router.query
   console.log(slug)
   const [blog, setBlog] = React.useState()
   const [blogs, setBlogs] = React.useState([])
   const [error, setError] = React.useState('')

   const getBlogs = async () => {
      try {
         const response = await fetch('/api/blogs')

         const { status, ...data } = await response.json()
         console.log(data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setBlogs(data.data.blogs)
      }
      catch (error) {
         setError(error.message)
      }
   }


   const getBlog = async (slug) => {
      try {
         const response = await fetch(`/api/blogs/${slug}`)

         const { status, ...data } = await response.json()
         console.log(data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setBlog(data.data.blog)
      }
      catch (error) {
         setError(error.message)
      }
   }

   React.useEffect(() => {
      slug && getBlog(slug)
      getBlogs()

   }, [slug])

   return (
      <section className='grid grid-cols-1 md:grid-cols-12 p-5 xs:p-8 md:py-10 md:px-2 md:gap-y-10 page'>
         <Head>
            <title>Full Post detail</title>
         </Head>

         <Navbar />

         <div className='col-span-1 md:col-start-2 md:col-span-6 px-4 py-8 md:py-0'>
            <div className='flex flex-col gap-10 xs:gap-16'>
               <figure className='relative inline-block shadow-lg rounded-xl bg-transparent before'>
                  <img src={blog ? blog.image : '/NOT-FOUND.png'} className='w-full pointer-events-none rounded-md' alt='post image' />
               </figure>

               <div className='flex flex-col gap-2 md:gap-4'>
                  <div className='flex justify-between text-primary-light'>
                     <span className='text-xl'>{'Saifur rahman'.split(' ')[0]}</span>
                     <span className='font-cabin text-sm'>08 - 08 - 2020</span>
                  </div>

                  <h3 className='font-kumbh-sans text-xl lg:text-2xl text-gray-800 tracking-tight'>{blog && blog.title}</h3>

                  <p className='text-gray-500 text-md lg:text-lg !leading-8 block tracking-tight'>
                     {blog && blog.text.split('\n').map((section, i) => (
                        <span key={i}>{section}<br /></span>
                     ))
                     }
                  </p>
               </div>
            </div>

            {blog && (<Comments comments={blog.comments} id={blog._id}
               slug={slug} />
            )}
         </div>

         <div className='col-span-1 md:col-start-9 md:col-span-3'>
            <div className='blogs sticky top-8 md:grid-cols-1 md:gap-8'>
               {blogs.map((blog) => (
                  <CommonCard key={blog.slug} blog={blog} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default blog