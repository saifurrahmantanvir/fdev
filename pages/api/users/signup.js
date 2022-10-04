import dbConnect from "lib/dbConnect";
import User from "models/user";
import createSendToken from "lib/createSendToken";
import apiErrorHandler from "lib/apiErrorHandler";

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'POST':
         try {
            const { name, email, password, passwordConfirm } = req.body;

            const user = await User.create({
               name, email, password, passwordConfirm
            })

            return createSendToken(user, 201, res)
         }
         catch (error) {
            apiErrorHandler(error, res)
         }
         break;

      default:
         res.setHeader('Allow', ['POST'])
         res.status(400).json({
            status: 'error',
            message: '400, method doesn\'t exists on this ROUTE!'
         })
         break;
   }
}