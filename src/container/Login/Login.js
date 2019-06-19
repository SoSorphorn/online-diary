import React, { Component } from 'react'
// import Button from '@material-ui/core/Button'

class Login extends Component {
  render () {
    return (
      <div className="container" style={{marginTop: 150}}>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
          <form className="form" method action="#">
            <div className="card card-login card-hidden">
              <div className="card-header card-header-rose text-center">
                <h4 className="card-title">Login</h4>
                <div className="social-line">
                  <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                    <i className="fa fa-facebook-square" />
                  </a>
                  <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#pablo" className="btn btn-just-icon btn-link btn-white">
                    <i className="fa fa-google-plus" />
                  </a>
                </div>
              </div>
              <div className="card-body ">
                <p className="card-description text-center">Or Be Classical</p>
                <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">email</i>
                      </span>
                    </div>
                    <input type="email" className="form-control" placeholder="Email..." />
                  </div>
                </span>
                <span className="bmd-form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="material-icons">lock_outline</i>
                      </span>
                    </div>
                    <input type="password" className="form-control" placeholder="Password..." />
                  </div>
                </span>
              </div>
              <div className="card-footer justify-content-center">
                <button type="button" class="btn btn-social btn-fill btn-twitter">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    )
  }
}

export default Login