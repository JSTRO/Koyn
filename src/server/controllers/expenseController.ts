import { Request, Response, NextFunction } from 'express';
import { createExpense, getExpensesByUserId } from '../Models/ExpenseModel';

interface ExpenseFromRequest {
  user_id: number;
  expense_name: string;
  expense_category: string;
  amount: number;
  date_of_expense: Date;
}

const expenseController = {
  // Middleware function to create a new expense
  async createExpense(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        user_id,
        expense_name,
        expense_category,
        amount,
        date_of_expense,
      } = req.body;

      const newExpense = {
        user_id,
        expense_name,
        expense_category,
        amount,
        date_of_expense,
      };
      const result = await createExpense(newExpense); // Call the createUser function from the UserModel module
      res.locals.newExpense = result.rows[0];
      return next();
    } catch (err) {
      return next({
        log: 'an error occurred in expenseController.createExpense',
        status: 400,
        message: { err: err },
      });
    }
  },
  async getExpensesByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_id } = req.params;
      const result = await getExpensesByUserId(user_id);
      res.locals.expenses = result.rows;
      return next();
    } catch (err) {
      return next({
        log: 'an error occurred in expenseController.createExpense',
        status: 400,
        message: { err: err },
      });
    }
  },
};

module.exports = expenseController;
