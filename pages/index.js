import React from 'react'
import Head from 'next/head'
import Popular from 'sections/Popular'
import Header from 'sections/Header'
import Author from 'sections/Author'
import Testimonials from 'sections/Testimonials'
import Signup from 'sections/Signup'
import Footer from 'sections/Footer'

const Home = () => {
   const [nav, setNav] = React.useState(false)
   const [loginError, setLoginError] = React.useState('')

   const toggleNav = () => {
      setNav(!nav)
   }

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

   return (
      <div className="w-full page">
         <Head>
            <title>Blog application home page</title>
         </Head>

         <Header />
         <Popular />
         <Author />

         <Testimonials />
         <Signup />

         <Footer />
      </div>
   )
}

export default Home