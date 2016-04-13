
import React, { Component } from 'react'
import Sidebar from '../Sidebar'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <section className="content-page current" data-route="/" data-title="Dashboard" id="dashboard">

        <div id="onboarding">
          <header>
            <figure>
            </figure>
          </header>

          <div className="progress-bar">
            <div className="progress-loader"></div>
          </div>

          <div className="steps-content">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 content-header">
            <h1 className="pull-left">Dashboard</h1>
          </div>

        </div>

        <div className="row chart">
          <div className="col-xs-12">
            <h5>Logins and Signups along the week</h5>
          </div>

        </div>

        <div className="row">
          <div className="client-stat-boxes col-xs-12 loaded">
            <div className="widget-content row row-stats">
              <div className="stat-box stat-box-users asdasd">
                <span>Users</span>
                <strong>0</strong>
                <small>All Time</small>
              </div>

              <div className="stat-box stat-box-active-users">
                <span>Active Users</span>
                <strong>0</strong>
                <small>Last 30 days</small>
              </div>

              <div className="stat-box stat-box-logins">
                <span>Logins</span>
                <strong>0</strong>
                <small>Last 7 days</small>
              </div>

              <div className="stat-box stat-box-signups">
                <span>New Signups</span>
                <strong>0</strong>
                <small>Last 7 days</small>
              </div>

              <div className="stat-box stat-box-suspicious">
                <span>Suspicious</span>
                <strong>0</strong>
                <small>Last 7 days</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-widgets">

            <div className="col-user-list col-user-last-logins">
              <div className="last-logins widget-box">
                <h5>Recent logins</h5>
                <div className="widget-content">
                  <p>
                    <span>There are no logins for your connections yet</span>
                    <a href="#" className="try-now">Try now</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-user-list col-user-last-signup">
              <div className="last-signups widget-box">
                <h5>New users</h5>
                <div className="widget-content">
                  <ul className="user-list">
                    <li>
                      <a href="#/users/YXV0aDB8NTYxZWIyYzFhMjY5NjE5ZTU0YjIwN2Vm">
                        <figure>
                          <img className="avatar" src='https://secure.gravatar.com/avatar/bba106eccbfdfb10e88b78595228b62e?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png'/>
                          <span className="social-login twitter"></span>
                        </figure>
                        <div className="description-content">
                          <time title="Wed Oct 14 2015 16:53:37 GMT-0300">6 months ago</time>
                          <span className="username">Ricky Rauch</span>
                          <span className="user-list-connection">Username-Password-Authentication</span>
                          <span className="user-list-location hide">Buenos Aires, Argentina</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default MainSection
