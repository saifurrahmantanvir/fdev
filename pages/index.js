import React from 'react'
import Head from 'next/head'
import Popular from 'sections/Popular'
import Header from 'sections/Header'
import Author from 'sections/Author'
import Testimonials from 'sections/Testimonials'
import Signup from 'sections/Signup'
import Footer from 'sections/Footer'
import useSWR from 'swr'
/* import dbConnect from 'lib/dbConnect'
import Blog from 'models/blog' */

const fetcher = async (url) => {
   const res = await fetch(url, { method: 'GET' })
   const data = await res.json()

   return data
}

const Home = () => {
   const { data, error } = useSWR('/api/blogs', fetcher)

   return (
      <div className="w-full page">
         <Head>
            <title>Blog application home page</title>
         </Head>

         <Header />
         {
            data && (
               <Popular fBlogs={data.data.blogs} />
            )
         }
         <Author />

         <Testimonials />
         <Signup />

         <Footer />

      </div>

   )
}

/* --------
export async function getStaticProps() {
   await dbConnect()

   const query = await Blog.find({ featured: true })

   const fBlogs = query.map((doc) => {
      const blog = doc.toObject()
      blog._id = blog._id.toString()
      blog.author._id = blog.author._id.toString()

      return blog
   }).slice(0, 5)

   return { props: { fBlogs } }
}
-------- */

export default Home