import React from "react";
import TSMaxios from "../Axios/TSMaxios";
import { Form, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";


export default class Createproject extends React.Component {
  state = {
    projectTitle: "",
    projectDescription: "",
    
    googleAutheticationId: localStorage.getItem("tokenid"),
    validated: false,
    setValidated: false
  };
  
  handleSubmit = e => {
    e.preventDefault();
    
    TSMaxios
      .post("/TSM/project/add", this.state)
      .then(response => {
         console.log(response);
         if(response.status===200)
         {
         
         this.props.updateState(response.data);
         this.props.closeModal();
 
         }
        }
      
      );
      // .catch(error => {
      //   console.log(error);
      // });
  };


  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <Modal
        {...this.props}
        size="lg"                                                         //modal for create a new project
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
            <Form  onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <span>Project Title</span>
                  <Form.Control
                     required
                    type="text"
                    placeholder=""
                    value={this.state.value}
                    onChange={e =>
                      this.setState({ projectTitle: e.target.value })
                    }
                   />
                   <Form.Control.Feedback type="invalid">
            Please provide a valid title
          </Form.Control.Feedback>
                   
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <span>Project Description</span>
                  <Form.Control
                   required
                    type="text area"
                    as="textarea"
                    rows="3"
                    placeholder=""
                    value={this.state.value}
                    onChange={e =>
                      this.setState({ projectDescription: e.target.value })
                    }
                  />
                </Form.Group>
                </Form.Row>

             <div style={{marginLeft: "36rem"}} >
            <Button  onClick={async () => await this.props.onHide(this.state)}>       
            {" "}
            Cancel
          </Button>
             &nbsp; &nbsp;
          <Button  variant="primary" type="submit">       
            {" "}
            Save
          </Button>
          </div>
            </Form>
        
        </Modal.Body>
       
      </Modal>
    );
  }
}
