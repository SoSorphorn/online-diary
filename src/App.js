import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Register from './container/Register/Register'
import Login from './container/Login/Login'
import Dashboard from './container/Dashboard/Dashboard'
import Calendar from './container/Calendar'
export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/calendar' component={Calendar}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

  

