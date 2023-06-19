import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Monthchart() {
    
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Monthly Overall Marks in %',
        data: [80, 75, 100, 85, 55, 30,70,35,75,65,50,80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: '#4035b8',
        borderWidth: 3,
      },
    ],
  };

  const chartOptions = {
    responsive:true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{width:"70%",height:"200px"}} >
      <Line data={chartData} options={chartOptions}  />
    </div>
  );
    
  }
  
  export default Monthchart;