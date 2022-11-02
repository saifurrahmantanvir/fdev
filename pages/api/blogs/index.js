/* import nextConnect from "next-connect"; */
import path from 'path'
import sharp from 'sharp';
import formidable from "formidable";
import slugify from 'slugify';
import dbConnect from "lib/dbConnect";
import Blog from "models/blog";
import apiErrorHandler from "lib/apiErrorHandler";
/* import { resizeImage, uploadImage } from "middlewares/uploadImage"; */


const readFile = (req, saveLocally) => {
   const options = {}

   /* ----------
   if (saveLocally) {
      options.uploadDir = path.join(process.cwd(), '/public/blog')
      options.filename = (name, ext, part, form) => {
         return slugify(`${name}.jpeg`, { lower: true })
      }
   }
   -- */

   const form = formidable(options)

   return new Promise((resolve, reject) => {
      form.parse(req, async (err, fields, files) => {
         if (err) reject(err)

         const slug = slugify(`${fields.title}-${Date.now()}`, { lower: true })

         await sharp(files.image.filepath)
            .raw().ensureAlpha()
            .resize(600, 405)
            .toFormat('jpeg')
            .jpeg({ quality: 100 })
            .toFile(path.join(process.cwd(), `public/blog/${slug}.jpeg`))

         resolve({ fields, files, slug })
      })

   })


}

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const blogs = await Blog.find()

            res.status(200).json({
               status: 'success',
               results: blogs.length,
               data: {
                  blogs
               }
            })
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      case 'POST':
         try {
            const { fields: { title, blog }, slug } = await readFile(req, true)

            const newBlog = await Blog.create({
               title,
               slug,
               text: blog,
               image: `/blog/${slug}.jpeg`
            })

            res.status(201).json({
               status: 'success',
               data: {
                  blog: newBlog
               }
            })
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      default:
         res.setHeader('Allow', ['GET', 'POST'])
         res.status(400).json({
            status: 'error',
            message: '400, method doesn\'t exists on this ROUTE!'
         })
         break;
   }
}

export const config = {
   api: { bodyParser: false }
}
