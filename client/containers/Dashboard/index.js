
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
