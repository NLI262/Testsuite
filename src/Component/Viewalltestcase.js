import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { Input, Form} from 'antd';
import { Select } from 'antd';
import './Display.css';
import axios from "axios";

function hasErrors  (fieldsError)  {
    return Object.keys(fieldsError).some(fields => fieldsError[fields]);
}

 class Viewalltestcase extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            testcaseTitle: '',
            testcaseDescription: '',
            prerequisites: '',
            steps: '',
            expectedOutput: '',
            sprintReference: '',
            //titlefield: null ,
            typeId: 'select'
        }
    }
    // hasErrors  (fieldsError)  {
    //     return Object.keys(fieldsError).some(fields => fieldsError[fields]);
    // }

    // componentDidMount() {
    //     this.props.form.validateFields();
    // }
    
    componentDidMount=()=> {
        this.props.form.validateFields();
    //     axios.get('http://dcfc0f8d.ngrok.io/TSM/project/display/', {headers: {
    //       "Content-type": "application/json; Access-Control-Allow-Origin: *; charset=UTF-8",
    //       Authorization: ''}
    //     })
    //       .then(res => res.json())
    //       .then(json => json.overdata)
    //       .then(overdata => this.setState({ 'overdata': overdata }))
    // axios({
    //     method: 'post',
    //     url: 'https://cors-anywhere.herokuapp.com/http://dcfc0f8d.ngrok.io//TSM/test/add/371',
    //     data: {
    //         testcaseTitle: "sample 1",
    //         testcaseDescription: "hi",
    //         sprintReference: "@cvb",
    //         prerequisites: "hi",
    //         steps: "steps",
    //         expectedOutput: "dfg",
    //         Type:""
            
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
       }


    handleSubmit =e =>{
         e.preventDefault();
    //     axios
    //   .post("https://cors-anywhere.herokuapp.com/http://dcfc0f8d.ngrok.io//TSM/test/add/371", this.state)
    //   .then(response => {
    //      console.log(response = response.data);
    //      if(response.status===200)
    //      {
    //      this.props.updateState(response.data);
    //      this.props.closeModal();
    //      }
    //     }
     // );

     axios({
        method: 'post',
        url: 'http://dcfc0f8d.ngrok.io/TSM/test/add',
        data: {
            testcaseTitle: this.state.projectTitle,
            testcaseDescription: this.state.testcaseDescription,
            sprintReference: this.state.sprintReference,
            prerequisites: this.state.prerequisites,
            steps: this.state.steps,
            expectedOutput: this.state.expectedOutput, 
            typeId: this.state.typeId,
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
        this.setState({
            testcaseTitle: this.state.projectTitle,
            testcaseDescription: this.state.testcaseDescription,
            prerequisites: this.state.prerequisites,
            steps: this.state.steps,
            expectedOutput: this.state.ExpectedOutput,
            sprintReference: this.state.sprintReference,
            typeId: this.state.typeId,
        });
        this.setState({
            visible: false,
            
        });

        // this.props.form.validatefields((err, values) => {
        //  projectTitle   if (!err) {
        //         console.log('Received values of form:', values);
        //     }
        // })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    // handleOk = e => {
    //     e.preventDefault();
    //     console.log(e);
    //     this.setState({
    //         projectTitle: "",
    //         Description: "",
    //         Precondition: "",
    //         Steps: "",
    //         ExpectedOutput: "",
    //         Sprint: "",
    //         //Type: "",
    //     })
    //     this.setState({
    //         visible: false,
    //         //disabled: hasErrors(getFieldsError())
    //     },);
        
    // };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
            testcaseTitle: "",
            testcaseDescription: "",
            prerequisites: "",
            steps: "",
            expectedOutput: "",
            sprintReference: "",
            typeId:""
        });
    };
    render() {
        //const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        //const Viewalltestcase = Form.create()(Viewalltestcase);
        const { TextArea } = Input;
        const InputGroup = Input.Group;
        const { Option } = Select;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const titleError = isFieldTouched('name') && getFieldError('name');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const preconditionError = isFieldTouched('precondition') && getFieldError('precondition');
        const stepsError = isFieldTouched('steps') && getFieldError('steps');
        const outputError = isFieldTouched('expectedoutput') && getFieldError('expectedoutput');
        const sprintError = isFieldTouched('sprint') && getFieldError('sprint');
        const typeError = isFieldTouched('type') && getFieldError('type');
        return (
            <div>

                <Button type="primary" onClick={this.showModal}>
                    Create Testcase
        </Button>

                <Modal
                    title="Create Testcase"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <div>
                        <Form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={titleError ? 'error' : ''} help={titleError || ''} hasFeedback >
                                    {getFieldDecorator('name', {
                                        rules: [
                                            { required: true, message: 'Please enter the title!',validateTrigger:"onBlur" },
                                        { min: 1, message: 'Please enter the description!',validateTrigger:"onBlur" },          
                                    ]
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="name"
                                            className="form-control"
                                            //onClick ={this.validatetitle}
                                            style={{ width: "790px" }}
                                            value={this.state.testcaseTitle}
                                            onChange={e => this.setState({ testcaseTitle: e.target.value })}  
                                        />
                                    )}
                                </Form.Item>
                            </div>

                            <div>
                                <label>Description:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''} hasFeedback >
                                    {getFieldDecorator('description', {
                                        rules: [{ required: true, message: 'Please enter the description!',validateTrigger:"onBlur" },
                                        { min: 1, message: 'Please enter the description!',validateTrigger:"onBlur" },
                                        { required: false, message: 'Please enter the description!',validateTrigger:false },
                                    ],
                                    })(
                                        <TextArea rows={4} placeholder="description"
                                            value={this.state.testcaseDescription}
                                            onChange={e => this.setState({ testcaseDescription: e.target.value })}    
                                        />,
                                    )}
                                </Form.Item>
                            </div>
                            <br />
                            <div className="flex-container">
                                <label>Type:</label>
                                <Form.Item validateStatus={typeError ? 'error' : ''} help={typeError || ''} hasFeedback >
                                    {getFieldDecorator('type', {
                                        initialValue: "Select",
                                        rules: [{ required: true, message: 'Please enter the type' ,validateTrigger:"onBlur"},
                                        { value: "", message: 'Please enter the description!',validateTrigger:"onBlur" },  
                                    ],
                                    })(
                                        <InputGroup >
                                            <Select defaultValue="Select" style={{ marginLeft: "10px" }}
                                               
                                              onChange={e => this.setState({ typeId: e.target.value })}
                                            >
                                                <Option value="Select">Select</Option>
                                                <Option value="Funtional">Funtional</Option>
                                                <Option value="Non-Funtional">Non-Funtional</Option>
                                                <Option value="Regression">Regression</Option>
                                                <Option value="Sanity">Sanity</Option>
                                                <Option value="Smoke">Smoke</Option>
                                            </Select>
                                        </InputGroup>  
                                    )}
                                </Form.Item>
                                <div style={{ paddingLeft: "350px", display:"inline-block" }}>
                                <label>Sprint Reference:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={sprintError ? 'error' : ''} help={sprintError || ''} hasFeedback >
                                    {getFieldDecorator('sprint', { 
                                        rules: [{ required: true, message: 'Please enter the sprint' ,validateTrigger:"onBlur"},
                                        { min:1 , message: 'Please enter the sprint' ,validateTrigger:"onBlur"}
                                    ],
                                    })(
                                        <Input
                                            type="text"
                                            placeholder="sprint "
                                            className="form-control"
                                            value={this.state.sprintReference}
                                            onChange={e => this.setState({ sprintReference: e.target.value })}
                                        />,
                                    )}
                                </Form.Item>
                                </div>
                            </div>
                            <div>
                                <label>Pre-condition:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={preconditionError ? 'error' : ''} help={preconditionError || ''} hasFeedback >
                                    {getFieldDecorator('precondition', {
                                        rules: [{ required: true, message: 'Please enter the condition',validateTrigger:"onBlur" },
                                        { min: 1, message: 'Please enter the condition',validateTrigger:"onBlur" }],
                                    })(
                                        <TextArea rows={4} placeholder="precondition "
                                            value={this.state.prerequisites}
                                            onChange={e => this.setState({ prerequisites: e.target.value })}  
                                        />,
                                    )}
                                </Form.Item>
                            </div>
                            <div>
                                <label>Steps:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={stepsError ? 'error' : ''} help={stepsError || ''} hasFeedback >
                                    {getFieldDecorator('steps', { 
                                        rules: [{ required: true,validateTrigger:"onBlur", message: 'Please enter the steps' },
                                        { min: 1,validateTrigger:"onBlur", message: 'Please enter the steps' }
                                    ],
                                    })(
                                        <TextArea rows={4} placeholder="steps "
                                            value={this.state.steps}
                                            onChange={e => this.setState({ steps: e.target.value })}    
                                        />,
                                    )}
                                </Form.Item>
                            </div>
                            <div>
                                <label>Expected Output:</label>
                                &nbsp;&nbsp;
                                <Form.Item validateStatus={outputError ? 'error' : ''} help={outputError || ''} hasFeedback >
                                    {getFieldDecorator('expectedoutput', {
                                        rules: [{ required: true,  message: 'Please enter the expected output',validateTrigger:"onBlur", },
                                        { min:1,  message: 'Please enter the expected output',validateTrigger:"onBlur", }],
                                    })(
                                        <TextArea rows={4} placeholder="expectedoutput "
                                            value={this.state.expectedOutput}
                                            onChange={e => this.setState({ expectedOutput: e.target.value })}  
                                        />,
                                    )}
                                </Form.Item>
                            </div>
                             <Button type="primary" onClick ={this.handleSubmit}>Submit</Button>
                             &nbsp;&nbsp;&nbsp;
                             <Button type="secondary" onClick={this.handleCancel}>Cancel</Button>  
                        </Form>
                    </div>
                </Modal>
            </div>
        )
    }

}

const WrappedLogin = Form.create()(Viewalltestcase)
export default WrappedLogin;
//const Viewalltestcase = Form.create()(Viewalltestcase);