import React, { Component } from 'react';
import { Modal, Button, Table } from 'antd';
import 'antd/dist/antd.css';
import './Display.css'
import Datarecord from './Datarecord..js'
import Datrecord from './Datrecord.js'
import Modulebar from './Modulebar.js'


export default class Testrun extends Component {

  constructor(props) {
    super(props);
    this.onChangeprojectTitle = this.onChangeprojectTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      projectTitle: '',
      columns:props.columns
    }
  }

  onChangeprojectTitle = (e) => {
    this.setState({
      projectTitle: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      projectTitle: this.state.projectTitle,
    });
  }



  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    e.preventDefault();
    console.log(e);
    console.log(this.props.selectRow);
    this.setState({
      projectTitle: "",
      selectedRows: this.state.selectedRows,
    })
    this.setState({
      visible: false,

    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      projectTitle: "",
    });
  };



  render() {



    return (
      <div >
        {this.state.projectTitle}
        {this.state.temp}
        <Button type="primary" onClick={this.showModal}>
          Create TestRun
        </Button>

        <Modal
          title="Create TestRun"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name:</label>
                &nbsp;&nbsp;
                <input
                  type="text"
                  placeholder="Enter the testrun name"
                  className="form-control"
                  value={this.state.projectTitle}
                  onChange={e => this.setState({ projectTitle: e.target.value })}
                />
              </div>
              <div className="flex-container">
                <div className="ccc">

                  <div className="ddd" >
                 
                    <Modulebar selectRow={this.state.selectRow} 
                    onHeaderClick={this.handleSort}/>
                    
                  </div>
                </div>
                <div className="ccc">

                  <div className="ddd">
                    <Datarecord />,
                </div>
                </div>
                <div className="ccc">

                  <div className="ddd">
                    <Datrecord />,
                </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}