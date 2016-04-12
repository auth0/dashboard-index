import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <div id="sidebar" className="col-xs-2">
        <a href="#" className="visible-phone hide"><i className="icon icon-budicon-497"></i>Dashboard</a>
        <div className="sidebar-fixed">
          <ul>
            <li className="active"><a href="#/"><i className="icon icon-budicon-497"></i> <span>Dashboard</span></a></li>
            <li><a href="#/applications"><i className="icon icon-budicon-375"></i> <span>Applications</span></a></li>
            <li><a href="#/externalapps"><i className="icon icon-budicon-143"></i> <span>SSO Integrations</span></a></li>
            <li className="connections-tab submenu">
              <a href="#"><i className="icon icon-budicon-339"></i> <span>Connections</span></a>
              <span className="featuring-badge animated bounce">New</span>

              <ul style={{display: 'none'}}>
                <li>
                  <a href="#/connections/database"><i className="icon icon-budicon-519"></i><span>Database</span></a>
                </li>
                <li>
                  <a href="#/connections/social"><i className="icon icon-budicon-519"></i><span>Social</span></a>
                </li>
                <li>
                  <a href="#/connections/enterprise"><i className="icon icon-budicon-519"></i><span>Enterprise</span></a>
                </li>
                <li>
                  <a href="#/connections/passwordless"><i className="icon icon-budicon-519"></i><span>Passwordless</span></a>
                </li>

              </ul>
            </li>
            <li>
              <a href="#/users">
                <i className="icon icon-budicon-292"></i> <span>Users</span>
              </a>
            </li>

            <li><a href="#/rules"><i className="icon icon-budicon-173"></i> <span>Rules</span></a></li>
            <li className="hide"><a href="#/cron"><i className="icon icon-budicon-622"></i> <span>Scheduled jobs</span></a></li>
            <li><a href="#/multifactor"><i className="icon icon-budicon-243"></i> <span>Multifactor Auth</span></a></li>
            <li><a href="#/login_page"><i className="icon icon-budicon-725"></i> <span>Login Page</span></a></li>

            <li className="submenu">
              <a href="#"><i className="icon icon-budicon-778"></i> <span>Emails</span></a>
              <ul style={{display: 'none'}}>
                <li>
                  <a href="#/emails"><i className="icon icon-budicon-519"></i><span>Templates</span></a>
                </li>
                <li>
                  <a href="#/emails/provider"><i className="icon icon-budicon-519"></i><span>Provider</span></a>
                </li>
              </ul>
            </li>

            <li><a href="#/logs"><i className="icon icon-budicon-754"></i> <span>Logs</span></a></li>

            <li><a href="#/anomaly"><i className="icon icon-budicon-528"></i> <span>Anomaly Detection</span></a></li>

            <li>
              <a href="#/extensions">
                <i className="icon icon-budicon-324"></i>
                <span>Extensions</span>
              </a>
            </li>

            <li>
              <a className="js-zendesk-button" target="_blank" href="https://support.auth0.com"><i className="icon icon-budicon-803"></i> Get Support</a>
            </li>
          </ul>

          <div className="sidebar-footer-links"></div>
        </div>
      </div>
    )
  }
}

export default Sidebar
