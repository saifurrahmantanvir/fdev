import jwt from "jsonwebtoken"
import { promisify } from 'util'
import dbConnect from "lib/dbConnect";
import User from 'models/user';
import AppError from "lib/appError";
import apiErrorHandler from "lib/apiErrorHandler";

export default function (handler) {
   return async function (req, res) {
      let token;

      await dbConnect()

      try {
         if (req.cookies?.jwt) {
            token = req.cookies.jwt
         }

         if (!token) {
            throw new AppError('You are not logged in! please log in to get access', 401)
         }

         const decoded = await promisify(jwt.verify)(token,
            process.env.JWT_SECRET)

         const currentUser = await User.findById(decoded.id)
         if (!currentUser) {
            throw new AppError('The user belonging to this token does no longer exist', 401)
         }

         req.user = currentUser;
         return handler(req, res) /* DON'T FORGET THIS RETURN KEYWORD */
      }
      catch (error) {
         apiErrorHandler(error, res)
      }
   }
}