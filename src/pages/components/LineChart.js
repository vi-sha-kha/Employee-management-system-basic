import React from 'react';
import {Line} from "react-chartjs-2";

function LineChart() {
    const data={
        labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
            {
                label:'Employee engagement in 2021 (M)',
                data:[6,5,4,2,5,6,7,8,9,7,8,7],
                backgroundColor:"green",
            }
        ]
    }
  return (
    <Line data={data}/>
  )
}

export default LineChart