import dbConnect from "lib/dbConnect";
import apiErrorHandler from "lib/apiErrorHandler";
import User from "models/user";
import protect from "middlewares/protect";

export default protect(async function (req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         try {
            const users = await User.find()

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

      default:
         res.setHeader('Allow', ['GET'])
         res.status(400).json({ status: 'error', message: '400, method doesn\'t exists on this server!' })
         break;
   }
})