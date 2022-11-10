import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Comments from 'widgets/Comments'
import Navbar from 'widgets/Navbar'
import CommonCard from 'widgets/CommonCard'
import BlogDetails from 'widgets/BlogDetails'

const blog = () => {
   const [blog, setBlog] = React.useState()
   const [blogs, setBlogs] = React.useState([])
   const [error, setError] = React.useState('')

   const router = useRouter()
   const { slug } = router.query

   const getBlogs = async () => {
      try {
         const response = await fetch('/api/blogs')

         const { status, ...data } = await response.json()
         console.log("ALL BLOGS", data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setBlogs(data.data.blogs.slice(0, 3))
      }
      catch (error) {
         setError(error.message)
      }
   }


   const getBlog = async (slug) => {
      try {
         const response = await fetch(`/api/blogs/${slug}`)

         const { status, ...data } = await response.json()
         console.log("SINGLE BLOG", data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setBlog(data.data.blog)
         setError('')
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

         <div className='col-span-1 md:col-start-2 md:col-span-6 px-4 py-8 md:py-0 mb-10'>
            <BlogDetails blog={blog} />
            {blog && (<Comments id={blog._id} />)}

            {error && <span className='text-2xl md:text-3xl text-primary-dark tracking-tighter'>{error}</span>}
         </div>

         <div className='col-span-1 md:col-start-9 md:col-span-3'>
            <h2 className='heading md:hidden'>Related blogs</h2>

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