// const createExpenseTable: string = `
// CREATE TABLE IF NOT EXISTS "Expenses" ("id" SERIAL, "user_id" INT, "expense_name" VARCHAR(255), "expense_category" VARCHAR(255), "amount" INT, "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY ("id"));`;
// module.exports = {
//   query: (createExpenseTable: string, params: string, callback: Function) => {
//     console.log('created user table', createExpenseTable);
//     return pool.query(createExpenseTable, params, callback);
//   },
// };
