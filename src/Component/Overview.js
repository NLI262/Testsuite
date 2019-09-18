import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
// import axios from "axios";
//import Piechart from "./Piechart.js";
import Editproject from './Editproject.js'
import './Display.css'
import { Row, Col ,Button } from 'antd';
import Pchart from "./Pchart.js"

export default class Overview extends Component {
  constructor(props) {
    super(props);
    // this.onChangePersonName = this.onChangePersonName.bind(this);
    // this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    // this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.state({
    //   posts:"",
    //   projectTitle:"",
    //   description:"",
    //chartData:{},
    //dataFromDB: [  ]
    // })
  }
  componentDidMount = () => {
    // axios.get('')
    // .then(response => {
    //   this.setState({ posts : response.data });
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
  }
  // onSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.State); 
  // }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',

      },
      {
        title: 'Totalassigned',
        dataIndex: 'Totalassigned',
        key: 'Totalassigned',
      },
      {
        title: 'Totalcomplete',
        dataIndex: 'Totalcomplete',
        key: 'Totalcomplete',
      },
    ];
    const data = [
      {
        key: '1',
        Name: 'vhsvh',
        Totalassigned: '10',
        Totalcomplete: '6',

      },
      {
        key: '2',
        Name: 'ereg',
        Totalassigned: '10',
        Totalcomplete: '5',

      },
      {
        key: '3',
        Name: 'tcyi',
        Totalassigned: '10',
        Totalcomplete: '9',

      },
      {
        key: '4',
        Name: 'vhsvh',
        Totalassigned: '10',
        Totalcomplete: '7 ',

      },
      {
        key: '5',
        Name: 'vhsvh',
        Totalassigned: '10',
        Totalcomplete: '9',

      },
     

    ];
    return (
      <div className = "file">
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
          <div className = "shape">
              <Editproject />
              </div>
            <div className="form-group-list">
              <h5>Uber</h5>
            </div>
            <div>
              <h5>Hello cab world</h5>
            </div>
            <div>
              <h5>Modified By:17/09/2019</h5>
            </div>
            <div>
              <h5>Modified Date:krishna prasad samal</h5>
            </div>
          </Col>
          <div className = "sky" >
          <Button type="primary" >
            <p style ={{textAlign:"center"}}>Users & Roles</p>
        </Button>
          </div>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="form-group-item">
              {/* <Piechart /> */}
              <Pchart/>
            </div>
          </Col>
          </Row>
          <Row>
          <Col lg={24} md={24} xs={24} sm={24}>
            <div className="form-group-right">
              <h1>Team Analysis</h1>
              <Table columns={columns} dataSource={data} bordered />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


