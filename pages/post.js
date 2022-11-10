import Head from 'next/head';
import React from 'react'
import { useRouter } from 'next/router';
import Navbar from 'widgets/Navbar';

const post = () => {
   const [createImageURL, setCreateImageURL] = React.useState(null);
   const [image, setImage] = React.useState('');
   /* const [blog, setBlog] = React.useState(null)
   const router = useRouter()
   */

   const uploadToClient = (e) => {
      const [file] = e.target.files;

      if (file) {
         setImage(file);
         setCreateImageURL(URL.createObjectURL(file));
      }
   }

   /* -------
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }
   */

   const handlePost = async (e) => {
      e.preventDefault()

      /**
       * 
      const { title, blog } = e.target.elements

      const form = new FormData()

      form.append('title', title.value)
      form.append('blog', blog.value)

      /* Commented
      form.append('image', e.target.elements.image.files[0])

      form.append('image', image)

      const response = await fetch('/api/blogs', {
         method: 'POST',
         body: form
      })

      const { status, ...data } = await response.json()
      console.log(data)

      if (status === 'error' || status === 'fail') {
         throw data
      }

      /* Commented
      setBlog(data.data.blog)

      router.push(`/blogs/${data.data.blog.slug}`)
      */
   }

   return (
      <div className='page md:px-10'>
         <Head>
            <title>Write a blog post</title>
         </Head>

         <div className='p-5 xs:p-6 md:py-8 md:px-2'>
            <Navbar />
         </div>

         <h2 className='font-kumbh-sans text-[1.8rem] xs:text-4xl uppercase text-primary-light p-5 xs:p-8 md:py-8 md:px-2'>Write a blog post</h2>

         <form className='section gap-8' onSubmit={handlePost}>
            <label htmlFor='image' className='col-span-1 md:col-span-5 aspect-[40/28] overflow-hidden cursor-pointer relative flex justify-center border-2 border-primary-light'>
               <img src={createImageURL ? createImageURL : '/THUMBNAIL.png'} alt='blog thumbnail' className='h-full w-full object-cover' />

               <input className='hidden' type='file' accept='image/*' id='image' name='image' placeholder='Text' onChange={uploadToClient} />
            </label>

            <div className='grid grid-cols-2 self-start col-span-1 md:col-span-7 gap-5'>
               <input className='font-kumbh-sans col-span-2 input p-5 text-gray-700 tracking-tight w-full text-3xl' type='text' name='title' placeholder='Title' />

               <div className='text-gray-800'>
                  <label className='text-[15px]'>Author name</label>
                  <input className='input tracking-tight w-full opacity-[0.8]' value='Tanvir rahman' readOnly disabled />
               </div>
               <div className='text-gray-800'>
                  <label className='text-[15px]'>Current role</label>
                  <input className='input tracking-tight w-full opacity-[0.8]' value='Author' readOnly disabled />
               </div>

               <p className='hidden lg:block col-span-2 tracking-tight text-gray-500'>*** We will review and manually approve your first blog and make you an author. This may take some time to publish your first blog. Once you are approved as an author you won't need approval. ***</p>
            </div>

            <textarea className='input text-gray-700 tracking-tight w-full h-[35rem] col-span-1 md:col-span-12' type='text' name='blog' placeholder='Blog content' />

            <div className='col-span-1 md:col-span-3'>
               <button disabled className='self-start tracking-tight px-4 py-2 bg-primary-light text-white rounded font-semibold disabled:opacity-[0.8]'>Post</button>
            </div>
         </form>

         <p className='p-5 xs:p-8 md:px-2 mb-12 uppercase texl-lg md:text-3xl text-primary-dark tracking-tighter'>Posting is disabled due to some hosting issue of vercel</p>
      </div>
   )
}

export default post