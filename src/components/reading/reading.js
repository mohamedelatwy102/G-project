import {useState} from 'react';
import { Line } from 'react-chartjs-2';
import './reading.css'
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

function Reading () {
  const [data, setData]= useState({
    labels:["Week1", "Week2" , "week3" ,"week4"],
    datasets:[
      {
        label:"Readings Report",
        data:[7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 14, 15],
        backgroundColor:'yellow',
        borderColor:'green',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointBackgroundColor:'#fff',
        showLine:true
      }
    ]
  })
  return (
    <div className="reading"  style={{width:'700px', height:'900px'}}>
      <Line className='read' data={data}>Hello</Line>
      <div className='input'>
      <div className='red'>
        <label for="">Reading</label>
        <input type="text" class="main-input" name="data5" />
      </div>
      <input type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Reading;