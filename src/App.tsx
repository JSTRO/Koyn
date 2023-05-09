import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Logo from './components/HomeLogo';
import AddItem from './components/addItem';
import Dashboard from './components/Dashboard';

interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addNewItem = (expense: Expense) => {
    // this is in app for prop drilling couldnt get it to work
    // with additem in dashboard
    setExpenses((prevEx) => [...prevEx, expense]);
  };

  return (
    <div className="App">
      <NavBar />
      <Logo />
      {/* prop down the function name it whatever */}
      <AddItem onAddExpense={addNewItem} />
      <Dashboard expenses={expenses} />
    </div>
  );
}

export default App;
