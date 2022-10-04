import jwt from "jsonwebtoken"
import cookie from "cookie"

const signToken = (id, isAdmin) => {
   return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
   })
}

const createSendToken = (user, statusCode, res) => {
   const token = signToken(user._id, user.isAdmin)

   res.setHeader('Set-Cookie', cookie.serialize('jwt', token, {
      httpOnly: true,
      path: "/",
      maxAge: process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60,
      sameSite: 'strict',
      secure: process.env.NODE_ENV !== 'development',
   }))

   user.password = undefined;

   res.status(statusCode).json({
      status: 'success',
      token,
      data: {
         user
      }
   })
}

export default createSendToken