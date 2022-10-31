import React from 'react'

const post = () => {
   const [formData, setFormData] = React.useState({ title: '', blog: '' })
   const [image, setImage] = React.useState('');
   const [createImageURL, setCreateImageURL] = React.useState(null);
   const [blog, setBlog] = React.useState(null)
   const uploadToClient = (e) => {
      const [file] = e.target.files;

      if (file) {
         setImage(file);
         setCreateImageURL(URL.createObjectURL(file));
      }
   }

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      })
   }

   const handlePost = async (e) => {
      e.preventDefault()

      const form = new FormData()

      Object.entries(formData).forEach(([key, value]) => {
         form.append(key, value)
      })

      /* form.append('image', e.target.elements.image.files[0]) */
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

      setBlog(data.data.blog)
   }

   return (
      <div>
         <form className='flex flex-col gap-8' onSubmit={handlePost}>
            <input className='input' type='text' name='title' placeholder='Title' defaultValue='A better way of running multiple promises' onChange={handleChange} />
            <input className='input' type='text' name='blog' placeholder='Blog text' onChange={handleChange} defaultValue='Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
         <br /><br />In publishing and graphic design, Loreplaceholder text commonly used to demonstratform of a document or a typeface withoumeaningful content. Lorem ipsum may placeholder before final copy is available.Iand graphic design, Lorem ipsum is a placcommonly used to demonstrate the visual form oor a typeface without relying on meaningful coipsum may be used as a placeholder before favailable.In publishing and graphic design, Loa placeholder text commonly used to demonstratform of a document or a typeface withoumeaningful.' />
            <img src={createImageURL} alt='blog thumbnail' />
            <input className='input mb-6' type='file' accept='image/*' name='image' placeholder='Text' onChange={uploadToClient} />

            <button className='self-start tracking-tight px-4 py-2 bg-primary-light text-white rounded font-semibold'>Post</button>
         </form>

         {blog && <div>
            <img src={blog.image} alt="title" />
            <h2>{blog.title}</h2>
            <p>{blog.text}</p>
         </div>}

      </div>
   )
}

export default post