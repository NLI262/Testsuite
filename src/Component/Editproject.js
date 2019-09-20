import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Button } from 'antd';



export default class Editproject extends Component {
  constructor(props) {
    super(props);
    this.onChangeprojectTitle = this.onChangeprojectTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      projectTitle: '',
      Description: ''
    }
  }

//   componentDidMount() {
//       axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
//           .then(response => {
//               this.setState({ 
//                 projectTitle : response.data.projectTitle, 
//                 Description: response.data.Description,
//                  });
//           })
//           .catch(function (error) {
//               console.log(error);
//           })
//     }

    onChangeprojectTitle(e) {
    this.setState({
        projectTitle: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      Description: e.target.value
    })  
  }
  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
        projectTitle: this.state.projectTitle,
        Description: this.state.Description,
      
    };
    // axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
    //     .then(res => console.log(res.data));
    
    // this.props.history.push('/index');
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

 
  render() {
    return (
        <div>
            <Button className="aaa"  type="outline-secondary" onClick={this.showModal}>
            <i class="fa fa-pencil-square-o fa-1x " aria-hidden="true"></i>
        </Button>
       
        <Modal
          title="Edit Project"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Project Title:  </label>
                    <input 
                      type="text" 
                      placeholder="Enter the title"
                      className="form-control" 
                      value={this.state.projectTitle}
                      onChange={this.onChangeprojectTitle}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <textarea type="text" 
                    placeholder="Enter the description"
                      className="form-control"
                      value={this.state.Description}
                      onChange={this.onChangeDescription}
                      />
                </div>
            </form>
        </div>
        </Modal></div>
    )
  }
}