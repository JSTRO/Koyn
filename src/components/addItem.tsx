import React, { useState } from 'react';

interface AddItemProps {
  onAddExpense: (expense: {
    name: string;
    amount: number;
    date: string;
    category: string;
  }) => void;
}

const AddItem: React.FC<AddItemProps> = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, amount, date, category });

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
        <option value="Gas">Gas</option>
        <option value="Energy">Energy</option>
        <option value="Rent/Mortgage">Rent/Mortgage</option>
        <option value="Clothes">Clothes</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Misc">Misc</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
