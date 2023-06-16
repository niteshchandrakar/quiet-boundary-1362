import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Linechart2() {
    
  const chartData = {
    labels: ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', ],
    datasets: [
      {
        label: 'Daily HomeWork Submission',
        data: [100, 80, 75, 95, 90, 97],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgb(26, 83, 255)',
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{width:"40%",height:"200px"}}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
    
  }
  
  export default Linechart2;