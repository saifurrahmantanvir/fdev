import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Register = () => {
   const [user, setUser] = React.useState({})
   const [signupError, setSignupError] = React.useState('')

   const handleSignUp = async (e) => {
      e.preventDefault()

      const { name: { value: name }, email: { value: email }, password: { value: password }, passwordConfirm: { value: passwordConfirm } } = e.target.elements

      try {
         const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, passwordConfirm }),
            withCredentials: true,
            credentials: 'include'
         })

         const { status, ...data } = await response.json()

         if (status === 'error') {
            // throw new Error('Please check your internet connection')
            throw data
         }
         else if (status === 'fail') {
            throw data
         }

         const { data: { user }, token } = data
         setUser(user)
         console.log(user, token)
      } catch ({ message }) {
         setSignupError(message)
      }
   }

   return (
      <div className='flex items-center justify-center md:p-12 h-full'>
         <Head>
            <title>Sign up and get started now</title>
         </Head>

         <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] bg-white max-w-screen-lg mx-auto md:shadow-xl'>
            <div className='flex flex-col gap-12 px-12 py-12 md:px-24 md:py-16'>
               <form className='flex flex-col gap-8' onSubmit={handleSignUp}>
                  <span className='!leading-snug text-justify text-3xl mb-8 md:mb-0 tracking-tighter'>Sign up and stay connected with friends and family</span>
                  <input className='input' type='text' name='name' placeholder='Full name' defaultValue='Tanvir rahman' />
                  <input className='input' type='email' name='email' placeholder='Email' defaultValue='hello@tanvir.io' />
                  <input className='input' type='password' name='password' placeholder='Password' defaultValue='tanvirropi' />
                  <input className='input' type='password' name='passwordConfirm' placeholder='Confirm password' defaultValue='tanvirropi' />
                  {/* <input type='file' name='avatar' className='hidden' id='avatar' />
                  <label htmlFor='avatar' className='flex items-center gap-4 mb-12 md:mb-4 hover:cursor-pointer'>
                     <img src='/AVATAR.png' alt='file-icon' className='h-12 w-12' />
                     <span className='font-semibold text-purple-dark tracking-tight'>Add an avatar</span>
                  </label> */}

                  <button className='self-start tracking-tight px-4 py-2 bg-primary-light text-white rounded font-semibold'>Sign up</button>
                  {signupError && <span>{signupError}</span>}
               </form>

               <span className='tracking-tight'>Already have an account? <Link href='/login'><a className='text-primary-light font-semibold underline'>login</a></Link></span>
            </div>

            <div className='relative bg-primary-light p-16 overflow-hidden hidden lg:inline-block'>
               <span className='text-gray-100 text-[4rem] leading-tight font-bold tracking-tighter'>
                  Welcome to <span className='font-alata font-medium'>$</span> f.dev family
               </span>
               <span className='font-kumbh-sans absolute left-4 bottom-3 text-[8rem] text-primary-dark font-extrabold tracking-tighter'>
                  <span className='font-alata font-medium'>$</span> f.dev</span>
            </div>
         </div>
      </div>
   )
}

export default Register