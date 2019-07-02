import React,{Component} from 'react'
import Sidebar from '../component/Sidebar/Sidebar'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
export default class Dashboard extends Component{
  render(){
    return(
      <div className="wrapper">
        <Sidebar/>
        <div className="main-panel" >
          <Navbar/>
          <div className="content">
            <div className="container-fluid">
              <div className="header text-center">
                <h3 className="title">Calendar</h3>
              </div>
              <div className="row">
                <div className="col-md-10 ml-auto mr-auto">
                  <div className="card card-calendar">
                    <div className="card-body ">
                      <div id="fullCalendar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    )
  }
}