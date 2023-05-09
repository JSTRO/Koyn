import { Request, Response, NextFunction } from 'express';
import { hash, compare } from 'bcrypt';
import { createUserTable, createUser, getUser } from '../Models/UserModel';
const db = require('../models/UserModel');

const SALT_ROUNDS = 10;

interface UserFromRequest {
  username: string;
  email: string;
  password_hash: string;
}

const userController = {
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
      res.locals.loggedIn = true;
      return next();
    } catch (err) {
      return next({
        log: 'an error occurred in userController.createUser',
        status: 400,
        message: { err: err },
      });
    }
  },

  async verifyUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = req.body;
      const result = await getUser(username);
      const user = result.rows[0];
      if (!user) {
        res.locals.status = false;
        res.locals.loggedIn = false;
        throw new Error('User not found');
      } else {
        const result = await compare(password, user.password_hash);
        if (result === true) {
          res.locals.user = user;
          res.locals.loggedIn = true;
        }
        return next();
      }
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = userController;
