import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Logo from './components/HomeLogo';
import AddItem from './components/addItem';
import Dashboard from './components/Dashboard';
import axios from 'axios';

interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
}

interface ExpenseFromDatabase {
  "id": number;
  "user_id": number;
  "expense_name": string;
  "expense_category": string;
  "amount": number;
  "date_of_expense": string;
  "created_at": string;
}

interface Props {
  currentUser: string;
}

function App({ currentUser }: Props) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const addNewItem = async (expense: Expense) => {
    // this is in app for prop drilling couldnt get it to work
    // with additem in dashboard

    setExpenses((prevEx) => [...prevEx, expense]);
  };

  useEffect(() => {
    const getAllExpenses = async () => {
      try {
        const allExpenses = await axios.get(`http://localhost:3333/getAllExpenses/${currentUser}`)
        const allExpenseDetails: Expense[] = allExpenses.data.map((expense: ExpenseFromDatabase) => {
          return {
            name: expense.expense_name,
            amount: expense.amount,
            date: expense.date_of_expense.slice(0, 10),
            category: expense.expense_category
          }
        })
        setExpenses(allExpenseDetails);
      } catch(error) {
        console.log(error)
      }
    }
    getAllExpenses()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Logo />
      {/* prop down the function name it whatever */}
      <AddItem onAddExpense={addNewItem} currentUser={currentUser} />
      <Dashboard expenses={expenses} />
    </div>
  );
}

export default App;
