import apiErrorHandler from "lib/apiErrorHandler"

export default function catchAsync(handler) {
   return (req, res) => {
      handler(req, res).catch((error) => {
         apiErrorHandler(error, res)

      })

   }
}

/* NOT USING THIS MIDDLEWARE */