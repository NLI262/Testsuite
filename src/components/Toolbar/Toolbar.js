import React from "react";
import {Image, Button} from "react-bootstrap";
import "./Toolbar.css";
import Ninesuite from './nine.png'
// import Togglebutton from "../Togglebutton/Togglebutton";

var firebase = require("firebase");

var x = localStorage.getItem("username");
var y = localStorage.getItem("display");
console.log(y);

const toolbar = props => (
  <div>
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div>
        {" "}
        {/* <Togglebutton click={props.drawerClickHandler} /> */}
      </div>
      <div className="toolbar__logo">
       
        <img className="image" src={Ninesuite} alt="nine suite"/>
        <a href="/dashboard">TEST SUITE MANAGEMENT</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li> <Button  ><i class="fas fa-bell"></i></Button></li>
          <li>
        <a href="/user">  <Image style={{width:"40px", height:"40px",boxShadow:"1px 1px 2px #000000" }} src={y} roundedCircle /> </a>
          </li>
          <li style={{textShadow:"2px 2px 4px #000000" }}>
            {x}
          </li>
          <li>
            <a href="/testcase" >Help</a>
          </li>
          &nbsp;
          <li>
            <a onClick={() => firebase.auth().signOut() }href="/"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  </div>
);

export default toolbar;
