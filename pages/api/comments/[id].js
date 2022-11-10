import Comment from "models/comment"
import dbConnect from "lib/dbConnect"
import apiErrorHandler from "lib/apiErrorHandler"

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const { id } = req.query;
            const comments = await Comment.find({ blog: id })

            res.status(200).json({
               status: 'success',
               results: comments.length,
               data: {
                  comments
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
