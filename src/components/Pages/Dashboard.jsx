import Linechart from "../charts/linechart";
import Linechart2 from "../charts/linechart2";
import DoughnutChart from "../charts/DoughnutChart";
import Monthchart from "../charts/Monthchart";
import Calender from "./Calender";
import DoughnutChart2 from "../charts/DoughnutChart2";
import DoughnutChart3 from "../charts/DoughnutChart3";

function Dashboard() {


  return (


    <div style={{ margin: "auto", display: "flex", justifyContent: "space-between", backgroundColor: "#e9e7f8" }}>


      <div className="others">
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "15px", backgroundColor: "#fbfbfe",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",borderRadius:"10px" ,marginTop:"5px",marginLeft:"5px"}}>
          <Linechart />

          <Linechart2 />

        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", backgroundColor: "#fbfbfe" ,boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",borderRadius:"10px",marginLeft:"5px" }}>
          <DoughnutChart />
          <DoughnutChart2/>
          <DoughnutChart3/>

        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "15px", backgroundColor: "#fbfbfe",boxShadow:"rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",borderRadius:"10px",marginLeft:"5px"  }}>
          <Monthchart />

        </div>
      </div>
      <div className="calender" style={{ marginLeft: "5%" }}>
        <Calender />

      </div>

    </div>


  );
}

export default Dashboard;