import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import userController from

const app = express();

// Middleware to parse incoming requests with JSON payloads
app.use(json());



// Define your routes here
app.post('/', userController.logIn, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(res.locals.user);
});


app.get('/', userController.logIn, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(res.locals.user);
});


// api.post('/submit', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.totalPoints);
// });

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
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
