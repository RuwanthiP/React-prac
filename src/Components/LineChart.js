import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
    const data={
        labels:['Jan','Feb','March','Apr','May'],
        datasets:[
            {
                label:'sales for 2020 (M)',
                data:[3,2,2,1,5]
            }
            
        ]
    }
  return(
    <div>
        <h1>Hi</h1>
        <Line data={data}/>
    </div>
  ) 
}

export default LineChart;

