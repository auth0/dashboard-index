
import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <header className="dashboard-header">
        <nav role="navigation" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <h1 className="navbar-brand">
                <a href="/"><span>Auth0</span></a>
              </h1>
            </div>

            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className="nav hide navbar-nav navbar-left">
                <li className="li-why"><a href="/why-auth0">Why Auth0</a></li>
                <li className="li-how"><a href="/how-it-works">How It Works</a></li>
                <li className="li-pricing"><a href="/pricing">Pricing</a></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="notifications-toggle has-critical-notifications" href="#">
                    <img src="https://manage.auth0.com/img/notifications-icon.svg" alt="Notifications bell" className="notifications-icon" />
                  </a>
                </li>
                <li><a target="_blank" href="https://support.auth0.com">Help &amp; Support</a></li>
                <li><a target="_blank" href="https://auth0.com/docs">Documentation</a></li>
                <li className="dropdown">
                  <span role="button" data-toggle="dropdown" data-target="#" className="btn-dro btn-username">

                  <img src="https://secure.gravatar.com/avatar/a12075a065d2c41ac447dcffc1398d43?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fro.png" className="picture avatar" />

                  <span className="username-text truncate">auth0</span>
                    <i className="icon-budicon-460"></i>
                  </span>

                  <ul role="menu" aria-labelledby="dLabel" className="dropdown-menu animated">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#/account">Account settings</a></li>
                    <li className="divider" role="presentation"></li>
                    <li className="dropdown-header" role="presentation">US West Accounts</li>
                    <li role="presentation">
                      <a className="truncate" href="/switch?tenant=other-tenant&amp;region=default" role="menuitem" tabindex="-1" title="other-tenant">other-tenant</a>
                    </li>
                    <li className="divider" role="presentation"></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#" className="new_account">New Account</a></li>
                    <li role="presentation" className="divider"></li>
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="/logout">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
