
import React, { Component } from 'react'

import OnBoarding from '../OnBoarding'
import DashboardAnalytics from '../DashboardAnalytics'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const fetchComplete = this.props.fetchComplete;
    const signinUsers = this.props.signinUsers;
    const signupUsers = this.props.signupUsers;
    const fullOnboarding = fetchComplete && !signupUsers.length ? 'full-onboarding' : '';
    const shouldOnboarding = fetchComplete && fullOnboarding
      ? <OnBoarding signupUsers={signupUsers} />
      : <div className="onboarding-content"><OnBoarding signupUsers={signupUsers} /></div>

    const shouldAnalytics = fetchComplete && !fullOnboarding
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
