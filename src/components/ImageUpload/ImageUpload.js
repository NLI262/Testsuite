import React, {Component} from 'react';
import Toolbar from "../Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import {storage} from '../Firebase/index';
import {Row, Col, Container, Image} from 'react-bootstrap';
import { Button} from 'antd';
import "./Editform.css";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
            console.log(url);
            this.setState({url});
        })
    });
  }
  render() {
    const style = {
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div>
        <Toolbar/>
      <div style={style}>
      <Container>
  <Row>
    <Col sm={6}>
       <Image src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="150" width="150" roundedCircle/>
       <br></br>
       <br></br>
       <progress value={this.state.progress} max="100"/>
        <hr/>

        <input type="file" onChange={this.handleChange}/>
        <Button variant ="primary"onClick={this.handleUpload}>Upload</Button>
      </Col>
      <Col sm={1} style={{  borderLeft: "1px solid grey"
  ,height: "auto"}}></Col>
    <Col sm={5}>
 <div className="floating-form">
    <div className="floating-label">      
      <input className="floating-input" type="text" placeholder=" "/>
      <span className="highlight"></span>
      <label>Username</label>
      </div>
      <div className="floating-label">      
      <input className="floating-input" type="text" placeholder=" "/>
      <span className="highlight"></span>
      <label>Text</label>
      </div>
      <div className="floating-label">      
      <input className="floating-input" type="text" placeholder=" "/>
      <span className="highlight"></span>
      <label>Text</label>
      </div>
    </div>
 </Col>
  </Row>
  </Container>
      </div>
      <Footer/>
      </div>
    )
  }
}

export default ImageUpload;