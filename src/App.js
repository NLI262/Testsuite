import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
//import Overview from './Component/Overview.js';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
export default class App extends Component {

  render(){
  return (
   
    <div className = "file">
       <BrowserRouter>
          <Navbar />
        </BrowserRouter>
        <Footer />
    </div>
  );
  }
}


