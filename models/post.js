import { Schema, models, model } from 'mongoose'

const postSchema = new Schema({
   title: {
      type: String,
      required: [true, 'Post title cann\'t be empty'],
      trim: true
   },
   slug: String,
   text: {
      type: String,
      required: [true, 'Blog cann\'t be empty'],
      trim: true
   },
   createdAt: {
      type: Date,
      default: Date.now(),
      select: false
   }
}, {
   toJSON: { virtuals: true },
   toObject: { virtuals: true }
})

postSchema.virtual('comments', {
   ref: 'Comment',
   foreignField: 'post',
   localField: '_id'
})

postSchema.pre('save', function (next) {
   this.slug = slugify(this.title, { lower: true })

   next()
})

export default models.Post || model('Post', postSchema)