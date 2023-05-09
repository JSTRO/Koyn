import React, { useState } from 'react';

const AddItem: React.FC = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, amount, date, category });

    // here add postgres functionality
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
        <option value="category1">Food</option>
        <option value="category2">Gas</option>
        <option value="category3">Energy</option>
        <option value="category4">Rent/Mortgage</option>
        <option value="category5">Clothes</option>
        <option value="category6">Entertainment</option>
        <option value="category7">Misc</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
