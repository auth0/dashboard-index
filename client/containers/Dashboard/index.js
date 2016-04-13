
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainSection from '../../components/MainSection'
import {AUTH0_API_TOKEN, AUTH0_DOMAIN, AUTH0_API_URL} from '../../constants/env'

class Dashboard extends Component {
  constructor() {
    super()
    this.stats = {}
  }
  componentDidMount() {
    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)

    fetch(`${api_url}/stats/daily`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((stats) => console.log(stats))
  }

  render() {
    const { todos, actions } = this.props
    return (
      <span>

        <div className="onboarding-content">
          <div id="onboarding">
            <header>
              <figure>
                <img src="https://lh4.googleusercontent.com/-RPVOHHBbt-8/AAAAAAAAAAI/AAAAAAAAAAA/AMW9IgcrcsVGyPyixI8l5vwB_iGS-o1bdA/s192-c-mo/photo.jpg"/>
              </figure>
              <h2>Welcome Benjamin!</h2>
              <p>In order to start using Auth0, we recommend you to check the next features to improve</p>
            </header>

            <div className="progress-content">
              <div className="bar">
                <span className="loader" style={{width:'10%'}}>
                  <span className="loader-tooltip">10%</span>
                </span>
              </div>
            </div>

            <div className="steps-content">
              <div className="step-container checked">
                <h3>
                  <i className="check-circle"></i>
                  <span>Setup your account</span>
                </h3>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Install & Customize Lock</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Create your first user</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Change your Social Connections</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Edit one user profile</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Change your email settings</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Create a rule</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <div className="step-container">
                <h3>
                  <i className="check-circle"></i>
                  <span>Setup a third party app</span>
                </h3>
                <div className="step-info">
                  <p>Lock will allow you to quickly get your login box flow working, without coding!. Login, signup, forgot password, password policity and more.</p>
                  <a href="#">Start now</a>
                </div>
              </div>

              <footer>
                <a href="#">Stuck on something? Contact support</a>
              </footer>
            </div>
          </div>
        </div>

        <Header />
        <div className="container">
          <div className="row">
            <Sidebar currentRoute={"/"} />
            <div className="col-xs-10 wrapper">
              <div id="content">
                <MainSection />
              </div>
            </div>
          </div>
        </div>
      </span>
    )
  }
}

function mapStateToProps(state) {
  return {
    // lineChartData: this.parseData(this.state.data)
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
