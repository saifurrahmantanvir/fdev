import React from 'react'
import Head from 'next/head'
/* import dbConnect from 'lib/dbConnect'
import User from 'models/user' */

const users = () => {
   const [users, setUsers] = React.useState([])
   const [blogs, setBlogs] = React.useState([])
   const [error, setError] = React.useState('')
   console.log(blogs)

   const getUsers = async () => {
      try {
         const response = await fetch('/api/users')

         const { status, ...data } = await response.json()
         console.log(data)

         if (status === 'error' || status === 'fail') {
            throw data
         }

         setUsers(data.data.users)
      }
      catch (error) {
         setError(error.message)
      }
   }

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

   React.useEffect(() => {
      getUsers()
      getBlogs()

   }, [])

   return (
      <div className='users'>
         <Head>
            <title>See all users here</title>
         </Head>

         {users.map((user) => (
            <h3 key={user._id}>{user.name}</h3>
         ))}
         {blogs.map((blog) => (
            <img key={blog._id} src={blog.image} alt="blog thumbnail" />
         ))}
         {error && <span>{error}</span>}
      </div>
   )
}

/*
export async function getServerSideProps() {
   await dbConnect()

   const query = await User.find()

   const users = query.map((doc) => {
      const user = doc.toObject()
      user._id = user._id.toString()

      return user
   })

   return { props: { users } }
}
*/

export default users