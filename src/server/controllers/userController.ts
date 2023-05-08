import { Request, Response, NextFunction } from 'express';
import { hash } from 'bcrypt';
import { createUserTable, createUser, getUserById } from '../Models/UserModel';
const db = require('../models/UserModel');

const SALT_ROUNDS = 10;

interface UserFromRequest {
  username: string;
  email: string;
  password_hash: string;
}

const userController = {
  // userController.createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //   db.query(createUser)
  //     .then((data) => {
  //       res.locals.users = data.rows;
  //       return next();
  //     })
  //     .catch((err) => {
  //       return next({
  //         log: 'an error occurred in userController.createUser',
  //         status: 400,
  //         message: { err: err },
  //       });
  //     });
  // };

  // async createUser (req: Request, res: Response, next: NextFunction): Promise<void> {
  //   const { username, email, password } = req.body;
  //   const values = [username, email, password];
  //   try {
  //     const result = await createUser());
  //     res.locals.users = result.rows;
  //     return next();
  //   } catch (err) {
  //     return next({
  //       log: 'an error occurred in userController.createUser',
  //       status: 400,
  //       message: { err: err },
  //     });
  //   }
  // },

  // Middleware function to create a new user
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await hash(password, SALT_ROUNDS); // Hash the password using bcrypt
      const newUser = { username, email, password_hash: hashedPassword };
      const result = await createUser(newUser); // Call the createUser function from the UserModel module
      res.locals.user = result.rows[0];
      return next();
    } catch (err) {
      return next({
        log: 'an error occurred in userController.createUser',
        status: 400,
        message: { err: err },
      });
    }
  },

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
};

module.exports = userController;
