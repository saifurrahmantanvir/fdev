/* import { verify } from "jsonwebtoken"; */
import { NextResponse as res } from "next/server";

const secret = process.env.JWT_SECRET;

export default async function middleware(req) {
   const jwt = req.cookies?.get('jwt')
   console.log(jwt)

   const url = req.url

   if (url.includes('/login')) {
      const homeUrl = new URL('/', url)

      if (jwt) {
         return res.redirect(homeUrl)
      }
   }

   if (url.includes('/users')) {
      const loginUrl = new URL('/login', url)
      loginUrl.searchParams.set('from', req.nextUrl.pathname)

      if (!jwt) {
         return res.redirect(loginUrl)
      }

      /*
      try {
         verify(token, process.env.JWT_SECRET)

         return res.next()
      } catch (error) {
         res.redirect('/login')
      }
      */
   }

   return res.next()
}

export const config = {
   matcher: ['/users/:path*', '/login']
}