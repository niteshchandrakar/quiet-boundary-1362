import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart() {

  const data = {
    labels: ['Red', ],
    datasets: [
      {
        data: [75, 25, ],
        backgroundColor: ['#FF6384', '#36A2EB', ],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', ],
        circumference:180,
        rotation:270,
        
      },
    ],
  };
  const options = {
    responsive: false,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Doughnut data={data} options={options} />;
    </div>
  );

}

export default DoughnutChart;