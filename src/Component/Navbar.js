import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Testrun from './Testrun.js';
import Testcase from './Testcase.js';
import Viewalltestcase from './Viewalltestcase.js';
import Overview from './Overview.js';
import './Display.css'

export default class Navbar extends Component {
 
  componentDidMount(){
    this.myFunction();
  }
    myFunction ()  {
    var header = document.getElementById("kites");
    var btns = header.getElementsByClassName("btn");
    var x = document.getElementById("myTopnav");
    if (x.className === "kites") {
      x.className += " responsive";
    } else {
      x.className = "kites";
    }
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
   }
  }

  render() {
    return (
      <div >
        <Router>
          <div >
            <h2>Testsuite management</h2>
            <nav className="navbar navbar-expand-lg navbar-light-blue bg-light" >
              <div className = "myTopnav" id="kites" >
              <ul className="navbar-nav mr-auto ">
                <li className="nav-item"><Link to={'/Dashboard'} onClick={this.myFunction} className="nav-link"><a className="btn active">Dashboard</a></Link></li>
                <li className="nav-item"><Link to={'/Overview'} onClick={this.myFunction}  className="nav-link" Primary><a className="btn">Overview</a></Link></li>
                <li className="nav-item"><Link to={'/Testcase'} onClick={this.myFunction} className="nav-link"><a className="btn">Testcase</a></Link></li>
                <li className="nav-item"><Link to={'/Testrun'} onClick={this.myFunction} className="nav-link"><a className="btn">Testrun</a></Link></li>
                <li className="nav-item"><Link to={'/Viewalltestcase'} onClick={this.myFunction} className="nav-link"><a className="btn">History</a></Link></li>
              </ul>
              </div>
            </nav>
            <hr />
            <Switch>
              <Route  path='/Dashboard' component={Dashboard} />
              <Route  path='/Overview' component={Overview} />
              <Route path='/Testcase' component={Testcase} />
              <Route path='/Testrun' component={Testrun} />
              <Route path='/Viewalltestcase' component={Viewalltestcase} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}
