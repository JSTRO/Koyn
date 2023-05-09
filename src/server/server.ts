import { Request, Response, NextFunction } from 'express';
import express from 'express';
const path = require('path');
// const NextFunction = require('express');
const userController = require('./controllers/userController');
const expenseController = require('./controllers/expenseController');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Define your routes here //
app.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, '..', '..', 'public/index.html'));
});

app.post(
  '/signup',
  userController.createUser,
  (req: Request, res: Response, next: NextFunction) => {
    // return res.status(201).redirect('/');
    // return res.redirect('/');
    return res.status(201).json({ loggedIn: res.locals.loggedIn });
  }
);

app.post(
  '/login',
  userController.verifyUser,
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({ loggedIn: res.locals.loggedIn });
  }
);

app.post(
  '/addExpense',
  expenseController.createExpense,
  (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json(res.locals.newExpense);
  }
);

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
