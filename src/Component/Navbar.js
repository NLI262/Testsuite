import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';
import Testrun from './Testrun.js';
import Testcase from './Testcase.js';
import Viewalltestcase from './Viewalltestcase.js';
import Overview from './Overview.js';
import './Display.css'

export default class Navbar extends Component {
  render() {
    return (
      <div >
        <Router>
          <div >
            <h2>Testsuite management</h2>
            <nav className="navbar navbar-expand-lg navbar-light-blue bg-light" >
              <ul className="navbar-nav mr-auto">
                <li ><Link to={'/Dashboard'} className="nav-link"><a >Dashboard</a></Link></li>
                <li ><Link to={'/Overview'} className="nav-link" Primary><a>Overview</a></Link></li>
                <li ><Link to={'/Testcase'} className="nav-link"><a>Testcase</a></Link></li>
                <li ><Link to={'/Testrun'} className="nav-link"><a>Testrun</a></Link></li>
                <li ><Link to={'/Viewalltestcase'} className="nav-link"><a>History</a></Link></li>
              </ul>
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
