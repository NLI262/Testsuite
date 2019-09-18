// import React, {Component} from 'react';
// import { Pie} from 'react-chartjs-2';

// class Chart extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     } 
//   }
// componentDidMount()
// {
//     this.setState({
//         chartData:this.props.chartData
//     });
   
// }
  
//   render(){
      
      
//       if(!this.props.chartData)
//       {
//           return(
//               <div>Loading</div>
//           )
//       }

//     return (
//       <div className="chart">
        
//        <Pie
//           data={this.props.chartData}
//           options={{
//             title:{
//               display:true,
//               text:'status of the project',
//               fontSize:25
//             },
//             legend:{
//               display:true,
//               position:"right"
//             }
//           }}
//         />
//       </div>
//     )
//   }
// }

// export default Chart;