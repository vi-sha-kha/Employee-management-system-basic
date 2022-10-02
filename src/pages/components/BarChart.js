import React from 'react';
import {Bar} from "react-chartjs-2";

function BarChart() {
    const data={
        labels: ['<25 yrs', '25-30', '30-40', '40-50', '>50yrs'],
        datasets:[
            {
                label:'Absenteeism over last 5 years(Based on Age group)',
                data:[3,2,3,5,6],
                backgroundColor:["blue","green","violet","grey", "orange"],
            }
        ]
    }
  return (
    <Bar data={data}/>
  )
}

export default BarChart;