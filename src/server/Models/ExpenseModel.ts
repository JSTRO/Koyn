import { Pool, QueryResult } from 'pg';

interface Expense {
  user_id: string;
  expense_name: string;
  expense_category: string;
  amount: number;
  date_of_expense: Date;
}

const pool = new Pool({
  connectionString:
    'postgres://pdixnjlm:5lhkeS2Z6TTSsRADeXd5WhFsOGARtR5g@drona.db.elephantsql.com/pdixnjlm',
});

async function createExpenseTable(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS "Expenses" (
      "id" SERIAL, 
      "user_id" INT, 
      "expense_name" VARCHAR(255), 
      "expense_category" VARCHAR(255), 
      "amount" INT, 
      "date_of_expense" DATE,
      "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
      PRIMARY KEY ("id"));
  `;
  await pool.query(query);
}

async function createExpense(expense: Expense): Promise<QueryResult<Expense>> {
  const { user_id, expense_name, expense_category, amount, date_of_expense } =
    expense;
  const query = {
    text: 'INSERT INTO "Expenses" (user_id, expense_name, expense_category, amount, date_of_expense) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
    values: [user_id, expense_name, expense_category, amount, date_of_expense],
  };
  const result = await pool.query<Expense>(query);
  return result;
}

async function getExpensesByUserId(
  user_id: string
): Promise<QueryResult<Expense>> {
  const query = {
    text: 'SELECT * FROM "Expenses" WHERE user_id = $1',
    values: [user_id],
  };
  const result = await pool.query(query);
  return result;
}

export { createExpenseTable, createExpense, getExpensesByUserId };
