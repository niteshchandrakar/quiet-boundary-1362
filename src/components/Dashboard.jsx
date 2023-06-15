import Linechart from "../charts/linechart";
import Navbar from "./Navbar";
import Linechart2 from "../charts/linechart2";
import DoughnutChart from "../charts/DoughnutChart";
import Monthchart from "../charts/Monthchart";
import Calendar from "react-calendar";
import Calender from "./Calender";

function Dashboard() {


  return (
    <div style={{ margin: "auto", display: "flex",justifyContent: "space-between", }}>


      <div className="others">
        <div style={{ display: "flex", justifyContent: "space-between", }}>
          <Linechart />

          <Linechart2 />

        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DoughnutChart />
          <DoughnutChart />
          <DoughnutChart />

        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Monthchart />

        </div>
      </div>
      <div className="calender" style={{marginLeft:"5%"}}>
        <Calender />
        
      </div>
    </div>
  );
}

export default Dashboard;