import dbConnect from "lib/dbConnect";
import apiErrorHandler from "lib/apiErrorHandler";
import Comment from "models/comment";
import protect from "middlewares/protect";

export default protect(async function (req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const users = await Comment.find()

            res.status(200).json({
               status: 'success',
               results: users.length,
               data: {
                  users
               }
            })
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      case 'POST':
         try {
            const { blog, comment } = JSON.parse(req.body)

            const newComment = await Comment.create({
               comment,
               blog,
               user: req.user._id
            })

            res.status(201).json({
               status: 'success',
               data: {
                  comment: newComment,
                  user: req.user.name
               }
            })
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      default:
         res.setHeader('Allow', ['GET'])
         res.status(400).json({ status: 'error', message: '400, method doesn\'t exists on this server!' })
         break;
   }
})