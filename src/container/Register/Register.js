import React, { Component } from 'react'

class Register extends Component {
  render () {
    return (
      <div className="content" style={{marginTop: "150px"}}>
        <div className="container-fluid">
          <div className="col-md-8 col-12 mr-auto ml-auto">
            {/*      Wizard container        */}
            <div className="wizard-container">
              <div className="card card-wizard" data-color="rose" id="wizardProfile">
                <form action="#" method>
                  {/*        You can switch " data-color="primary" "  with one of the next bright colors: "green", "orange", "red", "blue"       */}
                  <div className="card-header text-center">
                    <h3 className="card-title">
                      Registration
                    </h3>
                  </div>
                  <div className="wizard-navigation">
                    <ul className="nav nav-pills">
                      <li className="nav-item">
                        <a className="nav-link active" href="#about" data-toggle="tab" role="tab">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#address" data-toggle="tab" role="tab">
                          Address
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="tab-pane active" id="about">
                        <div className="row justify-content-center">
                          <div className="col-sm-4">
                            <div className="picture-container">
                              <div className="picture">
                                <img src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title />
                                <input type="file" id="wizard-picture" />
                              </div>
                              <h6 className="description">Choose Picture</h6>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group form-control-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">face</i>
                                </span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInput1" className="bmd-label-floating">First Name (required)</label>
                                <input type="text" className="form-control" id="exampleInput1" name="firstname" required />
                              </div>
                            </div>
                            <div className="input-group form-control-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">record_voice_over</i>
                                </span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInput11" className="bmd-label-floating">Last Name (required)</label>
                                <input type="text" className="form-control" id="exampleInput11" name="lastname" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-10 mt-3">
                            <div className="input-group form-control-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">email</i>
                                </span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInput1" className="bmd-label-floating">Email (required)</label>
                                <input type="email" className="form-control" id="exampleemalil" name="email" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-10 mt-3">
                            <div className="input-group form-control-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInput1" className="bmd-label-floating">Password</label>
                                <input type="password" className="form-control" id="examplepassword" name="password" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-10 mt-3">
                            <div className="input-group form-control-lg">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">lock_outline</i>
                                </span>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInput1" className="bmd-label-floating">Confirm Password</label>
                                <input type="password" className="form-control" id="exampleConfirmPassword" name="confirmPassword" required />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-10 mt-3">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" defaultValue defaultChecked />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                                I agree to the
                                <a href="#something"> terms and conditions</a>.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="address">
                        <div className="row justify-content-center">
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label>Street No.</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-7">
                            <div className="form-group">
                              <label>District</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-group">
                              <label>Commune</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-group select-wizard">
                              <label>Province</label>
                              <select className="selectpicker" data-size={7} data-style="select-with-transition" title="Select province">
                                <option value="Afghanistan">Phnom Penh</option>
                                <option value="Albania">Kandal</option>
                                <option value="Algeria">Koh Kong</option>
                                <option value="American Samoa">Kampong Cham</option>
                                <option value="Andorra">Svang Rieng</option>
                                <option value="Angola"> Takeo</option>
                                <option value="Anguilla">Stung Treng</option>
                                <option value="Antarctica">Mondulkiri</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="mr-auto">
                      <input type="button" className="btn btn-previous btn-fill btn-default btn-wd disabled" name="previous" defaultValue="Previous" />
                    </div>
                    <div className="ml-auto">
                      <input type="button" className="btn btn-next btn-fill btn-rose btn-wd" name="next" defaultValue="Next" />
                      <input type="button" className="btn btn-finish btn-fill btn-rose btn-wd" name="finish" defaultValue="Finish" style={{display: 'none'}} />
                    </div>
                    <div className="clearfix" />
                  </div>
                </form>
              </div>
            </div>
            {/* wizard container */}
        </div>
      </div>
    </div> 
    )
  }
}

export default Register