import React,{Component} from 'react'
import CustomSidbarColor from '../FixedPlugin/CustomSidbarColor'
import profile from '../../asset/img/sosorphorn.jpg'
import noted from '../../asset/img/noted.jpg'
import {translate} from 'react-i18next'
import classnames from 'classnames'

class Sidebar extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeItem: 'dashboard'
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const {t} = this.props
    const {activeItem} = this.state
    return(
      <>
        <div className="sidebar" data-color="rose" data-background-color="black" data-image="https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg">
            <div className="logo">
              <a href="" className="simple-text logo-mini">
                <img src={noted} style={{width: "100%"}}/>
              </a>
              <a href="" className="simple-text logo-normal">
                {t('onlineDiary')}
              </a>
            </div>
            <div className="sidebar-wrapper">
              <div className="user">
                <div className="photo">
                  <img src={profile} />
                </div>
                <div className="user-info">
                  <a data-toggle="collapse" href="#username" className="username">
                    <span>
                        {t('username')}
                      <b className="caret" />
                    </span>
                  </a>
                  <div className="collapse" id="username">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"><i className="material-icons">account_circle</i></span>
                          <span className="sidebar-normal"> My Profile </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"><i className="material-icons">edit</i></span>
                          <span className="sidebar-normal"> Edit Profile </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="sidebar-mini"><i className="material-icons">settings</i></span>
                          <span className="sidebar-normal"> Settings </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="nav">
                <li name='dashboard' className={classnames('nav-item', {'active':  activeItem == "dashboard"})} onClick={this.handleItemClick} >
                  <a className="nav-link" href="/">
                    <i className="material-icons">dashboard</i>
                    <p> {t('dashboard')}</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" data-toggle="collapse" href="#notebook">
                    <i className="material-icons">library_books</i>
                    <p> 
                      {t('notebook')}
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="notebook">
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
                  <a className="nav-link" data-toggle="collapse" href="#saving">
                    <i className="material-icons">account_balance</i>
                    <p> 
                      {t('saving')}
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="saving">
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
                  <a className="nav-link" data-toggle="collapse" href="#expense">
                    <i className="material-icons">payment</i>
                    <p> 
                      {t('expense')}
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="expense">
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
                  <a className="nav-link" data-toggle="collapse" href="#invest">
                    <i className="material-icons">attach_money</i>
                    <p> 
                      {t('investment')}
                      <b className="caret" />
                    </p>
                  </a>
                  <div className="collapse" id="invest">
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
                  <a className="nav-link" href="charts.html">
                    <i className="material-icons">timeline</i>
                    <p>{t('chart')}</p>
                  </a>
                </li>
                <li name='calendar' className={classnames('nav-item', {'active':  activeItem == "calendar"})} onClick={this.handleItemClick}>
                  <a className="nav-link" href="/calendar">
                    <i className="material-icons">date_range</i>
                    <p>{t('calendar')}</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        <CustomSidbarColor/>
      </>
    ) 
  }
}

export default translate('translations')(Sidebar)