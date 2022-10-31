import { Schema, models, model } from 'mongoose'

const commentSchema = new Schema({
   comment: {
      type: String,
      required: [true, 'Comment cann\'t be empty'],
      trim: true
   },
   blog: {
      type: Schema.ObjectId,
      ref: 'Post',
      required: [true, 'Comment must belong to a post']
   },
   user: {
      type: Schema.ObjectId,
      ref: 'User',
      required: [true, 'Comment must belong to a user']
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

commentSchema.pre(/^find/, function (next) {
   this.populate({
      path: 'user',
      select: 'name'
   })

   next()
})

export default models.Comment || model('Comment', commentSchema)