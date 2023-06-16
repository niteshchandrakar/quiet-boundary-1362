import { Line } from 'react-chartjs-2';
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Monthchart() {
    
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Monthly Progress',
        data: [12, 19, 3, 5, 2, 3,7,3,9,2,5,9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
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