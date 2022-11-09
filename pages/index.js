import React from 'react'
import Head from 'next/head'
import Popular from 'sections/Popular'
import Header from 'sections/Header'
import Author from 'sections/Author'
import Testimonials from 'sections/Testimonials'
import Signup from 'sections/Signup'
import Footer from 'sections/Footer'
import dbConnect from 'lib/dbConnect'
import Blog from 'models/blog'

const Home = ({ fBlogs }) => {
   const [nav, setNav] = React.useState(false)
   const [loginError, setLoginError] = React.useState('')

   const toggleNav = () => {
      setNav(!nav)
   }

   /*
   const getCookie = async () => {
      try {
         const response = await fetch('/api/users')
         const { status, ...data } = await response.json()

         console.log(status, data)
         if (status === 'error' || status === 'fail') {
            throw data
         }
      } catch ({ message }) {
         setLoginError(message)
      }
   }
   */

   return (
      <div className="w-full page">
         <Head>
            <title>Blog application home page</title>
         </Head>

         <Header />
         <Popular fBlogs={fBlogs} />
         <Author />

         <Testimonials />
         <Signup />

         <Footer />
      </div>
   )
}


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

export default Home