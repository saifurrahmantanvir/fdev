import { Schema, models, model } from 'mongoose'

const blogSchema = new Schema({
   title: {
      type: String,
      required: [true, 'Blog title cann\'t be empty'],
      trim: true
   },
   slug: String,
   author: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'Blog must belong to an author']
   },
   published: {
      type: Boolean,
      default: true
   },
   image: {
      type: String,
      default: '/POST.jpg',
      required: [true, 'A post must have an image']
   },
   featured: {
      type: Boolean,
      default: false
   },
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

blogSchema.pre(/^find/, function (next) {
   /* this.find({ published: { $ne: false } }) */
   this.populate({
      path: 'author',
      select: 'name role'
   })

   next()
})

/* ------
blogSchema.virtual('comments', {
   ref: 'Comment',
   foreignField: 'blog',
   localField: '_id'
})

blogSchema.pre('save', function (next) {
   this.slug = slugify(this.title, { lower: true })

   next()
})
------- */

export default models.Blog || model('Blog', blogSchema)