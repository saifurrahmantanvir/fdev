import dbConnect from "lib/dbConnect";
import apiErrorHandler from "lib/apiErrorHandler";
import Blog from "models/blog";
import User from "models/user";
import protect from "middlewares/protect";
import restrictTo from "middlewares/restrictTo";

export default protect(restrictTo(async function (req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const blogs = await Blog.find({ published: { $ne: true } })

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

      case 'PATCH':
         try {
            const blog = await Blog.findByIdAndUpdate(req.body.blog, { published: true }, {
               new: true,
               runValidators: true
            })

            if (blog.author.role === 'user') {
               await User.findByIdAndUpdate(blog.author._id, { role: 'author' }, {
                  new: true,
                  runValidators: true
               })
            }

            res.status(200).json({
               status: 'success',
               data: {
                  blog
               }
            })
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      default:
         res.setHeader('Allow', ['GET', 'PATCH'])
         res.status(400).json({ status: 'error', message: '400, method doesn\'t exists on this server!' })
         break;
   }
}, 'admin'))