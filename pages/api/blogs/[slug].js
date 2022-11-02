import Blog from "models/blog"
import dbConnect from "lib/dbConnect"
import apiErrorHandler from "lib/apiErrorHandler"

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const { slug } = req.query;
            const blog = await Blog.findOne({ slug }).populate('comments')

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
         res.setHeader('Allow', ['GET'])
         res.status(400).json({
            status: 'error',
            message: '400, method doesn\'t exists on this ROUTE!'
         })
         break;
   }
}
