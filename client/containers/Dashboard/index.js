
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainSection from '../../components/MainSection'
import {AUTH0_API_TOKEN, AUTH0_DOMAIN, AUTH0_API_URL} from '../../constants/env'

class Dashboard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {stats: {}, users: {}}
  }

  componentDidMount() {
    this.fetchUsers()
    this.fetchStats()
  }

  render() {
    return (
      <article>
        <Header />
        <div className="container">
          <div className="row">
            <Sidebar currentRoute={"/"} />
            <div className="col-xs-10 wrapper">
              <div id="content">
                <MainSection
                  stats={this.state.stats}
                  users={this.state.users}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  fetchUsers() {
    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)

    fetch(`${api_url}/stats/daily`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((users) => this.setState({ users }))
  }

  fetchStats() {
    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)

    fetch(`${api_url}/users`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((stats) => this.setState({ stats }))
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
