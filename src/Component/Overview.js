import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import axios from "axios";
//import Piechart from "./Piechart.js";
import Editproject from './Editproject.js'
import './Display.css'
import { Row, Col, Button } from 'antd';
import Pchart from "./Pchart.js"
import Item from 'antd/lib/list/Item';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      overdatas: [],
    }
  }
  componentDidMount = () => {
   axios.get('/TSM/project/display/{uid}',this.state)
   .then(response => {
     this.setState({ overdata : response.data });
     })
     .catch(function (error) {
      console.log(error);
     })
  }
   onSubmit = e => {
    e.preventDefault();
    console.log(this.State); 
   }

   async componentDidMount() {
      console.log("hsjk", this.state.overdatas)
    const overdatas= await  axios
     .get('https://cors-anywhere.herokuapp.com/http://dcfc0f8d.ngrok.io/TSM/project/list/371' ) 
     .then(responce=>{
       this.setState({overdatas:responce.data})
     })

    }
  
 


  
 render() {

    const columns = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',

      },
      {
        title: 'Total Assigned',
        dataIndex: 'TotalAssigned',
        key: 'TotalAssigned',
      },
      {
        title: 'Total Complete',
        dataIndex: 'TotalComplete',
        key: 'TotalComplete',
      },
      {
        title: 'Total Not Executed',
        dataIndex: 'TotalNotExecuted',
        key: 'TotalNotExecuted',
      }
    ];
    const {overdatas} = this.state;

    // {
    //   key: '1',
    //   Name: 'shinu',
    //   TotalAssigned: '10',
    //   TotalComplete: '6',
    //   TotalNotExecuted: '4',
    // },
    // {
    //   key: '2',
    //   Name: 'krishna',
    //   TotalAssigned: '10',
    //   TotalComplete: '5',
    //   TotalNotExecuted: '5',
    // },
    // {
    //   key: '3',
    //   Name: 'shanthi',
    //   TotalAssigned: '10',
    //   TotalComplete: '9',
    //   TotalNotExecuted: '1',
    // },
    // {
    //   key: '4',
    //   Name: 'mannan',
    //   TotalAssigned: '10',
    //   TotalComplete: '7 ',
    //   TotalNotExecuted: '3',
    // },
    // {
    //   key: '5',
    //   Name: 'harsha',
    //   TotalAssigned: '10',
    //   TotalComplete: '9',
    //   TotalNotExecuted: '1',
    // },
    // {
    //   key: '6',
    //   Name: 'dj bhaiya',
    //   TotalAssigned: '10',
    //   TotalComplete: '8',
    //   TotalNotExecuted: '2',
    // },
  
    //
    return (

     
          
      
      <div className="file">



        
 
            <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="form-group-list">
              <h1>{this.state.overdatas.projectTitle}</h1><Editproject />
              <h5>{this.state.overdatas.projectDescription}</h5>
              <h5>{this.state.overdatas.createdDate}</h5>
              <h5>{this.state.overdatas.updatedDate}</h5>
            </div>
          </Col> 
            
          <div className="sky" >
            <Button type="primary" >
              <p>Users & Roles</p>
            </Button>
          </div>

          <div className="form-group-item">
           
            <Pchart />
          </div>

        </Row>
        <Row>
          <Col lg={14} md={14} sm={14} xs={14}>
            <div className="form-group-right">
              <h1>Team Analysis</h1>
            
               <Table columns={columns} dataSource={this.state.overdata}  bordered  />
            
              
            </div>
          </Col>
        </Row>
 




      </div>
    )
  }
}


