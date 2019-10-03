import React from "react";
import { Card, Table, CardColumns} from "react-bootstrap";
import Createproject from "./Createproject.js";
import { Link } from "react-router-dom";
import Editproject from "./Editproject.js";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import {Popconfirm, message } from 'antd'
import TSMaxios from "../Axios/TSMaxios.js";


export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: true,
      visible: 40,
      editContent: null,
      search: "",
      id: localStorage.getItem("tokenid"),
      details:null, 
      filterName: "",
      
      
    };

    this.loadMore = this.loadMore.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  
  }

  loadMore() {
    this.setState(prev => {
      return { visible: prev.visible + 8 };                                   // load more function 
    });
  }

   async userDetails(){

    const details = await TSMaxios.get(`/TSM/Login/list/`+ this.state.id );               //fetch method to display all projects
    this.setState({ details:details.data }, ()=> console.log("details", this.state.details));
  }

  async projectDetails(){
    const items = await TSMaxios.get(`/TSM/project/display/`+ this.state.id)
    this.setState({items: items.data}, ()=>console.log("projects", this.state.items))
  }
 
    
      async componentDidMount() {
      
        await this.projectDetails();
        await this.userDetails();
      // await this.accept();
  }
//    async componentWillUpdate(prevState){

// await this.projectDetails();

//    }

  
 

  deleteProject(id) {
    if (window.confirm("Are you sure want to delete?")) {                     // delete method to delete the paticular project
      fetch("https://cors-anywhere.herokuapp.com/http://dcfc0f8d.ngrok.io/TSM/project/delete/" + id +"/"+ this.state.id, {
        method: "DELETE"
      }).then(response => {
        if (response.status === 200) {
          alert("project deleted successfully");

          this.setState(prevState => {

            return {

              items: [...prevState.items.filter(e => e.id !== id)]

            }
          })

        }

      });
    }
  }

  
  handleSubmit = async data => {
    await fetch("https://cors-anywhere.herokuapp.com/http://dcfc0f8d.ngrok.io/TSM/project/edit/"+this.state.id, {                                 // handle submit taken fom editproject file using props
      method: "PUT",
      body: JSON.stringify({ ...data }),                               // put method in fetch to update state values 
      headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => {
      if (response.status === 200) {
        this.setState(prevState => {

          return {

            items: [...prevState.items.filter(e => e.id !== data.id)]

          }

        })

        this.setState(prevState => {

          return {
            addModal_Show: false,
            items: [...prevState.items, data]

          }

        })

      }
    });
  };
  addNewProject = (data) => {
    this.setState(prevState => ({
      items: [...prevState.items, data]
    }))
  }

  closeModal = () => {
    this.setState({ addModalShow: false });
  }
  onchange = e => {
    this.setState({ search: e.target.value })
  }
  // alertClicked(){
  //   //apicall
  
  // }



    accept=()=> {
    //apicall
    TSMaxios
    .post("/sendingEmail/"+this.state.id)
    .then(response => {
       console.log(response);
       if(response.status===200)
       {
        message.success('email sent');
       

       }
      }
    
    );
    
  }
  
cancel() {
    
    message.error(' email not sent');
  }
  
  render() {
    let addModalClose = () => this.setState({ addModalShow: false });              // modal function for create projet
    let addModal_Close = () => this.setState({ addModal_Show: false });  // modal function for edit project
    const { search, details} = this.state;
    var { isLoaded, items } = this.state;
    const filterName = items.filter(item => {
      if(item!==null){
      return (  item.projectTitle ||'').toLowerCase().indexOf(search.toLowerCase()) !== -1
     } })
    if (!isLoaded) {
      return <div>No Internet connection!</div>;
    } else {
      return (

        <section style={{ width: "100%" }}>
            
            {
          details!=null && (details.isAcceptedByAdmin === 1 ?
            <Button  style={{marginLeft:"75rem", marginTop:"1.875rem"}}

onClick={() => this.setState({ addModalShow: true })}
variant="primary"
>

<i class="fas fa-plus fa-1x"></i>
&nbsp;Add Project
</Button>
            :<Popconfirm 
            title="Curently you dont have acess to create project. Would you like to send a email request  to admin?"
             onConfirm={this.accept}
             onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Button style={{marginLeft:"75rem", marginTop:"1.875rem"}} href="#"><i class="fas fa-plus fa-1x"></i>
&nbsp;Add Project</Button>
          </Popconfirm> )
        }


           <br></br>
          <InputGroup size="sm" style={{ width: "600px", left: "420px" }}>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Search For Projects" aria-describedby="basic-addon1" onChange={this.onchange} />
          </InputGroup>
          <br></br>
                    
          <div className="column-layout">

            {/* <div  className="main-column"> */}
            <div className="main-column" style={{ padding: '30px' }}>

   
                      
                        <CardColumns>
                        {filterName.length!==0?filterName
                  .slice(0, this.state.visible)
                  .map(item => {
                    return (
                      <Card className="cardstyle" border="light" style={{ width: "24rem", height:"10rem" }}>
                        <Card.Body>
                          <Link to={`/project/${item.id}`}>
                            {" "}
                            <Card.Title key={item.id}>
                              {" "}
                              {item.projectTitle}
                            </Card.Title>{" "}
                          </Link>
                          
                          <Card.Text>{item.projectDescription}</Card.Text>
                          <Button
                            onClick={() => {
                              this.setState({
                                addModal_Show: true,
                                editContent: item
                              });
                            }}
                            size="sm"
                            variant=" outline-primary"
                          >
                            <i
                              class="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </Button>{" "}
                          &nbsp; &nbsp;
                        <Button
                            onClick={this.deleteProject.bind(this, item.id)}                          // calling delete fuction by id of project
                            size="sm"
                            variant=" outline-primary"
                          >
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                          </Button>{" "}
                          &nbsp; &nbsp;
                        <Link to={"/" + item.id}>
                            {" "}
                            <Button size="sm" variant=" outline-primary">
                              <i class="fas fa-arrow-right"></i>
                            </Button>{" "}
                          </Link>
                        </Card.Body>
                      </Card>
                       );
                      }):<p style={{ marginLeft:"5rem"}}>There are no projects to display</p>}
                    </CardColumns>
                    
                   
              
            </div>
            {/* <div className="part1"></div>
            <div className="part2"> </div> */}

          </div>

         <Createproject
            show={this.state.addModalShow}
            onHide={addModalClose}
            updateState={this.addNewProject}
            closeModal={this.closeModal}                            // show declared to open popup and onhide to close the popup
          />
          <Editproject
            data={this.state.editContent}
            show={this.state.addModal_Show}
            onHide={addModal_Close}
            onSubmit={this.handleSubmit}
          />
          

          {this.state.visible < this.state.items.length && (
            <Button
              className="load"
              onClick={this.loadMore}           // load more function declared to display only few projects
              type="button"

              variant="primary"
            >
              Load more
            </Button>
          )}
        </section>

      );
    }
  }
}
//testing