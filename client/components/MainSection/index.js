
import React, { Component } from 'react'

import OnBoarding from '../OnBoarding'
import DashboardAnalytics from '../DashboardAnalytics'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const signinUsers = this.props.signinUsers;
    const signupUsers = this.props.signupUsers;
    const fullOnboarding = !signupUsers.length ? 'full-onboarding' : '';
    const shouldOnboarding = fullOnboarding
      ? <OnBoarding />
      : <div className="onboarding-content"><OnBoarding /></div>

    const shouldAnalytics = !fullOnboarding
      ? <DashboardAnalytics
            stats={this.props.stats}
            lastSigninUsers={signinUsers}
            lastSignupUsers={signupUsers}
          />
      : null

    return (
      <section className={`content-page current ${fullOnboarding}`} data-route="/" data-title="Dashboard" id="dashboard">
        {shouldOnboarding}
        {shouldAnalytics}
      </section>
    )
  }
}

export default MainSection
