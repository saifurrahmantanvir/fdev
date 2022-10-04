import AppError from "lib/appError"
import apiErrorHandler from "lib/apiErrorHandler"

export default restrictTo = function (handler, ...roles) {
   return function (req, res) {
      try {
         if (!roles.includes(req.user.role)) {
            throw new AppError('You do not have permission to perform this action', 401)
         }

         return handler(req, res)
      }
      catch (error) {
         apiErrorHandler(error, res)
      }
   }
}