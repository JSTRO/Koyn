import React, { useState, useMemo } from 'react';
import PieChartComponent from './PieChartComp';

interface Expense {
  name: string;
  amount: number;
  date: string;
  category: string;
}

interface DashboardProps {
  expenses: Expense[];
}

const Dashboard: React.FC<DashboardProps> = ({ expenses }) => {
  const [chartLayout, setChartLayout] = useState('');
  const chartData = useMemo(() => {
    const categories = [
      'Food',
      'Rent/Mortgage',
      'Utilities',
      'Entertainment',
      'Clothes',
      'Gas',
      'Misc',
    ];
    const categoryTotals: number[] = Array(categories.length).fill(0);

    expenses.forEach((expense) => {
      const categoryIndex = categories.indexOf(expense.category);
      if (categoryIndex !== -1) {
        categoryTotals[categoryIndex] += expense.amount;
      }
    });

    return {
      labels: categories,
      datasets: [
        {
          data: categoryTotals,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#adc1e0',
          ],
        },
      ],
    };
  }, [expenses]);

  return (
    <div className="dashboard" style={{ display: 'flex', flexDirection: 'row' }}>
      <div
        style={{
          marginRight: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
        className="expense-list"
      >
        <div className="section-title"><h2 style={{ marginTop: 0 }}>Expenses</h2></div>
        <table>
          <thead>
            <tr className="expense-headers">
              <th>Name</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} style={index % 2 === 0 ? {backgroundColor: "gold"}: {backgroundColor: "white"}}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
                <td>{expense.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chart-wrapper">
        <div className="section-title"><h2>Breakdown</h2></div>
        {/* <select
          value={chartLayout}
          onChange={(e) => setChartLayout(e.target.value)}
        > */}
        {/* //   <option value="">Select chart layout</option>
        //   <option value="layout1">Layout 1</option>
        //   <option value="layout2">Layout 2</option>
        //   <option value="layout3">Layout 3</option>
        // </select> */}
        <div
        // style={{
        //   width: '00px',
        //   height: '300px',
        //   backgroundColor: '#eee',
        //   marginTop: '10px',
        // }}
        // <PieChartComponent data={defaultChartData} />
        className="chart"
        >
          <PieChartComponent data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
