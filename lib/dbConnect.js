import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL.replace('<password>', process.env.MONGODB_PASSWORD)

if (!MONGODB_URL) {
   throw new Error('Define the MONGODB_URL env variable inside .env file')
}

let cached = global.mongoose

if (!cached) {
   cached = global.mongoose = { connection: null, promise: null }
}

async function dbConnect() {
   if (cached.connection) {
      return cached.connection
   }

   if (!cached.promise) {
      const opts = {
         bufferCommands: false,
         useNewUrlParser: true
      }

      cached.promise = mongoose.connect(MONGODB_URL, opts)
         .then((mongoose) => {
            console.log('DB connection successfull')
            return mongoose
         })
   }

   try {
      cached.connection = await cached.promise
   } catch (e) {
      cached.promise = null
      throw e
   }

   return cached.connection
}

export default dbConnect