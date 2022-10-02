import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Login = () => {
   const [loginError, setLoginError] = React.useState('')

   const handleLogin = async (e) => {
      e.preventDefault()

      const { email: { value: email }, password: { value: password } } = e.target.elements

      try {
      } catch ({ message }) {
         setLoginError(message)
      }
   }

   return (
      <div className='flex items-center justify-center h-full md:p-12'>
         <Head>
            <title>Login and start reading now</title>
         </Head>

         <div className='grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] bg-white max-w-screen-lg mx-auto md:shadow-xl min-h-full'>
            <div className='flex flex-col gap-12 px-12 py-12 md:px-24 md:py-16'>
               <form className='flex flex-col gap-8' onSubmit={handleLogin}>
                  <span className='!leading-snug text-justify text-3xl mb-4 md:mb-0 tracking-tighter'>Login and continue your chat with friends and family</span>
                  <input className='input' type='email' name='email' placeholder='Email' />
                  <input className='input mb-6' type='password' name='password' placeholder='Password' />
                  {/* <button className='self-start px-8 py-4 md:px-10 md:py-5 text-3xl tracking-tighter bg-purple-light text-white rounded-2xl'>Login</button> */}

                  <button className='self-start tracking-tight px-4 py-2 bg-primary-light text-white rounded font-semibold'>Login</button>
                  {loginError && <span>{loginError}</span>}
               </form>

               <span>Don't have an account? <Link href='/signup'>
                  <a className='text-primary-dark font-semibold underline'>register</a></Link></span>
            </div>

            <div className='relative bg-primary-light p-16 overflow-hidden hidden lg:inline-block'>
               <span className='text-gray-100 text-[3.5rem] leading-tight font-bold tracking-tighter'>
                  Welcome to <span className='font-alata font-medium'>$</span> f.dev family
               </span>
               <span className='font-kumbh-sans absolute left-4 bottom-3 text-[8rem] text-gray-100 font-extrabold tracking-tighter'>
                  <span className='font-alata font-medium'>$</span> f.dev</span>
            </div>
         </div>
      </div>
   )
}

export default Login