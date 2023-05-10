import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

interface PieChartComponentProps {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => {
  useEffect(() => {}, [data]);

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChartComponent;
