import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <div id="sidebar" className="col-xs-2">
        <a href="#" className="visible-phone hide"><i className="icon icon-budicon-497"></i>Dashboard</a>
        <div className="sidebar-fixed">
          <ul>
            <li><a href="#/"><i className="icon icon-budicon-497"></i> <span>Sample Section</span></a></li>

            <li className="active"><a href="#/reports"><i className="icon icon-budicon-279"></i> <span>Sample Section</span></a></li>
            <li><a href="#/applications"><i className="icon icon-budicon-375"></i> <span>Sample Section</span></a></li>
            <li><a href="#/externalapps"><i className="icon icon-budicon-143"></i> <span>Sample Section</span></a></li>
            <li className="connections-tab submenu">
              <a href="#"><i className="icon icon-budicon-339"></i> <span>Sample Section</span></a>
              <span className="featuring-badge animated bounce">New</span>
              <ul style={{display: 'none'}}>
                <li>
                  <a href="#/connections/database"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
                <li>
                  <a href="#/connections/social"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
                <li>
                  <a href="#/connections/enterprise"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
                <li>
                  <a href="#/connections/passwordless"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/users">
                <i className="icon icon-budicon-292"></i> <span>Sample Section</span>
                <span className="users-count label">0</span>
              </a>
            </li>

            <li><a href="#/rules"><i className="icon icon-budicon-173"></i> <span>Sample Section</span></a></li>
            <li><a href="#/multifactor"><i className="icon icon-budicon-243"></i> <span>Sample Section</span></a></li>
            <li><a href="#/login_page"><i className="icon icon-budicon-725"></i> <span>Sample Section</span></a></li>

            <li className="submenu">
              <a href="#"><i className="icon icon-budicon-778"></i> <span>Sample Section</span></a>
              <ul style={{display: 'none'}}>
                <li>
                  <a href="#/emails"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
                <li>
                  <a href="#/emails/provider"><i className="icon icon-budicon-519"></i><span>Sample Section</span></a>
                </li>
              </ul>
            </li>

            <li><a href="#/logs"><i className="icon icon-budicon-754"></i> <span>Sample Section</span></a></li>

          </ul>

          <div className="sidebar-footer-links"></div>
        </div>
      </div>
    )
  }
}

export default Sidebar
