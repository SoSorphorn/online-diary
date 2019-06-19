import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './component/Sidebar/Sidebar'
import Register from './container/Register/Register'
import Login from './container/Login/Login'

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Switch>
              <Route exact path='/' component={Sidebar}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

  

