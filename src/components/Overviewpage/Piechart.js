 import React, { Component } from 'react';
 import Chart from './Chart.js';
 import axios from "axios";
// import {Pie} from 'react-chartjs-2'

 class Piechart extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{},
      dataFromDB: [  ],
    }
  }

 
  componentDidMount(){
    this.getChartData();
  }


  async getChartData(){
    const id=384;
   await axios.get("https://cors-anywhere.herokuapp.com/http://550c0cc1.ngrok.io/TSM/chart/"+id , {
      headers: {
            "Content-type" : "application/json;Access-Control-Allow-Origin: 'http://550c0cc1.ngrok.io'; charset=UTF-8",
            Authorization:''
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({
      dataFromDB: res.data,
       })
    })
    
    this.setState({
      chartData:{
        labels: ['passed', 'failed', 'notExecuted','blocked' ],
        datasets:[
          {
            label:'Projects status',
            data : this.state.dataFromDB,
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(155, 106, 86, 0.6)',
            ]
          }
        ]
      }
    });
    
  }

   render() {
    
     return (
           
        <div>
         <Chart chartData={this.state.chartData} /> 
        
       </div>
     );
   }
 }

 export default Piechart;

// import React, { Component } from 'react'
// import {Pie} from 'react-chartjs-2'

// class Chart extends Component{

//   constructor(){
//     super();
//     this.state = {
//       chartData : {
//         label:['passed','failed','notexecuted','blocked'],
//         datasets:[
//           {
//           Label: 'status',
//           Data:[34,45,56,87],
//           Background : [
//             'rgba(255,99,132,0.6)',
//             'rgba(255,206,86,0.6)',
//             'rgba(54,162,235,0.6)',
//             'rgba(75,192,192,0.6)',
//           ]
//         }
//         ]
//       }
//     }
//   }

//   render(){
//     return(
//       <div className ="chart">
//        <Pie 
//        data ={this.state.chartData}
//        option={{
//          title:{
//            diplay:true,
//            text:'no. of testcase',
//            fontSize: 25
//          },
//          legend:{
//            display:true,
//            position:'button'
//          }
//        }}
//        />
//       </div>
//     );
//   }

// }



