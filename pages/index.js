import React from 'react'
import Head from 'next/head'
import useSWR from 'swr'
import Navbar from 'widgets/Navbar'
import Popular from 'sections/Popular'
import Link from 'next/link'
import Header from 'sections/Header'

const fetcher = async (url) => {
   const res = await fetch(url, { method: 'POST' })
   const data = await res.json()

   return data
}

const Home = () => {
   const [user, setUser] = React.useState({})
   const [nav, setNav] = React.useState(false)

   const toggleNav = () => {
      setNav(!nav)
   }

   const createUser = async () => {
      const response = await fetch('/api/users', {
         method: 'POST'
      })
      const data = await response.json()
      console.log(data)

      setUser(data.data.user)
   }

   return (
      <div className="w-full">
         <Head>
            <title>Blog application home page</title>
         </Head>

         <Header />
         <Popular />
      </div>
   )
}

export default Home