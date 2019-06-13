import React,{Component} from 'react'

class Sidebar extends Component{
  render(){
    return(
      <>
        <div className="wrapper ">
          <div className="sidebar" data-color="rose" data-background-color="black" data-image="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="http://www.creative-tim.com/" className="simple-text logo-mini">
                CT
              </a>
              <a href="http://www.creative-tim.com/" className="simple-text logo-normal">
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <div className="user">
                <div className="photo">
                  <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg" />
                </div>
                <div className="user-info">
                  <a data-toggle="collapse" href="#collapseExample" className="username">
                    <span>
                      Tania Andrew
                      <b className="caret" />
                    </span>
                  </a>
                  <div className="collapse" id="collapseExample">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"> MP </span>
                          <span className="sidebar-normal"> My Profile </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"> EP </span>
                          <span className="sidebar-normal"> Edit Profile </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"> S </span>
                          <span className="sidebar-normal"> Settings </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav">
                <li className="nav-item active ">
                  <a className="nav-link" href="dashboard.html">
                    <i className="material-icons">dashboard</i>
                    <p> Dashboard </p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
                    <i className="material-icons">image</i>
                    <p> Pages
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="pagesExamples">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/pricing.html">
                          <span className="sidebar-mini"> P </span>
                          <span className="sidebar-normal"> Pricing </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/rtl.html">
                          <span className="sidebar-mini"> RS </span>
                          <span className="sidebar-normal"> RTL Support </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/timeline.html">
                          <span className="sidebar-mini"> T </span>
                          <span className="sidebar-normal"> Timeline </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/login.html">
                          <span className="sidebar-mini"> LP </span>
                          <span className="sidebar-normal"> Login Page </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/register.html">
                          <span className="sidebar-mini"> RP </span>
                          <span className="sidebar-normal"> Register Page </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/lock.html">
                          <span className="sidebar-mini"> LSP </span>
                          <span className="sidebar-normal"> Lock Screen Page </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/user.html">
                          <span className="sidebar-mini"> UP </span>
                          <span className="sidebar-normal"> User Profile </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="pages/error.html">
                          <span className="sidebar-mini"> E </span>
                          <span className="sidebar-normal"> Error Page </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#componentsExamples">
                    <i className="material-icons">apps</i>
                    <p> Components
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="componentsExamples">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" data-toggle="collapse" href="#componentsCollapse">
                          <span className="sidebar-mini"> MLT </span>
                          <span className="sidebar-normal"> Multi Level Collapse
                            <b className="caret" />
                          </span>
                        </a>
                        <div className="collapse" id="componentsCollapse">
                          <ul className="nav">
                            <li className="nav-item ">
                              <a className="nav-link" href="#0">
                                <span className="sidebar-mini"> E </span>
                                <span className="sidebar-normal"> Example </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/buttons.html">
                          <span className="sidebar-mini"> B </span>
                          <span className="sidebar-normal"> Buttons </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/grid.html">
                          <span className="sidebar-mini"> GS </span>
                          <span className="sidebar-normal"> Grid System </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/panels.html">
                          <span className="sidebar-mini"> P </span>
                          <span className="sidebar-normal"> Panels </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/sweet-alert.html">
                          <span className="sidebar-mini"> SA </span>
                          <span className="sidebar-normal"> Sweet Alert </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/notifications.html">
                          <span className="sidebar-mini"> N </span>
                          <span className="sidebar-normal"> Notifications </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/icons.html">
                          <span className="sidebar-mini"> I </span>
                          <span className="sidebar-normal"> Icons </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="components/typography.html">
                          <span className="sidebar-mini"> T </span>
                          <span className="sidebar-normal"> Typography </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#formsExamples">
                    <i className="material-icons">content_paste</i>
                    <p> Forms
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="formsExamples">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" href="forms/regular.html">
                          <span className="sidebar-mini"> RF </span>
                          <span className="sidebar-normal"> Regular Forms </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="forms/extended.html">
                          <span className="sidebar-mini"> EF </span>
                          <span className="sidebar-normal"> Extended Forms </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="forms/validation.html">
                          <span className="sidebar-mini"> VF </span>
                          <span className="sidebar-normal"> Validation Forms </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="forms/wizard.html">
                          <span className="sidebar-mini"> W </span>
                          <span className="sidebar-normal"> Wizard </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#tablesExamples">
                    <i className="material-icons">grid_on</i>
                    <p> Tables
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="tablesExamples">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" href="tables/regular.html">
                          <span className="sidebar-mini"> RT </span>
                          <span className="sidebar-normal"> Regular Tables </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="tables/extended.html">
                          <span className="sidebar-mini"> ET </span>
                          <span className="sidebar-normal"> Extended Tables </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="tables/datatables.net.html">
                          <span className="sidebar-mini"> DT </span>
                          <span className="sidebar-normal"> DataTables.net </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#mapsExamples">
                    <i className="material-icons">place</i>
                    <p> Maps
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="mapsExamples">
                    <ul className="nav">
                      <li className="nav-item ">
                        <a className="nav-link" href="maps/google.html">
                          <span className="sidebar-mini"> GM </span>
                          <span className="sidebar-normal"> Google Maps </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="maps/fullscreen.html">
                          <span className="sidebar-mini"> FSM </span>
                          <span className="sidebar-normal"> Full Screen Map </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link" href="maps/vector.html">
                          <span className="sidebar-mini"> VM </span>
                          <span className="sidebar-normal"> Vector Map </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="widgets.html">
                    <i className="material-icons">widgets</i>
                    <p> Widgets </p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="charts.html">
                    <i className="material-icons">timeline</i>
                    <p> Charts </p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="calendar.html">
                    <i className="material-icons">date_range</i>
                    <p> Calendar </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <div className="navbar-minimize">
                    <button id="minimizeSidebar" className="btn btn-just-icon btn-white btn-fab btn-round">
                      <i className="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
                      <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
                    </button>
                  </div>
                  <a className="navbar-brand" href="#pablo">Dashboard</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon icon-bar" />
                  <span className="navbar-toggler-icon icon-bar" />
                  <span className="navbar-toggler-icon icon-bar" />
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                  <form className="navbar-form">
                    <div className="input-group no-border">
                      <input type="text" defaultValue className="form-control" placeholder="Search..." />
                      <button type="submit" className="btn btn-white btn-round btn-just-icon">
                        <i className="material-icons">search</i>
                        <div className="ripple-container" />
                      </button>
                    </div>
                  </form>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#pablo">
                        <i className="material-icons">dashboard</i>
                        <p className="d-lg-none d-md-block">
                          Stats
                        </p>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="http://example.com/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">notifications</i>
                        <span className="notification">5</span>
                        <p className="d-lg-none d-md-block">
                          Some Actions
                        </p>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Mike John responded to your email</a>
                        <a className="dropdown-item" href="#">You have 5 new tasks</a>
                        <a className="dropdown-item" href="#">You're now friend with Andrew</a>
                        <a className="dropdown-item" href="#">Another Notification</a>
                        <a className="dropdown-item" href="#">Another One</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#pablo" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="material-icons">person</i>
                        <p className="d-lg-none d-md-block">
                          Account
                        </p>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                        <a className="dropdown-item" href="#">Profile</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Log out</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card ">
                        <div className="card-header card-header-success card-header-icon">
                          <div className="card-icon">
                            <i className="material-icons"></i>
                          </div>
                          <h4 className="card-title">Global Sales by Top Locations</h4>
                        </div>
                        <div className="card-body ">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="table-responsive table-sales">
                                <table className="table">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/US.png"/>
                                        </div></td>
                                      <td>USA</td>
                                      <td className="text-right">
                                        2.920
                                      </td>
                                      <td className="text-right">
                                        53.23%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/DE.png"/>
                                        </div></td>
                                      <td>Germany</td>
                                      <td className="text-right">
                                        1.300
                                      </td>
                                      <td className="text-right">
                                        20.43%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/AU.png"/>
                                        </div></td>
                                      <td>Australia</td>
                                      <td className="text-right">
                                        760
                                      </td>
                                      <td className="text-right">
                                        10.35%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/GB.png"/>
                                        </div></td>
                                      <td>United Kingdom</td>
                                      <td className="text-right">
                                        690
                                      </td>
                                      <td className="text-right">
                                        7.87%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/RO.png"/>
                                        </div></td>
                                      <td>Romania</td>
                                      <td className="text-right">
                                        600
                                      </td>
                                      <td className="text-right">
                                        5.94%
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div className="flag">
                                          <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/flags/BR.png"/>
                                        </div></td>
                                      <td>Brasil</td>
                                      <td className="text-right">
                                        550
                                      </td>
                                      <td className="text-right">
                                        4.34%
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div className="col-md-6 ml-auto mr-auto">
                              <div id="worldMap" style={{height: '300px'}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card card-chart">
                        <div className="card-header card-header-rose" data-header-animation="true">
                          <div className="ct-chart" id="websiteViewsChart" />
                        </div>
                        <div className="card-body">
                          <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-info btn-link" rel="tooltip" data-placement="bottom" title="Refresh">
                              <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="Change Date">
                              <i className="material-icons">edit</i>
                            </button>
                          </div>
                          <h4 className="card-title">Website Views</h4>
                          <p className="card-category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">access_time</i> campaign sent 2 days ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-chart">
                        <div className="card-header card-header-success" data-header-animation="true">
                          <div className="ct-chart" id="dailySalesChart" />
                        </div>
                        <div className="card-body">
                          <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-info btn-link" rel="tooltip" data-placement="bottom" title="Refresh">
                              <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="Change Date">
                              <i className="material-icons">edit</i>
                            </button>
                          </div>
                          <h4 className="card-title">Daily Sales</h4>
                          <p className="card-category">
                            <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.</p>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">access_time</i> updated 4 minutes ago
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-chart">
                        <div className="card-header card-header-info" data-header-animation="true">
                          <div className="ct-chart" id="completedTasksChart" />
                        </div>
                        <div className="card-body">
                          <div className="card-actions">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-info btn-link" rel="tooltip" data-placement="bottom" title="Refresh">
                              <i className="material-icons">refresh</i>
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="Change Date">
                              <i className="material-icons">edit</i>
                            </button>
                          </div>
                          <h4 className="card-title">Completed Tasks</h4>
                          <p className="card-category">Last Campaign Performance</p>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">access_time</i> campaign sent 2 days ago
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card card-stats">
                        <div className="card-header card-header-warning card-header-icon">
                          <div className="card-icon">
                            <i className="material-icons">weekend</i>
                          </div>
                          <p className="card-category">Bookings</p>
                          <h3 className="card-title">184</h3>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons text-danger">warning</i>
                            <a href="#pablo">Get More Space...</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card card-stats">
                        <div className="card-header card-header-rose card-header-icon">
                          <div className="card-icon">
                            <i className="material-icons">equalizer</i>
                          </div>
                          <p className="card-category">Website Visits</p>
                          <h3 className="card-title">75.521</h3>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">local_offer</i> Tracked from Google Analytics
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card card-stats">
                        <div className="card-header card-header-success card-header-icon">
                          <div className="card-icon">
                            <i className="material-icons">store</i>
                          </div>
                          <p className="card-category">Revenue</p>
                          <h3 className="card-title">$34,245</h3>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">date_range</i> Last 24 Hours
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card card-stats">
                        <div className="card-header card-header-info card-header-icon">
                          <div className="card-icon">
                            <i className="fa fa-twitter" />
                          </div>
                          <p className="card-category">Followers</p>
                          <h3 className="card-title">+245</h3>
                        </div>
                        <div className="card-footer">
                          <div className="stats">
                            <i className="material-icons">update</i> Just Updated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3>Manage Listings</h3>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card card-product">
                        <div className="card-header card-header-image" data-header-animation="true">
                          <a href="#pablo">
                            <img className="img" src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg" />
                          </a>
                        </div>
                        <div className="card-body">
                          <div className="card-actions text-center">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="View">
                              <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-link" rel="tooltip" data-placement="bottom" title="Edit">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-link" rel="tooltip" data-placement="bottom" title="Remove">
                              <i className="material-icons">close</i>
                            </button>
                          </div>
                          <h4 className="card-title">
                            <a href="#pablo">Cozy 5 Stars Apartment</a>
                          </h4>
                          <div className="card-description">
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="price">
                            <h4>$899/night</h4>
                          </div>
                          <div className="stats">
                            <p className="card-category"><i className="material-icons">place</i> Barcelona, Spain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-product">
                        <div className="card-header card-header-image" data-header-animation="true">
                          <a href="#pablo">
                            <img className="img" src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-3.jpg" />
                          </a>
                        </div>
                        <div className="card-body">
                          <div className="card-actions text-center">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="View">
                              <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-link" rel="tooltip" data-placement="bottom" title="Edit">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-link" rel="tooltip" data-placement="bottom" title="Remove">
                              <i className="material-icons">close</i>
                            </button>
                          </div>
                          <h4 className="card-title">
                            <a href="#pablo">Office Studio</a>
                          </h4>
                          <div className="card-description">
                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="price">
                            <h4>$1.119/night</h4>
                          </div>
                          <div className="stats">
                            <p className="card-category"><i className="material-icons">place</i> London, UK</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card card-product">
                        <div className="card-header card-header-image" data-header-animation="true">
                          <a href="#pablo">
                            <img className="img" src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg" />
                          </a>
                        </div>
                        <div className="card-body">
                          <div className="card-actions text-center">
                            <button type="button" className="btn btn-danger btn-link fix-broken-card">
                              <i className="material-icons">build</i> Fix Header!
                            </button>
                            <button type="button" className="btn btn-default btn-link" rel="tooltip" data-placement="bottom" title="View">
                              <i className="material-icons">art_track</i>
                            </button>
                            <button type="button" className="btn btn-success btn-link" rel="tooltip" data-placement="bottom" title="Edit">
                              <i className="material-icons">edit</i>
                            </button>
                            <button type="button" className="btn btn-danger btn-link" rel="tooltip" data-placement="bottom" title="Remove">
                              <i className="material-icons">close</i>
                            </button>
                          </div>
                          <h4 className="card-title">
                            <a href="#pablo">Beautiful Castle</a>
                          </h4>
                          <div className="card-description">
                            The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="price">
                            <h4>$459/night</h4>
                          </div>
                          <div className="stats">
                            <p className="card-category"><i className="material-icons">place</i> Milan, Italy</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer">
              <div className="container-fluid">
                <nav className="float-left">
                  <ul>
                    <li>
                      <a href="https://www.creative-tim.com/">
                        Creative Tim
                      </a>
                    </li>
                    <li>
                      <a href="https://creative-tim.com/presentation">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://blog.creative-tim.com/">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="https://www.creative-tim.com/license">
                        Licenses
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright float-right">
                  ©
                  , made with <i className="material-icons">favorite</i> by
                  <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a> for a better web.
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="fixed-plugin">
          <div className="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
              <i className="fa fa-cog fa-2x"> </i>
            </a>
            <ul className="dropdown-menu">
              <li className="header-title"> Sidebar Filters</li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger active-color">
                  <div className="badge-colors ml-auto mr-auto">
                    <span className="badge filter badge-purple" data-color="purple" />
                    <span className="badge filter badge-azure" data-color="azure" />
                    <span className="badge filter badge-green" data-color="green" />
                    <span className="badge filter badge-warning" data-color="orange" />
                    <span className="badge filter badge-danger" data-color="danger" />
                    <span className="badge filter badge-rose active" data-color="rose" />
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="header-title">Sidebar Background</li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger background-color">
                  <div className="ml-auto mr-auto">
                    <span className="badge filter badge-black active" data-background-color="black" />
                    <span className="badge filter badge-white" data-background-color="white" />
                    <span className="badge filter badge-red" data-background-color="red" />
                  </div>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger">
                  <p>Sidebar Mini</p>
                  <label className="ml-auto">
                    <div className="togglebutton switch-sidebar-mini">
                      <label>
                        <input type="checkbox" />
                        <span className="toggle" />
                      </label>
                    </div>
                  </label>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="adjustments-line">
                <a href="javascript:void(0)" className="switch-trigger">
                  <p>Sidebar Images</p>
                  <label className="switch-mini ml-auto">
                    <div className="togglebutton switch-sidebar-image">
                      <label>
                        <input type="checkbox" defaultChecked />
                        <span className="toggle" />
                      </label>
                    </div>
                  </label>
                  <div className="clearfix" />
                </a>
              </li>
              <li className="header-title">Images</li>
              <li className="active">
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg"/>
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-2.jpg"/>
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-3.jpg"/>
                </a>
              </li>
              <li>
                <a className="img-holder switch-trigger" href="javascript:void(0)">
                  <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-4.jpg"/>
                </a>
              </li>
              <li className="button-container">
                <a href="https://www.creative-tim.com/product/material-dashboard-pro" target="_blank" className="btn btn-rose btn-block btn-fill">Buy Now</a>
                <a href="https://demos.creative-tim.com/material-dashboard-pro/docs/2.1/getting-started/introduction.html" target="_blank" className="btn btn-default btn-block">
                  Documentation
                </a>
                <a href="https://www.creative-tim.com/product/material-dashboard" target="_blank" className="btn btn-info btn-block">
                  Get Free Demo!
                </a>
              </li>
              <li className="button-container github-star">
                <a className="github-button" href="https://github.com/creativetimofficial/ct-material-dashboard-pro" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a>
              </li>
              <li className="header-title">Thank you for 95 shares!</li>
              <li className="button-container text-center">
                <button id="twitter" className="btn btn-round btn-twitter"><i className="fa fa-twitter" /> · 45</button>
                <button id="facebook" className="btn btn-round btn-facebook"><i className="fa fa-facebook-f" /> · 50</button>
                <br />
                <br />
              </li>
            </ul>
          </div>
        </div>

      </>
    ) 
  }
}

export default Sidebar