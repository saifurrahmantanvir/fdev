import React from 'react'
import Head from 'next/head';
import CommonCard from 'widgets/CommonCard';
import Blog from 'models/blog';
import dbConnect from 'lib/dbConnect';

const blogs = ({ blogs, fBlogs }) => {
   console.log(blogs)

   return (
      <section className='section page'>
         <Head>
            <title>All blogs collection of fdev</title>
         </Head>

         <div className='wrapper'>
            <h2 className='heading'>Popular blogs</h2>
         </div>

         <div className='wrapper blogs mb-16'>
            {fBlogs.map((blog) => (<CommonCard key={blog.slug} blog={blog} />))}
         </div>


         <div className='wrapper'>
            <h2 className='heading'>All blogs</h2>
         </div>

         <div className='wrapper blogs'>
            {blogs.map((blog) => (<CommonCard key={blog.slug} blog={blog} />))}
         </div>
      </section>
   )
}

export async function getServerSideProps() {
   await dbConnect()

   const query = await Blog.find()

   const blogs = query.map((doc) => {
      const blog = doc.toObject()
      blog._id = blog._id.toString()

      return blog
   })

   const fBlogs = blogs.filter((blog) => blog.featured === true)

   return { props: { blogs, fBlogs } }
}

export default blogs