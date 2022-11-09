/* import nextConnect from "next-connect"; */
import jwt from "jsonwebtoken"
import { promisify } from 'util'
import path from 'path'
import sharp from 'sharp';
import formidable from "formidable";
import slugify from 'slugify';
import dbConnect from "lib/dbConnect";
import User from 'models/user';
import Blog from "models/blog";
import AppError from "lib/appError";
import apiErrorHandler from "lib/apiErrorHandler";
import restrictTo from "middlewares/restrictTo";
import protect from "middlewares/protect";
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
            /* .toFile(path.join(process.cwd(), `public/blog/${slug}.jpeg`)) */
            .toFile(`./public/blog/${slug}.jpeg`)

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
         let token;

         try {
            if (req.cookies?.jwt) {
               token = req.cookies.jwt
            }

            if (!token) {
               throw new AppError('You are not logged in! please log in to post blog', 401)
            }

            const decoded = await promisify(jwt.verify)(token,
               process.env.JWT_SECRET)

            const user = await User.findById(decoded.id)

            if (!user) {
               throw new AppError('The user belonging to this token does no longer exist', 401)
            }

            const { fields: { title, blog }, slug } = await readFile(req, true)

            const newBlog = await Blog.create({
               title,
               slug,
               text: blog,
               image: `/blog/${slug}.jpeg`,
               author: decoded.id,
               published: user.role === 'user' ? false : true
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
