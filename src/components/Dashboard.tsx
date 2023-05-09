import React, { useState } from 'react';

interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
}

const Dashboard: React.FC = () => {
  // random expenses can configure to whatever until we have actual data
  const expenses: Expense[] = [
    { name: 'Groceries', amount: 120, date: '2023-05-01', category: 'Food' },
    { name: 'Gas', amount: 50, date: '2023-05-02', category: 'Gas' },
  ];

  const [chartLayout, setChartLayout] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* styling for sure needs to be changed */}
      <div
        style={{
          marginRight: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h2 style={{ marginTop: 0 }}>Expenses</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Charts</h2>
        <select
          value={chartLayout}
          onChange={(e) => setChartLayout(e.target.value)}
        >
          {/* below are the chart layouts we need to add*/}
          <option value="">Select chart layout</option>
          <option value="layout1">Layout 1</option>
          <option value="layout2">Layout 2</option>
          <option value="layout3">Layout 3</option>
        </select>
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundColor: '#eee',
            marginTop: '10px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Dashboard;
