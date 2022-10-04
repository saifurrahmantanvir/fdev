import dbConnect from "lib/dbConnect";
import User from "models/user";
import createSendToken from "lib/createSendToken";
import AppError from "lib/appError";
import apiErrorHandler from "lib/apiErrorHandler";

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'POST':
         try {
            const { email, password } = req.body;

            if (!email || !password) {
               throw new AppError('Please provide email and password', 400)
            }

            const user = await User.findOne({ email }).select('+password -__v')

            if (!user || !(await user.correctPassword(password,
               user.password))) {
               throw new AppError('Incorrect email or password', 401)
            }

            return createSendToken(user, 200, res)
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