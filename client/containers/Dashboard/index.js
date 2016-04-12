
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import MainSection from '../../components/MainSection'

class Dashboard extends Component {
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
