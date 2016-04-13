
import React, { Component } from 'react'

import OnBoarding from '../OnBoarding'
import DashboardAnalytics from '../DashboardAnalytics'

const lineChartData = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Logins",
      fillColor: "rgba(255, 154, 87, .1)",
      strokeColor: "rgba(255, 154, 87, 1)",
      pointColor: "rgba(255, 154, 87, 1)",
      pointStrokeColor: "rgba(255, 154, 87, 1)",
      pointHighlightFill: "rgba(255, 154, 87, 1)",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Signups",
      fillColor: "rgba(1, 180, 143, .1)",
      strokeColor: "rgba(1, 180, 143, 1)",
      pointColor: "rgba(1, 180, 143, 1)",
      pointStrokeColor: "rgba(1, 180, 143, 1)",
      pointHighlightFill: "rgba(1, 180, 143, 1)",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
}

const lineChartOptions = {
  responsive: true,
  height: 300
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { lineChartData, lineChartOptions }
  }

  render() {
    const lineChartData = this.parseData(this.props.stats, this.props.users)
    const lastSignupUsers = this.parseSignupUsers(this.props.users)
    const lastSigninUsers = this.parseSigninUsers(this.props.users)

    const fullOnboarding = 'full-onboarding';
    const shouldOnboarding = fullOnboarding
      ? <OnBoarding />
      : null
    const shouldAnalytics = !fullOnboarding
      ? <DashboardAnalytics
            lineChartData={this.state.linechartData}
            linechartOptions={this.state.linechartOptions}
          />
      : null

    return (
      <section className={`content-page current ${fullOnboarding}`} data-route="/" data-title="Dashboard" id="dashboard">
        {shouldOnboarding}
        {shouldAnalytics}
      </section>
    )
  }

  parseData (stats = {}, users = {}) {
    console.log(stats, users)
    return lineChartData
  }

  parseSigninUsers (stats = {}, users = {}) {
    console.log(stats, users)
    return lineChartData
  }

  parseSignupUsers (stats = {}, users = {}) {
    console.log(stats, users)
    return lineChartData
  }
}

export default MainSection
