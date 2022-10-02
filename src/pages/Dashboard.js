import React from "react";
// import './App.css';
// import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LineChart from "./components/LineChart";
import{Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement} from 'chart.js';
import BarChart from "./components/BarChart";
import Card from "./components/Card";
ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, BarElement
)

function Dashboard(data) {
  return (
    <div className="App">

      <div className="card">
        <Card/>
      </div>
      
      <div className="chart m-4 ">
        <LineChart/>
      </div>

        <div className="chart m-4 ">  
        <BarChart/>
      </div>
      

    </div>
  );
}

export default Dashboard;
