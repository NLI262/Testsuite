import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2'

export default class Pchart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData : {
        labels:['passed','failed','notexecuted','blocked'],
        datasets:[
          {
          labels: 'status',
          data:[34,45,56,87],
          backgroundColor : [
            'rgba(255,99,132,0.6)',
            'rgba(255,206,86,0.6)',
            'rgba(54,162,235,0.6)',
            'rgba(75,192,192,0.6)',
          ]
        }
        ]
      }
    }
  }

  render(){
    return(
      <div className ="chart">
       <Pie 
       data ={this.state.chartData
    }
       option={{
       
         legend:{
           display:true,
           position: 'bottom'
         },
         title:{
            diplay:true,
            text:'no. of testcase',
            fontSize: 25
          }
       }}
       />
      </div>
    );
  }

}



