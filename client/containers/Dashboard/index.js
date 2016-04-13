
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainSection from '../../components/MainSection'
import {AUTH0_API_TOKEN, AUTH0_DOMAIN, AUTH0_API_URL} from '../../constants/env'
import moment from 'moment'
class Dashboard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {stats: [], signupUsers: [], signinUsers: [], fetch_complete: false }
  }

  componentDidMount() {
    this.fetchStats()
    this.fetchSignupUsers()
    this.fetchSigninUsers()
  }

  render() {
    const stats = this.state.stats.reverse();
    const signupUsers = this.state.signupUsers;
    const signinUsers = this.state.signinUsers;
    const fetch_complete = this.state.fetch_complete;
    const staticOnboarding = (fetch_complete && signupUsers.length) ? 'static-onboarding' : ''

    return (
      <article className={`${staticOnboarding}`}>
        <Header />
        <div className="container">
          <div className="row">
            <Sidebar currentRoute={"/"} />
            <div className="col-xs-10 wrapper">
              <div id="content">
                <MainSection
                  stats={stats}
                  fetchComplete={fetch_complete}
                  signupUsers={signupUsers}
                  signinUsers={signinUsers}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  fetchStats() {
    const dateTo = moment().format('YYYYMMDD');
    const dateFrom = moment().subtract(7,'days').format('YYYYMMDD');

    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)
    const url = new URL(`${api_url}/stats/daily`)
    // const get_query = {
    //   from: dateFrom,
    //   to: dateTo
    // }

    // var search = Object
    //   .keys(get_query)
    //   .map(key => `${key}=${get_query[key]}`)

    // url.search = search.join('&')

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((stats) => this.setState({ stats }))
  }

  fetchSigninUsers() {
    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)
    const url = new URL(`${api_url}/users`)
    const get_query = {
      search_engine: 'v2',
      sort: 'last_login:-1',
      q: '_exists_:last_login'
    }

    var search = Object
      .keys(get_query)
      .map(key => `${key}=${get_query[key]}`)

    url.search = search.join('&')

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((signinUsers) => this.setState({ signinUsers }))
  }

  fetchSignupUsers() {
    const api_url = AUTH0_API_URL.replace('{tenant_domain}', AUTH0_DOMAIN)
    const url = new URL(`${api_url}/users`)
    const get_query = {
      search_engine: 'v2',
      sort: 'created_at:-1'
    }

    var search = Object
      .keys(get_query)
      .map(key => `${key}=${get_query[key]}`)

    url.search = search.join('&')

    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${AUTH0_API_TOKEN}`
      }
    })
    .then((response) => response.json())
    .then((signupUsers) => this.setState({ signupUsers, fetch_complete: true }))
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
