import AppError from "./appError"

const handleCastErrorDB = (error) => {
   const message = `Invalid ${error.path}: ${error.value}`

   return new AppError(message, 400)
}

const handleDuplicateFieldsDB = (error) => {
   const values = Object.values(error.keyValue);
   const message = `Duplicate field value ${values.join(' ')}. Use another value!`

   return new AppError(message, 400)
}

const handleValidationErrorDB = (error) => {
   const errors = Object.values(error.errors).map(err => err.message)

   const message = `Invalid input data - ${errors.join('. ')}`
   return new AppError(message, 400)
}

const handleJWTError = () => {
   return new AppError('Invalid token. Please log in again!', 401)
}

const handleJWTExpiredError = () => {
   return new AppError('Your token has expired! Please log in again', 401)
}


const sendErrorDev = (error, res) => {
   const { status, statusCode, message, stack } = error;

   return res.status(statusCode).json({
      status,
      error,
      message,
      stack
   })
}

const sendErrorProd = (error, res) => {
   const { status, statusCode, message, isOperational } = error;

   if (isOperational) {
      return res.status(statusCode).json({ status, message })
   }

   return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!'
   })

}


export default function apiErrorHandler(err, res) {
   err.statusCode = err.statusCode || 500;
   err.status = err.status || 'error';

   if (process.env.NODE_ENV === 'development') {
      sendErrorDev(err, res)

   } else if (process.env.NODE_ENV === 'production') {
      let error = { ...err }
      error.message = err.message

      if (err.kind === 'ObjectId') {
         error = handleCastErrorDB(error)
      }

      if (error.code === 11000) {
         error = handleDuplicateFieldsDB(error)
      }

      if (error._message?.includes('validation failed')) {
         error = handleValidationErrorDB(error)
      }

      if (err.name === 'JsonWebTokenError') {
         error = handleJWTError()
      }

      if (err.name === 'TokenExpiredError') {
         error === handleJWTExpiredError()
      }

      sendErrorProd(error, res)
   }
}