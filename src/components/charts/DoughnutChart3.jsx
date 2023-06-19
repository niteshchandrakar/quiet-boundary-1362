import React from 'react';
import { Doughnut } from 'react-chartjs-2';

function DoughnutChart3() {

  const data = {
    labels: ['Maths Mark in %', ],
    datasets: [
      {
        data: [90, 10, ],
        backgroundColor: ['#4035b8', '#e9e7f8', ],
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

export default DoughnutChart3;