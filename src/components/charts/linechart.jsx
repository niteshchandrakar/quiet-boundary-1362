import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Linechart() {
    
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Attendence in %',
        data: [80, 100, 90, 50, 60, 70],
        backgroundColor: '#e9e7f8',
        borderColor: '#4035b8',
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
  
  export default Linechart;