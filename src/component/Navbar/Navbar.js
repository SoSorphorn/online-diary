import React,{Component} from 'react'
import {translate} from 'react-i18next'
import classnames from 'classnames'

class Navbar extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: '',
      language: 'en'
    }
  }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  
  handleSubmit = (event) => {
    alert('Search Successfully')
    event.preventDefault()
  }

  handleChangeLanguage = (lng) => {
    const {i18n} = this.props
    i18n.changeLanguage(lng)
    this.setState({
      language: lng
    })
  }

  render(){
    const {t} = this.props
    const {language} = this.state
    return(
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button id="minimizeSidebar" className="btn btn-just-icon btn-white btn-fab btn-round">
                <i className="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
                <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">{t('dashboard')}</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
            <span className="navbar-toggler-icon icon-bar" />
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form" onSubmit={this.handleSubmit}>
              <div className="input-group no-border">
                <input type="text" className="form-control" placeholder="Search..."  value={this.state.value} onChange={this.handleChange}/>
                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container" />
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#pablo" id="navbarDropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">language</i>
                  <p className="d-lg-none d-md-block">
                    Language
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownLanguage">
                  <option value="kh" className={classnames('dropdown-item', {'active':  language == "kh"})}  onClick={() => this.handleChangeLanguage('kh')}>
                      kh
                  </option>
                  <option value="en" className={classnames('dropdown-item', {'active':  language == "en"})} onClick={() => this.handleChangeLanguage('en')}>
                      en
                  </option>
                </div>
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
    )
  }  
}

export default  translate('translations')(Navbar)