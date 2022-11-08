import { Schema, models, model } from 'mongoose';
import { isEmail } from 'validator';
import { hash, compare } from 'bcryptjs';

const userSchema = new Schema({
   name: {
      type: String,
      required: [true, 'Please provide your name!']
   },
   email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please provide a valid email']
   },
   password: {
      type: String,
      required: [true, 'Please provide a password'],
      select: false
   },
   passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
         validator: function (pc) {
            return pc === this.password;
         },
         message: 'Passwords are not the same!'
      }
   },
   isAdmin: {
      type: Boolean,
      default: false
   },
   role: {
      type: String,
      enum: ['user', 'author', 'admin'],
      default: 'user'
   }
})

userSchema.pre('save', async function (next) {
   if (!this.isModified('password')) return next() /* this points to the current document */

   this.password = await hash(this.password, 12)
   this.passwordConfirm = undefined

   next()
})

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
   return await compare(candidatePassword, userPassword)
}

const User = models.User || model('User', userSchema);

export default User