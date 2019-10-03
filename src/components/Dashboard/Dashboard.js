import React from "react";
import Display from "./Display.js";
 import Toolbar from "../Toolbar/Toolbar.js";
// import Sidedrawer from "../Sidedrawer/Sidedrawer.js";
import "./Dashboard.css";
import Footer from "../Footer/Footer"




export default class Dashboard extends React.Component {
  state = {
    sideDrawerOpen: true
  };

  // drawOpenClickHandler = () => {
  //   this.setState(prevState => {                                       //function for sidebar
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen };
  //   });
  // };

  render() {
    // let sideDrawerOpen;
    // if (this.state.sideDrawerOpen) {
    //   sideDrawerOpen = <Sidedrawer />;
    // }

    return (
      <div style={{ width: "100%", overflow:"hidden", margin: "0 auto" }}>
         <div> <Toolbar  /></div>
      
          
           <div style={{ marginTop: "3rem" }}> 

          <Display />
           </div> 
       
          
        
      
         <Footer/>   
      </div>
    );
  }
}
