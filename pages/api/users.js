import dbConnect from "lib/dbConnect";
import User from "models/user";

export default async function handler(req, res) {
   const { method } = req

   await dbConnect()

   switch (method) {
      case 'GET':
         const users = await User.find()

         res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
               users
            }
         })
         break;

      case 'POST':
         // const { name, email, password, passwordConfirm } = req.body;
         const {
            name = 'Asmaul hosna', email = 'hello@ropi.io',
            password = 'tanvirropi', passwordConfirm = 'tanvirropi'
         } = req.body;
         const user = await User.create({
            name, email, password, passwordConfirm
         })

         user.password = undefined;

         res.status(201).json({
            status: 'success',
            data: {
               user
            }
         })
         break;

      default:
         res.setHeader('Allow', ['GET', 'POST'])
         res.status(400).json({ status: 'error', message: '400, method doesn\'t exists on this server!' })
         break;
   }
}