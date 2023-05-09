import { Request, Response, NextFunction } from 'express';
import express from 'express';
// const NextFunction = require('express');
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Define your routes here //
app.post(
  '/signup',
  userController.createUser,
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(res.locals.user);
  }
);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('hello world');
  return res.json('hello world');
});

app.post(
  '/addExpense',
  expenseController.createExpense,
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(res.locals.newExpense);
  }
);

// api.post('/signup', userController.createUser, cookieController.setSSIDCookie, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

// api.post('/verify', userController.logIn, userController.getUser, cookieController.setSSIDCookie, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
