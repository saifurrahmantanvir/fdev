import React from 'react'
import Head from 'next/head'
import dbConnect from 'lib/dbConnect'
import User from 'models/user'

const users = ({ users }) => {
   /*
   const [users, setUsers] = React.useState([])

   const getUsers = async () => {
      const response = await fetch('/api/users', { method: 'GET' })
      const data = await response.json()
      console.log(data)

      setUsers(data.data.users)
   }

   React.useEffect(() => {
      getUsers()

   }, [])
   */

   return (
      <div className='users'>
         <Head>
            <title>See all users here</title>
         </Head>

         {users.map((user) => (
            <h3 key={user._id}>{user.name}</h3>
         ))}
      </div>
   )
}

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

export default users