import React, { Component } from 'react'
import { Line as LineChart } from 'react-chartjs'
import moment from 'moment'

const lineChartOptions = {
  responsive: true,
  height: 300
}

class DashboardAnalytics extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    const lineChartData = this.getLineChartData(this.props.stats)

    return (
      <div className="dashboard-analytics">
        <div className="row">
          <div className="col-xs-12 content-header">
            <a href="/#/applications/create" className="btn btn-success pull-right new"><i className="icon-budicon-473"></i>New Application</a>
            <h1 className="pull-left">Dashboard</h1>
          </div>

        </div>

        <div className="row chart">
          <div className="col-xs-12">
            <div className="chart-container">
              <h5>Logins and Signups along the week</h5>
              <LineChart data={lineChartData} options={lineChartOptions} height="100" />
              <div className="chart-items">
                <div className="chart-item"><i></i> Signups</div>
                <div className="chart-item"><i></i> Logins</div>
              </div>
            </div>
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
                  {
                    (function renderLastLogins() {
                      if (!this.props.lastSigninUsers.length) {
                        return (
                          <p>
                            <span>There are no logins for your connections yet</span>
                            <a href="#" className="try-now">Try now</a>
                          </p>
                        )
                      }

                      return (
                        <ul className="user-list">
                          {this.props.lastSigninUsers.map(function (user) {
                            const connection = user.identities.length ? user.identities[0].connection : ''
                            return <li key={user.user_id}>
                              <a href={`#/users/${user.user_id}`}>
                                <figure>
                                  <img className="avatar" src={user.picture} />
                                  <span className={`social-login ${connection}`}></span>
                                </figure>
                                <div className="description-content">
                                  <time title={moment(user.last_login)}>{moment(user.last_login).fromNow()}</time>
                                  <span className="username">{user.username || user.email || user.nickname}</span>
                                  <span className="user-list-connection">{connection}</span>
                                  <span className="user-list-location hide">Buenos Aires, Argentina</span>
                                </div>
                              </a>
                            </li>
                          })}
                        </ul>
                      )
                    }).bind(this)()
                  }

                </div>
              </div>
            </div>

            <div className="col-user-list col-user-last-signup">
              <div className="last-signups widget-box">
                <h5>New users</h5>
                <div className="widget-content">
                  <ul className="user-list">
                    {this.props.lastSignupUsers.map(function (user) {
                      const connection = user.identities.length ? user.identities[0].connection : ''
                      return <li key={user.user_id}>
                        <a href={`#/users/${user.user_id}`}>
                          <figure>
                            <img className="avatar" src={user.picture} />
                            <span className={`social-login ${connection}`}></span>
                          </figure>
                          <div className="description-content">
                            <time title={moment(user.created_at)}>{moment(user.created_at).fromNow()}</time>
                            <span className="username">{user.username || user.email || user.nickname}</span>
                            <span className="user-list-connection">{connection}</span>
                            <span className="user-list-location hide">Buenos Aires, Argentina</span>
                          </div>
                        </a>
                      </li>
                    })}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  parseStats (stats = []) {
    return lineChartData
  }

  getLineChartData(stats = []) {
    return {
      labels: this.resolveLabels(stats),
      datasets: [
        this.getLoginsDataset(stats),
        this.getSignupsDataset(stats)
      ]
    }
  }
  resolveLabels(stats = []) {
    return stats.map((stat) => moment(stat.date).format('dddd'))
  }

  getLoginsDataset (stats) {
    return {
      label: "Logins",
      fillColor: "rgba(255, 154, 87, .1)",
      strokeColor: "rgba(255, 154, 87, 1)",
      pointColor: "rgba(255, 154, 87, 1)",
      pointStrokeColor: "rgba(255, 154, 87, 1)",
      pointHighlightFill: "rgba(255, 154, 87, 1)",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: stats.map((stat) => stat.logins)
    }
  }

  getSignupsDataset (stats) {
    return {
      label: "Signups",
      fillColor: "rgba(1, 180, 143, .1)",
      strokeColor: "rgba(1, 180, 143, 1)",
      pointColor: "rgba(1, 180, 143, 1)",
      pointStrokeColor: "rgba(1, 180, 143, 1)",
      pointHighlightFill: "rgba(1, 180, 143, 1)",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: stats.map((stat) => stat.signups)
    }
  }

}

export default DashboardAnalytics