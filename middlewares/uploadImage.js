import multer from 'multer'
import sharp from 'sharp'
import slugify from 'slugify'

import AppError from 'lib/appError'

const multerStorage = multer.memoryStorage()

const multerFilter = (req, file, cb) => {
   if (file.mimetype.startsWith('image')) {
      cb(null, true)

   } else {
      cb(new AppError('Not an image! Please upload only image', 400), false)

   }
}

const upload = multer({
   storage: multerStorage,
   fileFilter: multerFilter
})

export const uploadImage = upload.single('image')


export const resizeImage = async (req, res) => {
   if (!req.file) return;

   const slug = slugify(`${req.body.title}`, { lower: true })

   req.file.filename = `${slug}.jpeg`

   await sharp(req.file.buffer)
      .resize(600, 600)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toFile(`public/blog/${req.file.filename}`)

}


/* NOT USING THIS ONE */