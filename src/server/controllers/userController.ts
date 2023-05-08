import { Request, Response, NextFunction } from 'express';
// import User from './models/user';
const userController = {};


// userController.createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     console.log('inside createUser middleware');
//     console.log('request body --->', req.body);
//     const { username, password } = req.body;
//     // const newUser = await User.create({ username: username, password: password, days: days });
//     console.log('this is newUser ---> ', newUser);
//     res.locals.user = newUser;
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// };


// userController.logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   try {
//     const { username, password } = req.body;
//     // const user = await User.findOne({ username: username });
//     if (!user) {
//       res.locals.status = false;
//       throw new Error('User not found');
//     } else {
//       user.comparePassword(password, (err: Error, isMatch: boolean) => {
//         if (err) throw err;
//         res.locals.status = isMatch;
//         res.locals.user = user;
//         return next();
//       });
//     }
//   } catch (error) {
//     return next(error);
//   }
// };




module.exports = userController;