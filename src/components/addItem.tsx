import React, { useState } from 'react';
import axios from 'axios';

interface AddItemProps {
  onAddExpense: (expense: {
    name: string;
    amount: number;
    date: string;
    category: string;
  }) => void;
  currentUser: string;
}

const AddItem: React.FC<AddItemProps> = ({ onAddExpense, currentUser }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // add item to DB
    try {
      await axios.post('http://localhost:3333/addExpense', {
        user_id: currentUser,
        expense_name: name,
        expense_category: category,
        amount: amount,
        date_of_expense: date,
      });
    } catch (error) {
      console.log(error);
    }

    onAddExpense({ name, amount: Number(amount), date, category });
    setName('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        style={{ marginRight: '10px' }}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: '10px' }}
      >
        <option value="">Select category</option>
        <option value="Food">Food</option>
        <option value="Rent/Mortgage">Rent/Mortgage</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Clothes">Clothes</option>
        <option value="Gas">Gas</option>
        <option value="Misc">Misc</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
