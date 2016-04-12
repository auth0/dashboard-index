
import React, { Component } from 'react'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  render() {
    return (
      <header className="dashboard-header" style={{backgroundColor: '#fbfbfb'}}>
        <nav role="navigation" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <h1 className="navbar-brand">
                <a href="http://manage.auth0.com/"><span>Auth0</span></a>
              </h1>
            </div>

            <div id="navbar-collapse" className="collapse navbar-collapse">
              <ul className="nav hide navbar-nav navbar-left">
                <li className="li-why"><a href="/why-auth0">Why Auth0</a></li>
                <li className="li-how"><a href="/how-it-works">How It Works</a></li>
                <li className="li-pricing"><a href="/pricing">Pricing</a></li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li><a className="upgrade-account" href="/#/account/billing/subscription"><i className="icon-budicon-466"></i> Link</a></li>
                <li><a target="_blank" href="https://auth0.com/support">Link</a></li>
                <li><a target="_blank" href="https://auth0.com/docs">Link</a></li>
                <li className="dropdown">
                  <span role="button" data-toggle="dropdown" data-target="#" className="btn-dro btn-username">

                  <img src="https://secure.gravatar.com/avatar/a12075a065d2c41ac447dcffc1398d43?s=480&amp;r=pg&amp;d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fro.png" className="picture avatar" />

                  <span className="username-text truncate">Username</span>
                    <i className="icon-budicon-460"></i>
                  </span>

                  <ul role="menu" aria-labelledby="dLabel" className="dropdown-menu animated">
                    <li role="presentation"><a role="menuitem" tabindex="-1" href="#/account">Account settings</a></li>
                    <li role="presentation" className="divider"></li>
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
