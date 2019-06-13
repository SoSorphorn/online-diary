import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TranslateForm from './container/TranslateForm'
import Sidebar from './component/Sidebar'
// import 'semantic-ui-css/semantic.min.css'
// import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <Router>
        <div className="App">
          {/* <div className="container-fluid" style={{paddingLeft: 0, paddingRight: 0, marginRight: 0, marginLeft: 0}}> */}
          <div className="container-fluid">
            <Switch>
              <Route exact path='/translateForm' component={TranslateForm} />
              <Route exact path='/' component={Sidebar}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

  

