
import React, { Component } from 'react'

import {Line as LineChart} from 'react-chartjs'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      lineChartData: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        datasets: [
          {
            label: "Logins",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Signups",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {}
    }
  }

  render() {
    return (
      <section className="content-page current" data-route="/" data-title="Dashboard" id="dashboard">
        <div className="row">
          <div className="col-xs-12 content-header">
            <h1 className="pull-left">Dashboard</h1>
          </div>

        </div>

        <div className="row chart">
          <div className="col-xs-12">
            <h5>Logins and Signups along the week</h5>
            <LineChart data={this.state.lineChartData} options={this.state.lineChartOptions} />
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
                        <time title="Wed Oct 14 2015 16:53:37 GMT-0300">6 months ago</time>
                        <img className="avatar" src='https://secure.gravatar.com/avatar/bba106eccbfdfb10e88b78595228b62e?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png'/>
                        <span className="username">Ricky Rauch</span>
                        <span className="user-list-connection">Username-Password-Authentication</span>
                        <span className="user-list-location hide">Buenos Aires, Argentina</span>
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
